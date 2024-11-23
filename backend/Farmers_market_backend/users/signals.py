from django.db.models.signals import post_save
from django.dispatch import receiver
from users.models import CustomUser, Farmer, Buyer, Admin

@receiver(post_save, sender=CustomUser)
def create_profile(sender, instance, created, **kwargs):
    if created and instance.role=='Farmer':
        Farmer.objects.create(user=instance)
    elif created and instance.role=='Buyer':
        Buyer.objects.create(user=instance)
