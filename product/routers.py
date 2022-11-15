from rest_framework import routers
from product.views.product import ArticleViewSet


router = routers.DefaultRouter()
router.register(r'product/views/product', ArticleViewSet)