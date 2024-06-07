from rest_framework import serializers
from coco.models import Company, Devices, Employees, Sales

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = [
            "name",
            "address",
            "email",
            "description"
        ]

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = [
            "name",
            "employee_no",
            "email",
        ]

    def create(self, validated_data):
        return Employees.objects.create(**validated_data)

class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devices
        fields = [
            "name",
            "description",
            "price",
            "countInStock",
            "company",
            "category",
        ]

    def create(self, validated_data):
        return Devices.objects.create(**validated_data)

class SalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sales
        fields = [
            "name",
            "price",
        ]

    def create(self, validated_data):
        return Sales.objects.create(**validated_data)