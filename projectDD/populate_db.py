# populate.py

from django.core.management.base import BaseCommand
import os
import django
from django.contrib.auth import get_user_model


# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangotutoring.settings')

# Configure Django settings
django.setup()

User = get_user_model()
try:
    user = User.objects.get(username='bob')
except User.DoesNotExist:
    # If the user does not exist, create it
    user = User.objects.create_user(username='bob', email='bob@bob.com', password='bob')

from online_tutoring.models import College, Subject, Teacher, Session, Course, Student, Helper


def populate_database():
    # Create Colleges
    college1 = College(college_id=1, college_name='Dawson College')
    college2 = College(college_id=2, college_name='Vanier College')
    college1.save()
    college2.save()

    # Create Teachers
    teacher1 = Teacher(teacher_id=1, teacher_fname='John', teacher_lname='Doe')
    teacher2 = Teacher(teacher_id=2, teacher_fname='PApapap', teacher_lname='bjhb')
    teacher3 = Teacher(teacher_id=3, teacher_fname='Mamammaa', teacher_lname='popo')
    teacher1.save()
    teacher2.save()
    teacher3.save()

    # Create Sessions
    session1 = Session(session_id=1, session_name='Fall', session_year=2022)
    session2 = Session(session_id=2, session_name='Winter', session_year=2022)
    session3 = Session(session_id=3, session_name='Fall', session_year=2023)
    session4 = Session(session_id=4, session_name='Winter', session_year=2023)
    session1.save()
    session2.save()
    session3.save()
    session4.save()

    # Create Courses
    course1 = Course(course_id=1, college=college1, teacher=teacher1, session=session1, course_name="English_101")
    course2 = Course(course_id=2, college=college1, teacher=teacher1, session=session2, course_name="French_101")
    course3 = Course(course_id=3, college=college2, teacher=teacher2, session=session3, course_name="English_102")
    course4 = Course(course_id=4, college=college2, teacher=teacher3, session=session4, course_name="French_102")
    course5 = Course(course_id=5, college=college1, teacher=teacher1, session=session1, course_name='Course_A')
    course1.save()
    course2.save()
    course3.save()
    course4.save()
    course5.save()

    # Create Students
    student_user = User.objects.create_user(username='chad', email='chad@example.com', password='password')
    student1 = Student(user=student_user, student_id=1, role_id=1, student_username="chad")
    student1.save()

    # Create Helpers
    helper_user = User.objects.create_user(username='joeschmoe', email='joe@example.com', password='password')
    helper1 = Helper(user=helper_user, helper_id=1, role_id=1, helper_fname="Joe", helper_lname="Schmoe", helper_username="joeschmoe", helper_rating=5)
    helper1.save()


# class Command(BaseCommand):
#     help = 'Populate the database with initial data.'
    
#     def handle(self, *args, **options):
#         populate_database()
if __name__ == '__main__':
    populate_database()
