from django.contrib import admin
from .models import Collector


# Register your models here.
class CustomModelAdminMixin(object):

    def __init__(self, model, admin_site):
        self.list_display = [field.name for field in model._meta.fields]
        super(CustomModelAdminMixin, self).__init__(model, admin_site)


@admin.register(Collector)
class CollectorAdmin(admin.ModelAdmin, CustomModelAdminMixin):
    list_display = ['user', 'glass', 'plastic', 'carton']
