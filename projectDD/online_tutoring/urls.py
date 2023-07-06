# from django.urls import path
# from .views import YourModelListCreateView
# from django.urls import path
# from .views import student_list  # if using the view function approach
# from .views import StudentListView  # if using the view class approach

# app_name = "online_tutoring"

# urlpatterns = [
#     path('your_models/', YourModelListCreateView.as_view(), name='yourmodel-list-create'),
#     # add more patterns for other views if needed
#     path('students/', student_list, name='student-list'),
#     path('students/', StudentListView.as_view(), name='student-list'),
# ]
from django.urls import path, re_path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),

    # ...
    # path('', views.index, name='index'),
    # path('', TemplateView.as_view(template_name='index.html')),
    path('about', views.about_view),
    path('helper/', views.helper_view),
    path('HomePage/', views.homepage_view),
    path('LoginPage/', views.loginpage_view),
    # re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]
