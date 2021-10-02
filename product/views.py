from django.shortcuts import render
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import Category, Product
from django.urls import reverse

def products_view(request):
    context = Product.objects.all()
    return render(request, 'products.html', {"products": context})
def categorie_create_view(request):
    if request.method == "POST":
        Category.objects.create(name=request.POST["category_name"], type=request.POST["category_type"])
        return redirect('products')
    return render(request, 'pcatagories.html')
def product_create_view(request):
    cata = Category.objects.all()
    if request.method == "POST":
        Product.objects.create(name=request.POST["product_name"], cat=Category.objects.get(id=request.POST["options"]),
                                 purchase_price=request.POST["purchase_price"], selling_price=request.POST["selling_price"])
        return redirect('products')
    return render(request, 'pform.html', {"catagories": cata})

