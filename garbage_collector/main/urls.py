from django.urls import path
from .views import CollectorRegistration, CollectorsView

urlpatterns = [
    path('registration/', CollectorRegistration.as_view(), name='collector-create'),
    path('collectors/', CollectorsView.as_view(), name='collectors'),
]
