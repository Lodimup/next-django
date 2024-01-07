"""
Configuration for celery
"""

import os
from celery import Celery
from app.beat import beat_schedule

# Set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'app.settings')

app = Celery('app')

app.conf.update(
    result_expires=3600,
)

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
app.config_from_object('django.conf:settings', namespace='CELERY')
# loads celery beat schedule configuration
app.conf.beat_schedule = beat_schedule

# Load task modules from all registered Django apps.
# Must do this if file name is not tasks.py
# Register your new tasks here
"""
syntax:
    {app_name}.tasks.{file_name}
"""
app.autodiscover_tasks(
    [
        # add tasks module here
        # 'appcore.tasks.sample',
    ]
)
