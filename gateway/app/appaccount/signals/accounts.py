from appaccount.models.accounts import UserProfile
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save, sender=User)
def create_profiles(sender, instance: User, created, **kwargs):
    """
    Create profiles for the user when a user is created.
    """
    if created:
        UserProfile.objects.create(user=instance)
