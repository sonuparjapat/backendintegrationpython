from django.shortcuts import render,redirect
from .models import MenuItem
import json

from .models import Order  # Import the Order model

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
def home_view(request):
    return render(request, 'home.html')
def add_dish(request):
    if request.method == 'POST':
        with open('zomato_app/menu_data.json', 'r+') as json_file:
            data = json.load(json_file)
            new_dish = {
                "dish_id": len(data) + 1,
                "name": request.POST['dish_name'],
                "price": float(request.POST['dish_price']),
                "availability": request.POST.get('availability') == 'on'
            }
            data.append(new_dish)
            json_file.seek(0)
            json.dump(data, json_file, indent=4)
            json_file.truncate()
        return redirect('menu')

def menu_view(request):
    with open('zomato_app/menu_data.json') as json_file:
        menu_items = json.load(json_file)
    return render(request, 'menu.html', {'menu_items': menu_items})




def orders_view(request):
    if request.method == 'POST':
        new_order = {
            "customer_name": request.POST['customer_name'],
            "dish_ids": [int(id) for id in request.POST['dish_ids'].split(',') if id],
            "status": "Received"
        }
        with open('zomato_app/menu_data.json', 'r+') as json_file:
            data = json.load(json_file)
            data["orders"].append(new_order)
            json_file.seek(0)
            json.dump(data, json_file, indent=4)
            json_file.truncate()
        return redirect('orders')
    return render(request, 'order.html', {'orders': []})

def save_order(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        customer = data.get('customer')
        dish_ids = data.get('dish_ids')
        total_price = data.get('total_price')
        status = data.get('status')
        order = Order.objects.create(
            customer=customer,
            dish_ids=dish_ids,
            total_price=total_price,
            status=status
        )
        return JsonResponse({'message': 'Order saved successfully.'})
    return JsonResponse({'message': 'Invalid request method.'}, status=400)

def get_dish_price(request, dish_id):
    try:
        dish = MenuItem.objects.get(id=dish_id)
        return JsonResponse({'price': dish.price})
    except MenuItem.DoesNotExist:
        return JsonResponse({'error': 'Dish not found.'}, status=404)
    
    # def menu_view(request):
    # menu_items = MenuItem.objects.all()
    # return render(request, 'zomato_app/menu.html', {'menu_items': menu_items})