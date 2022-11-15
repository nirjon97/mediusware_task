from django.views import generic
from django.shortcuts import render,HttpResponseRedirect,redirect
from django.db.models import Q
from django.views.generic import ListView, CreateView, UpdateView
import datetime
import django_filters
from product.forms import ProductForm,ProductFilterForm,VariantForm,Product_create_Form
from product.models import Variant,Product,product_create,ProductVariantPrice,ProductVariant,Product_full_variant,ProductImage
from django.db.models import Max

from rest_framework import viewsets
from product.serializers import create_Serializer


class BaseProductView(generic.View):
    form_class = ProductForm
    model = Product
    template_name = 'Products/create.html'
    success_url = '/product/list'




class CreateProductView(generic.TemplateView):
    template_name = 'products/create.html'
    model= product_create
    
    def get(self, request, *args, **kwargs):
      variants = Variant.objects.filter(active=True).values('id', 'title')

      context={
        'varients':variants
        
      }
      context['variants'] = list(variants.all())
      return render(request,'products/create.html',context)

    def post(self, request, *args, **kwargs):
       form = Product_create_Form(request.post)
       print("data form backend")

       if form.is_valid():
        print("this is valid")
        form.save()
       return redirect('product/list')

   

 

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = product_create.objects.all()
    serializer_class = create_Serializer




#product view
class ProductView(BaseProductView,ListView):
  model = Product_full_variant
  template_name = 'Products/list.html'
  context_object_name = 'pro' 
  paginate_by = 2



class FilterProductView(BaseProductView,ListView):
    form_class = ProductFilterForm


    def get(self, request, *args, **kwargs):
            pro=Product_full_variant.objects.all()
            title_filter=request.GET.get('icontains')
            fil_vari =request.GET.get('variant_filter')
            date_filter=request.GET.get('date')
            temp_varient=Variant.objects.all()
            product_vari=ProductVariant.objects.all()
            filter_product_vari =ProductVariant.objects.all()
            print("varient filter : ",fil_vari)
            p1=request.GET.get('price_from')
            p2=request.GET.get('price_to')
            if p1=="":
              p1=None
            
            if p2=="":
              p2=None

            if date_filter=="":
              date_filter=None
            start_datetime__gt = django_filters.DateTimeFilter(field_name='date_filter')
           

            filter_product_list =ProductVariantPrice.objects.filter(Q(price__range=(p1, p2)) |
              Q(product__title=title_filter) |
              Q(product__created_at=date_filter)| 
              Q(product_variant_one__variant_title=fil_vari) |
              Q(product_variant_two__variant_title=fil_vari)|
              Q(product_variant_three__variant_title=fil_vari))

            context={
                'pro': pro,
                #'filter_price': filter_price,
                'filter_product_vari':filter_product_vari,
                'filter_product_list':filter_product_list,
                'product_vari':product_vari,
                'temp_varient':temp_varient,
                'start_datetime_gt': start_datetime__gt

            }
            return render(request,'products/filter_product.html',context)