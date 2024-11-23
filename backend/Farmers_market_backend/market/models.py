from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone
import uuid
from users.models import CustomUser, Farmer, Buyer, Admin

class Farm(models.Model):
    farm_id = models.UUIDField(primary_key=True, default=uuid.uuid4, max_length=36)
    farmer_id = models.ForeignKey(Farmer, models.CASCADE)
    farm_name = models.CharField(max_length=255)
    farm_size = models.FloatField()
    farm_location = models.TextField()
    image_urls = models.JSONField(blank=True, null=True)


    def __str__(self):
        return f"{self.farm_name}: {self.farm_location} ({self.farmer_id.user.first_name})"

