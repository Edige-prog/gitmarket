from rest_framework import viewsets, serializers
from orders.models import Order, Delivery
from .serializers import OrderSerializer

class OrderViewset(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    


