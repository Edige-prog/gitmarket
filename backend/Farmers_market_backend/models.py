# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


# class Category(models.Model):
#     category_id = models.CharField(primary_key=True, max_length=36)
#     name = models.CharField(unique=True, max_length=255)
#     description = models.TextField(blank=True, null=True)
#     parent_category = models.ForeignKey('self', models.DO_NOTHING, blank=True, null=True)
#     created_at = models.DateTimeField(blank=True, null=True)
#     updated_at = models.DateTimeField(blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'Category'


# class Farmer(models.Model):
#     user = models.OneToOneField('Users', models.DO_NOTHING, primary_key=True)
#     years_of_experience = models.IntegerField()
#     specialization = models.CharField(max_length=255, blank=True, null=True)
#     certification_details = models.TextField(blank=True, null=True)
#     total_farm_area = models.FloatField(blank=True, null=True)
#     average_performance = models.FloatField(blank=True, null=True)
#     created_at = models.DateTimeField(blank=True, null=True)
#     updated_at = models.DateTimeField(blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'Farmer'


# class Farmeranalytics(models.Model):
#     farmer = models.OneToOneField(Farmer, models.DO_NOTHING, primary_key=True)
#     total_sales = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
#     total_orders = models.IntegerField(blank=True, null=True)
#     completed_orders = models.IntegerField(blank=True, null=True)
#     average_order_value = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
#     total_products_listed = models.IntegerField(blank=True, null=True)
#     total_farms = models.IntegerField(blank=True, null=True)
#     last_order_date = models.DateTimeField(blank=True, null=True)
#     created_at = models.DateTimeField(blank=True, null=True)
#     updated_at = models.DateTimeField(blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'FarmerAnalytics'


# class Orderitem(models.Model):
#     order_item_id = models.CharField(primary_key=True, max_length=36)
#     order = models.ForeignKey('Orders', models.DO_NOTHING)
#     product = models.ForeignKey('Products', models.DO_NOTHING)
#     quantity = models.IntegerField()
#     price_per_unit = models.DecimalField(max_digits=10, decimal_places=2)
#     total_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'OrderItem'


# class Orders(models.Model):
#     order_id = models.CharField(primary_key=True, max_length=36)
#     buyer = models.ForeignKey('Users', models.DO_NOTHING)
#     farmer = models.ForeignKey(Farmer, models.DO_NOTHING)
#     farm = models.ForeignKey('Farm', models.DO_NOTHING)
#     order_date = models.DateTimeField(blank=True, null=True)
#     status = models.CharField(max_length=9, blank=True, null=True)
#     total_amount = models.DecimalField(max_digits=10, decimal_places=2)
#     delivery_address = models.TextField()
#     created_at = models.DateTimeField(blank=True, null=True)
#     updated_at = models.DateTimeField(blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'Orders'


# class Products(models.Model):
#     product_id = models.CharField(primary_key=True, max_length=36)
#     farm = models.ForeignKey('Farm', models.DO_NOTHING)
#     category = models.ForeignKey(Category, models.DO_NOTHING)
#     name = models.CharField(max_length=255)
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     quantity = models.IntegerField()
#     description = models.TextField(blank=True, null=True)
#     image_urls = models.JSONField(blank=True, null=True)
#     is_active = models.IntegerField(blank=True, null=True)
#     created_at = models.DateTimeField(blank=True, null=True)
#     updated_at = models.DateTimeField(blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'Products'


# class Farm(models.Model):
#     farm_id = models.CharField(primary_key=True, max_length=36)
#     farmer = models.ForeignKey(Farmer, models.DO_NOTHING)
#     farm_name = models.CharField(max_length=255)
#     farm_size = models.FloatField()
#     farm_location = models.TextField()
#     image_urls = models.JSONField(blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'farm'


# class Users(models.Model):
#     user_id = models.CharField(primary_key=True, max_length=36)
#     name = models.CharField(max_length=50)
#     email = models.CharField(unique=True, max_length=50)
#     phone = models.CharField(unique=True, max_length=50)
#     password = models.CharField(max_length=255)
#     role = models.CharField(max_length=6)
#     registration_date = models.DateTimeField(blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'users'
