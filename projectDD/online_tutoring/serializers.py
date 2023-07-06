from rest_framework import serializers
from .models import Student

class YourModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'  # or specify the fields you want to include
