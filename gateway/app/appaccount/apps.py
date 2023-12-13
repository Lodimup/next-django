from django.apps import AppConfig
from django.dispatch.dispatcher import Signal


class AppaccountConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "appaccount"

    def ready(self):
        from appaccount.signals.accounts import create_profiles

        signals = Signal()
        signals.connect(create_profiles)
