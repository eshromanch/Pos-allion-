from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    def __str__(self):
        return self.name
class Product(models.Model):
    name = models.CharField(max_length=100)
    cat = models.ForeignKey(Category, on_delete=models.CASCADE)
    purchase_price = models.BigIntegerField()
    selling_price = models.BigIntegerField()
