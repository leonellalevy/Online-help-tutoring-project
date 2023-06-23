from django.shortcuts import render
from rest_framework import generics
from .models import Student
from django.views.generic import ListView, CreateView
from .serializers import YourModelSerializer
from django.http import HttpResponse

def main_tsx_view(request):
    # Read the content of the main.tsx file
    with open('../src/main.tsx', 'r') as file:
        content = file.read()

    # Create an HTTP response with the file content and set the content type
    response = HttpResponse(content, content_type='text/javascript')
    return response

# class YourModelListCreateView(generics.ListCreateAPIView):
#     queryset = Student.objects.all()
#     serializer_class = YourModelSerializer

def student_list(request):
    students = Student.objects.all()
    return render(request, 'student_list.html', {'students': students})

from django.views import generic

class StudentListView(generic.ListView):
    model = Student
    template_name = 'student_list.html'
    context_object_name = 'students'

# Create your views here.
class YourModelListCreateView(ListView, CreateView):
    model = Student
    template_name = 'student_list.html'
