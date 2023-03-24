from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Collector(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='+')
    glass = models.PositiveIntegerField(default=0)
    plastic = models.PositiveIntegerField(default=0)
    carton = models.PositiveIntegerField(default=0)

    def __str__(self):
        return str(self.user)

    class Meta:
        db_table = 'Collector'


class Post(models.Model):
    source = models.CharField(max_length=128)
    created = models.DateTimeField()
    title = models.CharField(max_length=256)
    text = models.TextField()
    url = models.URLField()
