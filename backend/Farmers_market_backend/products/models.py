from django.db import models
from market.models import Farm
from users.models import Farmer
from django.utils import timezone
import uuid

class Category(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}: {self.description} "


class Product(models.Model):
    product_id = models.UUIDField(primary_key=True, default=uuid.uuid4, max_length=36)
    farm = models.ForeignKey(Farm, models.CASCADE)
    category = models.ForeignKey(Category, models.DO_NOTHING)
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    description = models.TextField(null=True)
    image_urls = models.JSONField(blank=True, null=True)
    is_active = models.BooleanField(blank=True, null=True, default=True)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return f"{self.name}: {self.farm}"
