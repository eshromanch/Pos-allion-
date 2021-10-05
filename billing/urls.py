from django.urls import path
from . import views
urlpatterns = [
    path('', views.billing, name='bills'),
    path('create_invoice/', views.billingform, name="billingform"),
    path('invoice/', views.invoice, name="invoice"),
    path('bilingpost/', views.post_billing, name='bpost'),
    path('final/', views.final_billing, name='finalbill'),
]