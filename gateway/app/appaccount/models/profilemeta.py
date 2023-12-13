from django.db import models

class Gender(models.Model):
    slug = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name