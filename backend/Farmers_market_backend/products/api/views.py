from rest_framework import viewsets, status
from django.shortcuts import get_object_or_404
from products.models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from django.db.models import Q


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # getting the list of products
    # route = GET products/
    def list(self, request):
        products = self.get_queryset()
        serializer = self.get_serializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # creating a product
    # route = POST products/
    def create(self, request):
        product_data = request.data
        serializer = self.get_serializer(data=product_data)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": "Product created"})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # getting a specific product
    # route = GET products/<id>
    def retrieve(self, request, pk=None, *args, **kwargs):
        product = get_object_or_404(Product, pk=pk)
        serializer = self.get_serializer(product)
        return Response(serializer.data)

    # updating a product
    # route = PUT products/<id>
    def update(self, request, pk=None):
        product = get_object_or_404(Product, pk=pk)
        serializer = self.get_serializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": "Product was changes"}, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # updating product partially
    # route = PATCH products/<id>
    def partial_update(self, request, pk=None):

        product = get_object_or_404(Product, pk=pk)
        serializer = self.get_serializer(product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # deleting a product
    # route = DELETE products/<id>

    def destroy(self, request, pk=None):

        product = get_object_or_404(Product, pk=pk)
        product.delete()
        return Response({"success": "Product was deleted succesfully"}, status=status.HTTP_202_ACCEPTED)

    @action(detail=True, methods=['patch'], url_path='update-stock')
    def update_stock(self, request, pk=None):
        product = get_object_or_404(Product, pk=pk)
        new_quantity = request.data.get("quantity", None)

        if new_quantity is not None and isinstance(new_quantity, int):
            product.quantity = new_quantity
            product.save()
            return Response({"message": "Stock updated"}, status=status.HTTP_200_OK)

        return Response({"error": "Invalid or missing quantity"}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['get'], url_path='low-stock')
    def low_stock(self, request):
        threshold = request.query_params.get('threshold', 10)
        low_stock_products = Product.objects.filter(quantity__lte=threshold)
        serializer = self.get_serializer(low_stock_products, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_path='search')
    def search(self, request):
        search = request.query_params.get("search", "")
        if search:
            filtered_products = Product.objects.filter(Q(name__icontains=search)
                                                       | Q(description__icontains=search),
                                                       quantity__gt=0).distinct()
            serializer = self.get_serializer(filtered_products, many=True)
            return Response(serializer.data)
        return Response({"error": "Invalid or missing search"}, status=status.HTTP_400_BAD_REQUEST)

    # @action(detail=False, methods=['patch'], url_path='bulk-update-stock')
    # def bulk_update_stock(self, request):
    #     updates = request.data


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
