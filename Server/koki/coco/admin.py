from django.contrib import admin
from .models import Devices

class MyAdminSite(admin.AdminSite):
    site_title = 'My Admin Site'
    site_header = 'My Admin Site'

myadmin_site = MyAdminSite()
admin.site.register(Devices)