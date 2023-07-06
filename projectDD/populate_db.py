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
    college2 = College(college_id=2, college_name='Vanier College')

    subject1 = Subject(subject_id=1, subject_name='Mathematics')
    subject2 = Subject(subject_id=2, subject_name='French')
    subject3 = Subject(subject_id=3, subject_name='English')
    subject4 = Subject(subject_id=4, subject_name='Chemistry')

    teacher1 = Teacher(teacher_id=1, teacher_fname='John', teacher_lname= 'Doe')   
    teacher2 = Teacher(teacher_id=2, teacher_fname='PApapap', teacher_lname= 'bjhb')  
    teacher3 = Teacher(teacher_id=3, teacher_fname='Mamammaa', teacher_lname= 'popo')

    session1 = Session(session_id=1, session_name='Fall', session_year=2022)
    session2 = Session(session_id=2, session_name='Winter', session_year=2022)
    session3 = Session(session_id=3, session_name='Fall', session_year=2023)
    session4 = Session(session_id=4, session_name='Winter', session_year=2023)

    college1.save()
    college2.save()

    subject1.save()
    subject2.save()
    subject3.save()
    subject4.save()

    teacher1.save()
    teacher2.save()
    teacher3.save()

    session1.save()
    session2.save()
    session3.save()
    session4.save()

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
