from django.contrib import admin
from .models import Variant,Product,ProductImage,ProductVariant,ProductVariantPrice,Product_full_variant,product_create

# Register your models here.

admin.site.register(Variant)
admin.site.register(Product)
admin.site.register(ProductImage)
admin.site.register(ProductVariant)
admin.site.register(product_create)

class productvariantAdmin(admin.ModelAdmin):
	list_display=['product','created_at','price','stock']

admin.site.register(ProductVariantPrice,productvariantAdmin)
admin.site.register(Product_full_variant)


# Register your models here.
