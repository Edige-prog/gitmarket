from django.contrib import admin
from .models import CustomUser, Farmer, Buyer, Admin



@admin.register(CustomUser)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Farmer)
class FarmerAdmin(admin.ModelAdmin):
    pass

@admin.register(Buyer)
class BuyerAdmin(admin.ModelAdmin):
    pass

@admin.register(Admin)
class AdminAdmin(admin.ModelAdmin):
    pass

