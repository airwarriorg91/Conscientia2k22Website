from django.shortcuts import render
from django.http import HttpResponse

def index(request):

    return render(request,'index1.html')
    #return HttpResponse("Hello World. This is my app.")
# Create your views here.

def about(request):
   return render(request,'about.html')
def events(request):
    return render(request,'events.html')
def register(request):
    return render(request,'register.html')
def contact(request):
    return render(request,'contacts.html')
    