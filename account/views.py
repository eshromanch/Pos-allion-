from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView, View, ListView, CreateView
from .models import Customer

@login_required(login_url="/signin/")
def dashboard(request):
    return render(request, 'index.html')
@login_required(login_url="/signin/")
def signup(request):
    if request.user.is_superuser:
        if request.method == "POST":
            if request.POST.get('pwd1') == request.POST.get('pwd2'):
                user = User.objects.create(username=request.POST.get('username'))
                user.set_password(request.POST.get("pwd1"))
                user.save()
                return redirect("/signin/")
            else:
                return redirect("/signup/")
    return render(request, 'access.html')




def signin(request):
	if request.method == "POST":
		user = authenticate(request, username=request.POST.get("username"), password=request.POST.get("password"))
		if user:
			login(request, user)
			return HttpResponseRedirect(reverse('dashboard'))
		else:
			return redirect("/signin/")
	return render(request, "signin.html")
def logout_view(request):
    logout(request)
    return render(request, 'signin.html')
def customer(request):
    data = Customer.objects.all()
    # id = Customer.objects.get(id)
    return render(request, "customer.html", {"datas": data})
def customer_form(request):
    if request.method == "POST":
        Customer.objects.create(name=request.POST["name"], fathers_name=request.POST["fathers_name"], shopname=request.POST["shopname"],
                                                    phone_number=request.POST["phone_number"], email=request.POST["email"], nid=request.POST["nid"],
                                                     nominee_name=request.POST["nominee_name"], nominee_number=request.POST["nominee_number"],)
        return HttpResponseRedirect(reverse('customer'))
    return render(request, "customer_form.html")
