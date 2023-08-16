from django.contrib import admin

# Register your models here.
# zomato_app/admin.py

from .models import MenuItem

admin.site.register(MenuItem)
