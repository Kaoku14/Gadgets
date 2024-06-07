from rest_framework.response import Response
from rest_framework import viewsets
from coco.models import Company, Devices
from coco.serializers import CompanySerializer, DeviceSerializer
from django.shortcuts import render
from rest_framework.generics import get_object_or_404

class DevicesViewSet(viewsets.ViewSet):
    def list(self, request):
        devices_list = Devices.objects.all()
        serializer = DeviceSerializer(devices_list, many=True, context={'request': request})
        response_dict = {'error': False, 'message': 'Whole device list data', 'data': serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = DeviceSerializer(data=request.data, context={'request': request})
            serializer.is_valid()
            serializer.save()
            dict_Response = {'error': False, 'message': 'Device data saved successfully'}
        except:
            dict_Response = {'error': True, 'message': 'Error while saving device data'}

        return Response(dict_Response)

    def update(self, request, pk=None):
        try:
            queryset = Devices.objects.all()
            device = get_object_or_404(queryset, pk=pk, context={'request': request})
            serializer = DeviceSerializer(device, data=request.data, context={"request": request})
            serializer.is_valid()
            serializer.save()
            dict_Response = {'error': False, 'message': 'Device data updated successfully'}
        except:
            dict_Response = {'error': True, 'message': 'Error while updating device data'}

        return Response(dict_Response)
    
    


device_list = DevicesViewSet.as_view({"get": "list"})
device_create = DevicesViewSet.as_view({"post": "create"})
device_update = DevicesViewSet.as_view({"put": "update"})


class CompanyViewSet(viewsets.ViewSet):
    def list(self, request):
        company_list = Company.objects.all()
        serializer = CompanySerializer(company_list, many=True, context={'request': request})
        response_dict = {'error': False, 'message': 'Whole company list data', 'data': serializer.data}
        return Response(response_dict)

    def create(self, request):
        try:
            serializer = CompanySerializer(data=request.data, context={'request': request})
            serializer.is_valid()
            serializer.save()
            dict_Response = {'error': False, 'message': 'Company data saved successfully'}
        except:
            dict_Response = {'error': True, 'message': 'Error while saving company data'}

        return Response(dict_Response)

    def update(self, request, pk=None):
        try:
            queryset = Company.objects.all()
            company = get_object_or_404(queryset, pk=pk)
            serializer = CompanySerializer(company, data=request.data, context={"request": request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_Response = {'error': False, 'message': 'Company data updated successfully'}
        except:
            dict_Response = {'error': True, 'message': 'Error while updating company data'}

        return Response(dict_Response)
    
def get_data(request):
            data ={ 'coco_company': coco_company}
            coco_company = list(coco_company.objects.all().values('id', 'name', 'address', 'email', 'description'))
            return JsonResponse(data, safe=False)


company_list = CompanyViewSet.as_view({"get": "list"})
company_create = CompanyViewSet.as_view({"post": "create"})
company_update = CompanyViewSet.as_view({"put": "update"})