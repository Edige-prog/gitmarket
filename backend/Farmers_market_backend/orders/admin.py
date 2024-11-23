from django.contrib import admin
from .models import Order, OrderItem, Delivery


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    pass

@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    pass

@admin.register(Delivery)
class DeliveryAdmin(admin.ModelAdmin):
    pass
    