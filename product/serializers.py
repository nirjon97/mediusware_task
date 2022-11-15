from rest_framework import serializers
from .models import product_create



class create_Serializer(serializers.ModelSerializer):
    class Meta:
        model = product_create
        fields = '__all__'