# Generated by Django 4.1.7 on 2023-03-25 02:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_alter_garbagedelivery_table'),
    ]

    operations = [
        migrations.AddField(
            model_name='collector',
            name='username',
            field=models.CharField(default=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='+', to=settings.AUTH_USER_MODEL), max_length=128),
        ),
    ]