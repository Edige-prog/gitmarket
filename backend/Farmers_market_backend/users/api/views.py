from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from rest_framework.views import APIView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenRefreshSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import serializers, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from users.models import CustomUser
from .permissions import IsFarmer, IsAdmin, IsBuyer
from rest_framework import viewsets
from .serializers import ProfileSerializer, FarmerSerializer, BuyerSerializer, AdminSerializer
from users.models import Farmer, Buyer, Admin
from rest_framework import mixins

class MyTokenObtainSerializer(TokenObtainPairSerializer):


    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token["username"] = user.username
        token["email"] = user.email
        token['role'] = user.role

        return token


class MyTokenObtainView(TokenObtainPairView):
    serializer_class = MyTokenObtainSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        refresh_token = serializer.validated_data["refresh"]
        access_token = serializer.validated_data["access"]

        response = Response({"success": "Login successful"}, status=status.HTTP_200_OK)
        response.set_cookie(
            key="access_token",
            value=access_token,
            httponly=True,
            secure=True,
            samesite='Lax'
        )
        response.set_cookie(
            key="refresh_token",
            value=refresh_token,
            httponly=True,
            secure=True,
            samesite='Lax'
        )
        return response


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'phone_number', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            email=validated_data['email'],
            username=validated_data.get('username', ''),
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone_number=validated_data.get('phone_number', ''),
            role=validated_data.get('role'),
        )
        user.set_password(validated_data.password)
        user.save()
        return user


class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CookieTokenRefreshView(APIView):
    permission_classes = []

    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get('refresh_token')
        if not refresh_token:
            return Response({"error": "No refresh token provided"}, status=status.HTTP_401_UNAUTHORIZED)

        serializer = TokenRefreshSerializer(data={'refresh': refresh_token})

        try:
            serializer.is_valid(raise_exception=True)
            access_token = serializer.validated_data["access"]

            response = Response({"success": "Token refreshed"}, status=status.HTTP_200_OK)
            response.set_cookie(
                key="access_token",
                value=access_token,
                httponly=True,
                secure=True,
                samesite='Lax'
            )
            return response
        except TokenError as e:
            return Response({"error": "Invalid or expired refresh token"}, status=status.HTTP_401_UNAUTHORIZED)
        except InvalidToken as e:
            return Response({"error": "Inlaid token"}, status=status.HTTP_403_FORBIDDEN)


class LogoutView(APIView):
    def post(self, request):
        response = Response({"success": "Logged out"}, status=status.HTTP_200_OK)
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')
        return response


class ProfileViewset(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ProfileSerializer

    def retrieve(self, request):

        user = request.user
        serializer = self.get_serializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def update(self, request):
        user = request.user

        if user.role == 'farmer':
            serializer = FarmerSerializer(user, data=request.data, partial=True)
        elif user.role == 'buyer':
            serializer = BuyerSerializer(user, data=request.data, partial=True)
        else:
            serializer = AdminSerializer(user, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class FarmersViewset(mixins.ListModelMixin, 
                    mixins.RetrieveModelMixin, 
                    viewsets.GenericViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer

class BuyerViewset(mixins.ListModelMixin, 
                   mixins.RetrieveModelMixin, 
                   viewsets.GenericViewSet):
    queryset = Buyer.objects.all()
    serializer_class = BuyerSerializer
    
        

        
