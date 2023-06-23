"""
URL configuration for djangotutoring project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from online_tutoring.views import student_list  # if using the view function approach
from online_tutoring.views import StudentListView  # if using the view class approach
from django.contrib.staticfiles.views import serve as staticfiles_serve
from django.urls import re_path



urlpatterns = [
    path('admin/', admin.site.urls),
    #path('api/', include('online_tutoring.urls')),
    path('online_tutoring/', include('online_tutoring.urls')),
    path('students/', student_list, name='student_list'),
    re_path(r'^(?:.*)/?$', staticfiles_serve, kwargs={'path': 'index.html'}),
    re_path(r'^main\.tsx$', staticfiles_serve, {'document_root': settings.STATIC_ROOT, 'path': '../src/main.tsx', 'content_type': 'text/javascript'}),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
