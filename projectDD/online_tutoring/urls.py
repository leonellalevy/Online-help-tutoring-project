# urls.py

from django.urls import path
from online_tutoring.views import index

urlpatterns = [
    path('', index, name='index'),
]