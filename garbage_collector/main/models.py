from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Collector(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='+')
    username = models.CharField(max_length=128)
    glass = models.FloatField(default=0)
    plastic = models.FloatField(default=0)
    carton = models.FloatField(default=0)

    def __str__(self):
        return str(self.user)

    class Meta:
        db_table = 'Collector'


class GarbageDelivery(models.Model):
    date = models.DateField()
    glass = models.FloatField(default=0)
    plastic = models.FloatField(default=0)
    carton = models.FloatField(default=0)
    collector = models.ForeignKey(Collector, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.collector}"

    class Meta:
        db_table = 'Garbage deliveries'


class Post(models.Model):
    source = models.CharField(max_length=128)
    created = models.DateTimeField()
    title = models.CharField(max_length=256)
    text = models.TextField()
    url = models.URLField()

    def __str__(self):
        return f'{self.title}'
