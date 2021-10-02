from django.db import models
from account.models import Customer
from product.models import Product

class Invoice(models.Model):
    # name = models.CharField(max_length=100, default="customer")
    # shop_name = models.CharField(max_length=100, default="Shop Nmae")
    # phone_number = models.BigIntegerField(default="01000000000")
    # product_name = models.CharField(max_length=100, default="Product Name")
    # product_price = models.BigIntegerField(default=00)
    # quantity = models.IntegerField(default=0)
    # date = models.DateTimeField(auto_now_add=True)
    # total = models.BigIntegerField(default=0)
    products = models.ForeignKey(Product, on_delete=models.CASCADE, default=1)
    customers = models.ForeignKey(Customer, on_delete=models.CASCADE, default=4)
    date = models.DateTimeField(auto_now_add=True)
    total = models.BigIntegerField(default=0)
    quantity = models.IntegerField(default=0)