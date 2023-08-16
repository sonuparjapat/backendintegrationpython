from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
 path('menu/', views.menu_view, name='menu'),
  path('save_order/', views.save_order, name='save_order'),
    path('add_dish/', views.add_dish, name='add_dish'),
    path('get_price/<int:dish_id>/', views.get_dish_price, name='get_dish_price'),
path('order/', views.orders_view, name='order'),

]
 