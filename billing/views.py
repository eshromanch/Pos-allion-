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
    cid = request.session.get('customerId')
    customer = Customer.objects.get(id=cid)
    products = Product.objects.all()
    if request.method == "POST":
        # pd = request.POST["product_id"]
        qt = int(request.POST["quantity"])
        # product = Product.objects.get(id=pd)
        # pd_price = int(product.selling_price)
        # total = pd_price*qt
        # pd_name = product.name
        # Invoice.objects.create(products = product,
        #                                 quantity = qt, total=total, customers = customer)
        # cust_id = Invoice.objects.get(id, customers=customer.id)
        # product_name = cust_id.products
        # product_quantity = cust_id.quantity
        # product_total = cust_id.total
        return render(request, 'invoice.html', {"products": products,})
    else:
        return render(request, 'invoice.html', {"customers": customer, "products": products})
def final_billing(request):
    return render(request, 'finalbill.html')
