from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.views import APIView
from django.core import serializers
from .serializers import UserSerializer, CollectorSerializer
from .models import Collector
from django.contrib.auth import get_user_model


# Create your views here.

class CollectorRegistration(generics.ListCreateAPIView):

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


class CollectorsView(APIView):
    def get(self, request):
        collector_id = request.GET.get('id', None)
        if collector_id:
            query_set = Collector.objects.get(id=collector_id)
            serializer = CollectorSerializer(query_set)
        else:
            query_set = Collector.objects.all()
            serializer = CollectorSerializer(query_set, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
