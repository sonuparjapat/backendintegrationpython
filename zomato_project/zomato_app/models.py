from django.db import models

class Order(models.Model):
    customer = models.CharField(max_length=100)
    dish_ids = models.CharField(max_length=200)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length=20,
        choices=[
            ('received', 'Received'),
            ('preparing', 'Preparing'),
            ('ready for pickup', 'Ready for Pickup'),
            ('delivered', 'Delivered')
        ],
        default='received'
    )

    def __str__(self):
        return f"Order {self.id}: {self.customer}"
from django.db import models

class MenuItem(models.Model):
    dish_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    availability = models.BooleanField(default=True)

    def __str__(self):
        return self.name
