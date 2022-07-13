from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('register', views.register, name='register'),
    path('about', views.about, name='about'),
    path('events', views.events, name='events'),
    path('contact', views.contact, name='contact'),
]