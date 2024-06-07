from django.urls import path, include
from rest_framework import routers
from coco import views
from django.contrib import admin
from coco.admin import myadmin_site # Import your custom admin site

router = routers.DefaultRouter()
router.register(r"company",views.CompanyViewSet, basename= 'company')
router.register(r"devices",views.DevicesViewSet, basename= 'devices')

urlpatterns = [ 
    path('', include(router.urls)),
    path('myadmin/', myadmin_site.urls),  # Use your custom admin site
    path('api/',include(router.urls)),
    path('api/company/', views.get_data, name = 'get_data')
]