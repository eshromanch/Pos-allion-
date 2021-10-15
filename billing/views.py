from django.shortcuts import render
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from account.models import Customer
from product.models import Product
from .models import Invoice

def multiply(x,y):
    return x*y
def billing(request):
    return render(request, 'billing.html')
def post_billing(request):
    return render(request, 'bpost.html')

def billingform(request):
    # if request.method == "GET":
    #     return render(request, 'bform.html')
    # else:
    #     cid = request.POST["customerId"]
    #     customer = Customer.objects.get(id=cid)
    #     return render(request, 'invoice.html', {"customers": customer,})
    if request.method == "POST":
        cid = request.POST["customerId"]
        customer = Customer.objects.get(id=cid)
        request.session['customerId'] = cid
        return redirect('invoice')
    return render(request, 'bform.html')
def invoice(request):
    products = Product.objects.all()
    cust = Customer.objects.all()
    # if request.method == "POST":
    #     return render(request, 'invoice.html', {"products": products,})
    # else:
    return render(request, 'invoice.html', { "products": products, "cust": cust, })
def final_billing(request):
    return render(request, 'finalbill.html')
