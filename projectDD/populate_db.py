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
    college1 = College(college_id=1, college_name='Dawson College')
    college2 = College(college_id=2, college_name='Vanier College')

    teacher1 = Teacher(teacher_id=1, teacher_fname='John', teacher_lname= 'Doe')   
    teacher2 = Teacher(teacher_id=2, teacher_fname='PApapap', teacher_lname= 'bjhb')  
    teacher3 = Teacher(teacher_id=3, teacher_fname='Mamammaa', teacher_lname= 'popo')

    session1 = Session(session_id=1, session_name='Fall', session_year=2022)
    session2 = Session(session_id=2, session_name='Winter', session_year=2022)
    session3 = Session(session_id=3, session_name='Fall', session_year=2023)
    session4 = Session(session_id=4, session_name='Winter', session_year=2023)

    course1 = Course(course_id=1, college=college1, teacher=teacher1, session=session1, course_name="Englich_101")
    course2 = Course(course_id=2, college=college1, teacher=teacher1, session=session2, course_name="Frensh_101")
    course3 = Course(course_id=3, college=college2, teacher=teacher2, session=session3, course_name="English_102")
    course4 = Course(course_id=4, college=college2, teacher=teacher3, session=session4, course_name="French_102")

    college1.save()
    college2.save()

    course1.save()
    course2.save()
    course3.save()
    course4.save()

    teacher1.save()
    teacher2.save()
    teacher3.save()

    session1.save()
    session2.save()
    session3.save()
    session4.save()

    course5 = Course(
        course_id=5,
        college=college1,
        teacher=teacher1,
        session=session1,
        course_name='Course A'
    )
    
    course5.save()

# class Command(BaseCommand):
#     help = 'Populate the database with initial data.'
    
#     def handle(self, *args, **options):
#         populate_database()
if __name__ == '__main__':
    populate_database()
