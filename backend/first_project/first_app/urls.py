from django.urls import path
from first_app import views

urlpatterns = [
    path("",views.index2,name='index2'),
]