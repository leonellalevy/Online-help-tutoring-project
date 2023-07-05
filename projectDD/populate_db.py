# populate.py

from django.core.management.base import BaseCommand
import os
import django

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangotutoring.settings')

# Configure Django settings
django.setup()

from online_tutoring.models import College, Subject, Teacher, Session, Course


def populate_database():
    college1 = College(college_id=1, college_name='ABC College')

    subject1 = Subject(subject_id=1, subject_name='Mathematics')

    teacher1 = Teacher(teacher_id=1, teacher_fname='John', teacher_lname= 'Doe')   

    session1 = Session(session_id=1, session_name='Fall', session_year=2023)

    college1.save()

    subject1.save()

    teacher1.save()

    session1.save()

    course1 = Course(
        course_id=1,
        college=college1,
        subject=subject1,
        teacher=teacher1,
        session=session1,
        course_name='Course A'
    )
    course1.save()

# class Command(BaseCommand):
#     help = 'Populate the database with initial data.'
    
#     def handle(self, *args, **options):
#         populate_database()
if __name__ == '__main__':
    populate_database()
