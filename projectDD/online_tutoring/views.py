from django.shortcuts import render
from .models import College, Session, Course, Teacher
from django.views.generic import ListView, CreateView
from .serializers import UserSerializer
from django.http import HttpResponse
from django.http import JsonResponse

def serialize_teacher(teacher: Teacher):
    """
    Function to return a serialized Teacher object
    """
    return {
        'teacher_id': teacher.pk,
        'teacher_fname': teacher.teacher_fname,
        'teacher_lname': teacher.teacher_lname,
    }

def serialize_session(session: Session):
    """
    Function to return a serialized Session object
    """
    return {
        'session_id': session.pk,
        'session_name': session.session_name,
        'session_year': session.session_year,
    }

def serialize_college(college: College):
    """
    Function to return a serialized College object
    """
    return {
        'college_id': college.pk,
        'college_name': college.college_name,
    }

def index(request):
    return render(request, 'index.html')

from django.shortcuts import render

def api_data(request):
    data = {
        'message': 'Hello my DUDE the backend!',
    }
    return JsonResponse(data)

def college_list(request):
    colleges = College.objects.all()
    data = {
        'colleges': [
            {
                'college_id': college.pk,
                'college_name': college.college_name,
            }
            for college in colleges
        ]
    }

    return JsonResponse(data)

def course_list(request):
    courses = Course.objects.all()
    data = {
        'courses': [
            {
                'course_id': course.pk,
                'course_name': course.course_name,
                'course_teacher': serialize_teacher(course.teacher),
                'course_session': serialize_session(course.session),
                'course_college': serialize_college(course.college),
            }
            for course in courses
        ]
    }
    print(data)

    return JsonResponse(data)

def view_course(request, course_id):
    course = get_object_or_404(Course, course_id=course_id)
    data = {
        "course": course,
    }

def teacher_list(request):
    teachers = Teacher.objects.all()
    data = {
        'teachers': [
            {
                'teacher_id': teacher.pk,
                'teacher_fname': teacher.teacher_fname,
                'teacher_lname': teacher.teacher_lname,
            }
            for teacher in teachers
        ]
    }

    print(data)
    return JsonResponse(data)

def session_list(request):
    sessions = Session.objects.all()
    data = {
        'sessions': [
            {
                'session_id': session.pk,
                'session_name': session.session_name,
                'session_year': session.session_year,
            }
            for session in sessions
        ]
    }

    return JsonResponse(data)

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
