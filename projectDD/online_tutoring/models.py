from django.db import models
from django.contrib.auth.models import User

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):

    def create_user(self, username, email, password=None, **kwargs):
        """Create and return a `User` with an email, phone number, username and password."""
        if username is None:
            raise TypeError('Users must have a username.')
        if email is None:
            raise TypeError('Users must have an email.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, email, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError('Superusers must have a password.')
        if email is None:
            raise TypeError('Superusers must have an email.')
        if username is None:
            raise TypeError('Superusers must have an username.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True,  null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return f"{self.email}"
    
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
    #TODO: Delete subject et remplacer par course_name
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    session = models.ForeignKey(Session, on_delete=models.CASCADE)
    course_name = models.CharField(max_length=35)

    def __str__(self):
        return self.course_name
    
class Helper(models.Model):
    helper_id = models.IntegerField(primary_key=True)
    role_id = models.IntegerField()
    helper_fname = models.CharField(max_length=25)
    helper_lname = models.CharField(max_length=25)
    helper_username = models.CharField(max_length=30)
    helper_rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])

    def __str__(self):
        return self.helper_username
    
# class Group(models.Model):
#     helper_id = models.IntegerField(primary_key=True)
#     role_id = models.IntegerField()
#     helper_fname = models.CharField(max_length=25)
#     helper_lname = models.CharField(max_length=25)
#     helper_username = models.CharField(max_length=30)
#     helper_rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])

#     def __str__(self):
#         return self.helper_username