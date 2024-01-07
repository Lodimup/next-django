from celery import shared_task

@shared_task
def pong():
    """Sample task to test the celery worker."""
    print('pong')
    return 'pong'