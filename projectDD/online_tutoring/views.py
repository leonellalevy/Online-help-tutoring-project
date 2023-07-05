from django.shortcuts import render
# from .models import Student
from django.views.generic import ListView, CreateView
from .serializers import YourModelSerializer
from django.http import HttpResponse
from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')

from django.shortcuts import render

def about_view(request):
    return render(request, 'index.html')

def helper_view(request):
    return render(request, 'helper.html')

def homepage_view(request):
    return render(request, 'homepage.html')

def loginpage_view(request):
    return render(request, 'loginpage.html')

def api_data(request):
    data = {
        'message': 'Hello my DUDE the backend!',
    }
    return JsonResponse(data)

def about_view(request):
    return 
# def main_tsx_view(request):
#     # Read the content of the main.tsx file
#     with open('../src/main.tsx', 'r') as file:
#         content = file.read()

#     # Create an HTTP response with the file content and set the content type
#     response = HttpResponse(content, content_type='text/javascript')
#     return response

# # class YourModelListCreateView(generics.ListCreateAPIView):
# #     queryset = Student.objects.all()
# #     serializer_class = YourModelSerializer

# def student_list(request):
#     students = Student.objects.all()
#     return render(request, 'student_list.html', {'students': students})

# from django.views import generic

# class StudentListView(generic.ListView):
#     model = Student
#     template_name = 'student_list.html'
#     context_object_name = 'students'

# # Create your views here.
# class YourModelListCreateView(ListView, CreateView):
#     model = Student
#     template_name = 'student_list.html'
