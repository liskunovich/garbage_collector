# Generated by Django 4.1.7 on 2023-03-25 01:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_post'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collector',
            name='carton',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='collector',
            name='glass',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='collector',
            name='plastic',
            field=models.FloatField(default=0),
        ),
        migrations.CreateModel(
            name='GarbageDelivery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('glass', models.FloatField(default=0)),
                ('plastic', models.FloatField(default=0)),
                ('carton', models.FloatField(default=0)),
                ('collector', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.collector')),
            ],
        ),
    ]