from rest_framework import serializers
from users.models import Farmer, Buyer, Admin, CustomUser


class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer
        exclude = ['password']


class BuyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buyer
        exclude = ['password']


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ['password']

class ProfileSerializer(serializers.ModelSerializer):
    profile_data = serializers.SerializerMethodField()

    class Meta: 
        model = CustomUser
        fields = ['profile_data']
    
    def get_profile_data(self, obj):
        if obj.role == "farmer":
            return FarmerSerializer(obj).data
        elif obj.role=="buyer": 
            return BuyerSerializer(obj).data
        else:
            return AdminSerializer(obj).data


