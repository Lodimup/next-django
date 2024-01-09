from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

# Register your models here.
from appaccount.models.accounts import User

admin.site.register(User, UserAdmin)
