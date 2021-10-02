from django.urls import path
from . import views
from django.conf.urls import url
urlpatterns = [
    path('', views.dashboard, name="dashboard"),
    path('signin/', views.signin, name="signin"),
    path('logout/', views.logout_view, name='logout'),
    path('create_customer/', views.customer_form, name='create_customer'),
    path('customer/', views.customer, name='customer'),
    path('signup/', views.signup, name='signup'),
]