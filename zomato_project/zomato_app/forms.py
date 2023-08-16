# zomato_app/forms.py
from django import forms

class OrderStatusForm(forms.Form):
    order_id = forms.IntegerField(label="Order ID")
    status_choices = [
        ("preparing", "Preparing"),
        ("ready", "Ready for Pickup"),
        ("delivered", "Delivered")
    ]
    status = forms.ChoiceField(label="Status", choices=status_choices)
