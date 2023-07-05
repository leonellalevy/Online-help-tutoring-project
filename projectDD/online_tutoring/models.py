from django.db import models
from django.contrib.auth.models import User


# Create your models here.
#idk what tf is that but it might be useful
# class Student(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
    # roll_number = models.CharField(max_length=20)
    # grade = models.CharField(max_length=10)

class Student(models.Model):
    student_id = models.IntegerField(primary_key=True)
    role_id = models.IntegerField()
    student_username = models.CharField(max_length=30)

    def __str__(self):
        return self.student_username
    
    class Meta:
        app_label = 'online_tutoring'
    
class College(models.Model):
    college_id = models.IntegerField(primary_key=True)
    college_name = models.CharField(max_length=20)

    def __str__(self):
        return self.college_name
    
class Subject(models.Model):
    subject_id = models.IntegerField(primary_key=True)
    subject_name = models.CharField(max_length=20)

    def __str__(self):
        return self.subject_name

class Teacher(models.Model):
    teacher_id = models.IntegerField(primary_key=True)
    teacher_fname = models.CharField(max_length=30)
    teacher_lname = models.CharField(max_length=30)

    def __str__(self):
        return f"{self.teacher_fname} {self.teacher_lname}"


class Session(models.Model):
    session_id = models.IntegerField(primary_key=True)
    session_name = models.CharField(max_length=10)
    session_year = models.IntegerField()

    def __str__(self):
        return f"{self.session_name} {self.session_year}"

class Course(models.Model):
    course_id = models.IntegerField(primary_key=True)
    college = models.ForeignKey(College, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    course_name = models.CharField(max_length=35)

    def __str__(self):
        return self.course_name
    
# class Helper(models.Model):
#     helper_id = models.IntegerField()
#     role_id = models.IntegerField()
#     helper_fname = models.CharField(max_length=25)
#     helper_lname = models.CharField(max_length=25)
#     helper_username = models.CharField(max_length=30)
#     helper_rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
#     student_ids = models.ManyToManyField(Student, related_name='helpers')
#     course_ids = models.ManyToManyField(Course, related_name='helpers')

#     def __str__(self):
#         return self.helper_username