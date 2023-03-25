from django.contrib import admin
from .models import Collector, Post, GarbageDelivery


# Register your models here.
class CustomModelAdminMixin(object):

    def __init__(self, model, admin_site):
        self.list_display = [field.name for field in model._meta.fields]
        super(CustomModelAdminMixin, self).__init__(model, admin_site)


@admin.register(Collector)
class CollectorAdmin(admin.ModelAdmin):
    list_display = ['user', 'glass', 'plastic', 'carton']
    list_filter = ['glass', 'plastic', 'carton']


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'created', 'url']
    list_filter = ['created']


@admin.register(GarbageDelivery)
class GarbageDeliveryAdmin(admin.ModelAdmin):
    list_display = ['collector', 'date', 'glass', 'plastic', 'carton']
    list_filter = ['collector', 'date']
