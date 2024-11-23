from django.db import models
from users.models import Buyer, Farmer, Admin
from products.models import Product
from market.models import Farm
import uuid

class Order(models.Model):
    order_id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
        max_length=36
    )
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    buyer_id = models.ForeignKey(Buyer, models.DO_NOTHING)
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled')
    ])
    farmer_id = models.ForeignKey(Farmer, models.CASCADE)
    farm_id = models.ForeignKey(Farm, models.CASCADE)

class OrderItem(models.Model):
    order_item_id = models.CharField(primary_key=True, max_length=36)
    order_id = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="items")
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    unit_name = models.CharField(max_length=20, choices=[
        ('kg', 'kg'),
        ('pcs', 'pcs'),
        ('litres', 'litres')
    ])
    quantity = models.PositiveIntegerField()
    farm_id = models.ForeignKey(Farm, on_delete=models.DO_NOTHING, related_name="order_items")
    price = models.DecimalField(max_digits=10, decimal_places=2)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

class Delivery(models.Model):
    delivery_method = models.CharField(max_length=11)
    cost = models.DecimalField(max_digits=10, decimal_places=0)
    status = models.CharField(max_length=10, blank=True, null=True)
    order_date = models.DateTimeField()
    delivery_date = models.DateTimeField()
    farmer_confirmation = models.IntegerField(blank=True, null=True)
    buyer_confirmation = models.IntegerField(blank=True, null=True)
    buyer = models.ForeignKey(Buyer, models.DO_NOTHING)
    farmer = models.ForeignKey(Farmer, models.DO_NOTHING)
    order = models.OneToOneField('Order', models.DO_NOTHING)

