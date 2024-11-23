from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView
from .views import MyTokenObtainView, RegisterView, LogoutView, ProfileViewset, FarmersViewset, BuyerViewset
 
urlpatterns = [
    path('login/', MyTokenObtainView.as_view(), name="token_obtain_pair"),
    path('refresh-token/', TokenRefreshView.as_view(), name="token_refresh"),
    path('register/', RegisterView.as_view(), name="register"),
    path('logout/', LogoutView.as_view(), name="logout"),
    path("profile/", ProfileViewset.as_view({'get': 'retrieve', 'put': 'update'}), name="profile-details"),
    path("farmers/", FarmersViewset.as_view({'get': 'list'}), name="farmers-details"),
    path("buyers/", BuyerViewset.as_view({'get': 'list'}), name="buyer-details")
]
