from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Collector, Post, GarbageDelivery


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')

    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    username = serializers.CharField(
        max_length=64,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(min_length=8, write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],
                                        validated_data['password'])
        return user

    def get_auth_token(self, user):
        tokens = RefreshToken.for_user(user)
        refresh = str(tokens)
        access = str(tokens.access_token)
        data = {
            "refresh": refresh,
            "access": access
        }
        return data

    def update(self, instance, validated_data):
        """Update a user setting the password correctly"""
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()
        return user


class CollectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collector
        fields = ('user', 'glass', 'plastic', 'carton')

    user = UserSerializer()
    glass = serializers.IntegerField()
    plastic = serializers.IntegerField()
    carton = serializers.IntegerField()


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('source', 'created', 'title', 'text', 'url')

    source = serializers.CharField()
    created = serializers.DateTimeField()
    title = serializers.CharField()
    text = serializers.CharField()
    url = serializers.URLField()


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = GarbageDelivery
        fields = ('collector', 'date', 'glass', 'plastic', 'carton')

    collector = serializers.CharField()
    date = serializers.DateField()
    glass = serializers.IntegerField()
    plastic = serializers.IntegerField()
    carton = serializers.IntegerField()
