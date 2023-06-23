from django.urls import path
from .views import YourModelListCreateView
from django.urls import path
from .views import student_list  # if using the view function approach
from .views import StudentListView  # if using the view class approach

app_name = "online_tutoring"

urlpatterns = [
    path('your_models/', YourModelListCreateView.as_view(), name='yourmodel-list-create'),
    # add more patterns for other views if needed
    path('students/', student_list, name='student-list'),
    path('students/', StudentListView.as_view(), name='student-list'),
]
