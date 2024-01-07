"""
Configuration for Celery Beat Scheduler
https://docs.celeryq.dev/en/latest/userguide/periodic-tasks.html#introduction

syntax:
    'task_name': {
        'task': '{app_name}.tasks.{module}.{function}',
        'schedule': {seconds},
        'args': ({arg}),
    },

"""

beat_schedule = {
    # Add your tasks here
    # 'ping': {
    #     'task': 'appcore.tasks.sample.pong',
    #     'schedule': 10.0,
    #     'args': (),
    # }
}
