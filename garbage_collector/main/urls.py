from django.urls import path
from .views import CollectorsView, PostsView, RatingView

urlpatterns = [
    path('collectors/', CollectorsView.as_view(), name='collectors'),
    path('collectors/<int:pk>', CollectorsView.as_view(), name='collectors'),
    path('posts/', PostsView.as_view(), name='posts'),
    path('rating/', RatingView.as_view(), name='rating')
]
