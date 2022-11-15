from django.forms import forms, ModelForm, CharField, TextInput, Textarea, BooleanField, CheckboxInput
from product.models import Variant,Product,ProductVariantPrice,ProductImage
from product.models import Variant,product_create


class VariantForm(ModelForm):
    class Meta:
        model = Variant
        fields = '__all__'
        widgets = {
            'title': TextInput(attrs={'class': 'form-control'}),
            'description': Textarea(attrs={'class': 'form-control'}),
            'active': CheckboxInput(attrs={'class': 'form-check-input', 'id': 'active'})
        }

#this is editing term

class ProductForm(ModelForm):
    class Meta:
        model = Product
        fields = '__all__'
        widgets = {
            'title': TextInput(attrs={'class': 'form-control'}),
            'sku': Textarea(attrs={'class': 'form-control'}),
            'description': Textarea(attrs={'class': 'form-control'}),
    
        }

class ProductFilterForm(ModelForm):
    class Meta:
        model = ProductVariantPrice
        fields = '__all__'
        widgets = {
            'title': TextInput(attrs={'class': 'form-control'}),
            'price_from': TextInput(attrs={'class': 'form-control'}),
            'price_to': TextInput(attrs={'class': 'form-control'}),
            'created_at': TextInput(attrs={'class': 'form-control'}),
            'varian': TextInput(attrs={'class': 'form-control'}),
            
            
    
        }

class Product_imageForm(ModelForm):
    class Meta:
        model = ProductImage
        fields = '__all__'



#create product
class Product_create_Form(ModelForm):
    class Meta:
        model = product_create
        fields = '__all__'
    
            
            
    
        
