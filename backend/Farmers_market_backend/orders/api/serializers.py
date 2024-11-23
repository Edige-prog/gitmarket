from rest_framework.serializers import ModelSerializer, SerializerMethodField
from orders.models import Order


class OrderSerializer(ModelSerializer):
    total_price = SerializerMethodField()

    class Meta:
        model = Order
    
    def get_total_price(self, obj):
        order_items = obj.items
        total_price = 0