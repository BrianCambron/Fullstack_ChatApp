from rest_framework import serializers
from django.contrib.auth import authenticate
from django.contrib.auth.models import User


from .models import Chat


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('id', 'user', 'message')
