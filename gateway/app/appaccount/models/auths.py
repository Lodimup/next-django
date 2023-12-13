from datetime import timedelta

from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

from appcore.models.commons import BaseAutoDate, BaseUUID
from appcore.services.gen_token import gen_token


class Session(BaseUUID, BaseAutoDate):
    """Model for storing simple user sessions"""

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    access_token = models.TextField(
        max_length=255,
        default=gen_token,
    )
    access_token_created = models.DateTimeField(
        auto_now_add=True,
    )
    expires_in = models.IntegerField(
        default=86400,
    )
    refresh_token = models.TextField(
        max_length=255,
        default=gen_token,
        unique=True,
    )
    refresh_token_created = models.DateTimeField(
        auto_now_add=True,
    )
    refresh_token_expires_in = models.IntegerField(
        default=525600,
    )

    def is_expired(self):
        """Check if the session is expired by comparing the updated date with the TTL."""
        ret = (
            self.access_token_created + timedelta(seconds=self.expires_in)
            < timezone.now()
        )
        return ret

    def is_refresh_token_expired(self):
        """Check if the session is expired by comparing the updated date with the TTL."""
        ret = (
            self.refresh_token_created
            + timedelta(seconds=self.refresh_token_expires_in)
            < timezone.now()
        )
        return ret

    def destroy(self):
        """Destroy the session."""
        self.delete()

    def refresh(self, refresh_token: str) -> bool:
        """Refresh the access_token by generating new tokens.
        Args:
            refresh_token (str): refresh token
        Returns:
            bool: True if the refresh token is valid and the session is refreshed, False otherwise
        """
        if self.refresh_token != refresh_token:
            return False
        self.access_token = gen_token()
        self.access_token_created = timezone.now()
        self.save()

        return True
