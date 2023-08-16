from django.db import models

class MenuItem(models.Model):
    dish_id = models.IntegerField(primary_key=True)
    dish_name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    availability = models.BooleanField(default=True)

    def __str__(self):
        return self.dish_name
