from django.urls import path
from .views import CollectorsView

urlpatterns = [
    path('collectors/', CollectorsView.as_view(), name='collectors'),
    path('collectors/<int:pk>', CollectorsView.as_view(), name='collectors'),
]
