from django.db.models import Sum
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status, generics, permissions
from rest_framework.views import APIView
from .serializers import UserSerializer, CollectorSerializer, PostSerializer, RatingSerializer
from .models import Collector, Post
from utils.db.db_seeder import write_in_garbage_delivery
from utils.db.db_reader import get_total_garbage_rating, get_certain_garbage_rating
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
        collector = Collector(user=user, username=str(user))
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


class PostsView(generics.ListAPIView):
    queryset = Post.objects.all().order_by('-created')
    serializer_class = PostSerializer


class RatingView(generics.ListAPIView):
    serializer_class = RatingSerializer

    def get(self, request, **kwargs):
        garbage_type = request.GET.get('garbage_type', None)
        if garbage_type:
            queryset = get_certain_garbage_rating(garbage_type)
        else:
            queryset = self.get_queryset()
        return Response(queryset, status=status.HTTP_200_OK)

    def get_queryset(self):
        queryset = get_total_garbage_rating()
        return queryset


class GarbageDeliveryView(generics.ListAPIView):
    def post(self, request, **kwargs):
        collector = self.get_object(request.data['collector'])
        print(collector)
        serializer = RatingSerializer(data=request.data)
        if serializer.is_valid() and collector:
            write_in_garbage_delivery(collector, serializer)
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_object(self, username):
        collector = Collector.objects.filter(username=username)
        if collector.exists():
            return collector.first()
        return None


class TokenCurrentUser(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format=None):
        if request.user:
            data = {
                "id": request.user.id,
            }
            return Response(data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_401_UNAUTHORIZED)
