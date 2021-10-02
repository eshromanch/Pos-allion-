from django.urls import path
from . import views

urlpatterns = [
    path('', views.products_view, name="products"),
    path('create_product/', views.product_create_view, name='create_product'),
    path('create_categorie/', views.categorie_create_view, name='create_categorie'),
]