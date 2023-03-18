from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.views import APIView
from django.core import serializers
from .serializers import UserSerializer, CollectorSerializer
from .models import Collector
from django.contrib.auth import get_user_model


# Create your views here.
class CollectorsView(APIView):
    def post(self, request, format='json', **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                username = serializer['username'].value
                self.create_collector(username)
                return Response(serializer.data, status=status.HTTP_201_CREATED)  # redirect to login page
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def create_collector(self, username):
        user_model = get_user_model()
        user = user_model.objects.get(username=username)
        collector = Collector(user=user)
        collector.save()

    def get_object(self, pk):
        return Collector.objects.get(id=pk)

    def get(self, request, **kwargs):
        collector_id = kwargs.get('pk', None)
        if collector_id:
            query_set = self.get_object(collector_id)
            serializer = CollectorSerializer(query_set)
        else:
            query_set = Collector.objects.all()
            serializer = CollectorSerializer(query_set, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, pk):
        collector = self.get_object(pk)
        serializer = CollectorSerializer(collector, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(status=status.HTTP_200_OK, data=serializer.data)
        return JsonResponse(status=status.HTTP_400_BAD_REQUEST, data="Wrong parameters")
