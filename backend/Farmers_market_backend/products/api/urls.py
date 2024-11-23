
from django.urls import path, include
from .views import ProductViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

# Register the viewset with the router
# This will generate routes for ProductViewSet actions
router.register(r'', ProductViewSet, basename='product')

# Include the router-generated URLs
urlpatterns = [
    path('', include(router.urls)),
]