from django.contrib.auth.models import BaseUserManager, PermissionsMixin, AbstractBaseUser, Group, Permission
from django.utils import timezone
from django.db import models
import uuid

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra):
        if not email:
            raise ValueError("The email data must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password, **extra):
        extra.setdefault('is_staff', True)
        extra.setdefault('is_superuser', True)

        if extra.get('is_staff') is not True:
            raise ValueError("Superuser must have is_staff=True")
        if extra.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True")
        return self.create_user(email, password, **extra)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.UUIDField(primary_key=True, default=uuid.uuid4, max_length=36)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=20, blank=True, unique=True)
    first_name = models.CharField(max_length=25, blank=True)
    last_name = models.CharField(max_length=25, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    image = models.ImageField(blank=True, upload_to='images/users/')
    password = models.CharField(max_length=25, null=False)


    ROLE_CHOICES = [
        ('Farmer', 'Farmer'),
        ('Buyer', 'Buyer'),
        ('Admin', 'Admin')
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email


class Admin(models.Model):
    user = models.OneToOneField(
        CustomUser,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    permissions = models.JSONField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Admin: {self.user.username}"

class Farmer(models.Model):
    user = models.OneToOneField('users.CustomUser', models.CASCADE, primary_key=True)
    years_of_experience = models.IntegerField(default=1)
    specialization = models.CharField(max_length=255, blank=True, null=True)
    certification_details = models.TextField(blank=True, null=True)
    total_farm_area = models.FloatField(blank=True, null=True)
    average_performance = models.FloatField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.email}"

class Buyer(models.Model):
    user = models.OneToOneField(
        CustomUser,
        on_delete=models.CASCADE,
        primary_key=True,
    )
    preferred_categories = models.JSONField(blank=True, null=True)
    default_delivery_address = models.TextField(blank=True, null=True)
    total_spent = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Buyer: {self.user.username}"
