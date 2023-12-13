"""
This module contains the base models for all models in the app.
"""
import uuid
from django.db import models


class BaseUUID(models.Model):
    """
    Used for models that need a UUID as a primary key.
    """
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)

    class Meta:
        abstract = True


class BaseAutoDate(models.Model):
    """
    Used for models that need a created and updated date.
    """
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
