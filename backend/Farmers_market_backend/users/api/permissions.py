from rest_framework.permissions import BasePermission
from users.models import Farmer, Buyer, Admin


class IsFarmer(BasePermission):
    def has_permission(self, request, view):
        return isinstance(request.user, Farmer)


class IsBuyer(BasePermission):
    def has_permission(self, request, view):
        return isinstance(request.user, Buyer)


class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return isinstance(request.user, Admin)
