from django.urls import path
from .views import CollectorsView, PostsView, RatingView, GarbageDeliveryView

urlpatterns = [
    path('collectors/', CollectorsView.as_view(), name='collectors'),
    path('collectors/<int:pk>', CollectorsView.as_view(), name='collectors'),
    path('posts/', PostsView.as_view(), name='posts'),
    path('rating/', RatingView.as_view(), name='rating'),
    path('garbage_delivery/', GarbageDeliveryView.as_view(), name='garbage_delivery'),
]
