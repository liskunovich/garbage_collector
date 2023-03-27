from datetime import datetime

from django.db.models import Sum
from main.models import Collector


def get_total_garbage_rating():
    current_date = datetime.now()
    queryset = []
    garbage_types = ('glass', 'plastic', 'carton')
    for garbage_t in garbage_types:
        queryset.append({
            garbage_t: Collector.objects.filter(garbagedelivery__date__month=current_date.month).values(
                'username'
            ).annotate(total=Sum(f'garbagedelivery__{garbage_t}')).order_by('-total')[:10]
        })
    return queryset


def get_certain_garbage_rating(garbage_type):
    current_month = datetime.now().month
    queryset = Collector.objects.filter(garbagedelivery__date__month=current_month).values(
        'username'
    ).annotate(total=Sum(f'garbagedelivery__{garbage_type}')).order_by('-total')[:10]
    return queryset
