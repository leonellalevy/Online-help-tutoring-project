from django.urls import path
from .views import student_list  # if using the view function approach
from .views import StudentListView  # if using the view class approach
from online_tutoring import views
from rest_framework import routers
from django.views.generic import TemplateView

app_name = "online_tutoring"

urlpatterns = [
    # add more patterns for other views if needed
    path('', TemplateView.as_view(template_name='index.html')),
    path(r'', views.index),
    path('students/', student_list, name='student-list'),
    path('students/', StudentListView.as_view(), name='student-list'),
]
