from django.shortcuts import render
from rest_framework import viewsets
from users.models import Farmer, Buyer
from users.api.serializers import FarmerRegistrationSerializer, BuyerRegistrationSerializer
from users.api.permissions import IsFarmer, IsBuyer


class FarmerViewSet(viewsets.ModelViewSet):
    permission_classes = [IsFarmer]
    serializer_class = FarmerRegistrationSerializer

    def get_queryset(self):
        return Farmer.objects.filter(id=self.request.user.id)


class BuyerViewSet(viewsets.ModelViewSet):
    permission_classes = [IsBuyer]
    serializer_class = BuyerRegistrationSerializer

    def get_queryset(self):
        return Buyer.objects.filter(id=self.request.user.id)
