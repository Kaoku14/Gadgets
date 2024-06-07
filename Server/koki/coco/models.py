from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=250, default='')
    address = models.CharField(max_length=250, default='')
    email = models.CharField(max_length=250, default='')
    description = models.CharField(max_length=250, default='')

class Employees(models.Model):
    name = models.CharField(max_length=250, default='')
    employee_no = models.CharField(max_length=250, default='')
    email = models.CharField(max_length=250, default='')

class Devices(models.Model):
    name = models.CharField(max_length=250, default='')
    description = models.CharField(max_length=250, default='')
    price = models.CharField(max_length=250, default='')
    countInStock = models.CharField(max_length=250, default=0)
    company = models.CharField(max_length=250, default='')
    category = models.CharField(max_length=250, default='')

class Sales(models.Model):
    name = models.CharField(max_length=250, default='')
    price = models.CharField(max_length=250, default='')