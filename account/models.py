from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=100)
    fathers_name = models.CharField(max_length=100)
    shopname = models.CharField(max_length=200)
    phone_number = models.BigIntegerField(max_length=11)
    email = models.EmailField()
    nid = models.BigIntegerField(max_length=30)
    nominee_name = models.CharField(max_length=100)
    nominee_number = models.BigIntegerField(max_length=11)
    
    def __str__(self):
        return self.name