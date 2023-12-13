from django.contrib.auth.models import User
from django.db import models

from appcore.models.commons import BaseAutoDate, BaseUUID


class UserProfile(BaseUUID, BaseAutoDate):
    """
    Model for storing user profiles.
    """

    GENDER_CHOICES = {
        "m": "Male",
        "f": "Female",
        "n": "Non-binary",
        "o": "Other",
    }

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
    )
    first_name = models.CharField(
        max_length=255,
        default="",
    )
    last_name = models.CharField(
        max_length=255,
        default="",
    )
    gender = models.CharField(
        choices=GENDER_CHOICES,
        null=True,
        default=None,
    )
    dob = models.DateField(
        null=True,
        default=None,
    )
