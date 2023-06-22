from django.db import models
from django.contrib.auth.models import User


# Create your models here.
#idk what tf is that but it might be useful
# class Student(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
    # roll_number = models.CharField(max_length=20)
    # grade = models.CharField(max_length=10)

class Student(models.Model):
    student_id = models.IntegerField()
    role_id = models.IntegerField()
    student_username = models.CharField(max_length=30)

    def __str__(self):
        return self.student_username
    
class Course(models.Model):
    course_id = models.IntegerField()
    college_id = models.IntegerField()
    subject_id = models.IntegerField()
    teacher_id = models.IntegerField()
    session_id = models.IntegerField()
    course_name = models.CharField(max_length=15)

    def __str__(self):
        return self.course_id
    
class Helper(models.Model):
    helper_id = models.IntegerField()
    role_id = models.IntegerField()
    helper_fname = models.CharField(max_length=25)
    helper_lname = models.CharField(max_length=25)
    helper_username = models.CharField(max_length=30)
    helper_rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
    student_ids = models.ManyToManyField(Student, related_name='helpers')
    course_ids = models.ManyToManyField(Course, related_name='helpers')

    def __str__(self):
        return self.helper_username