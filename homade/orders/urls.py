from django.urls import path
from . import views

app_name = "orders"

urlpatterns = [
    path("", views.index, name="index"),
    path("/order", views.order, name="order"),
    path("add_to_cart/", views.add_to_cart, name="add_to_cart"),
    path("/cart", views.cart, name="cart"),
    path("/checkout", views.checkout, name="checkout"),
    path("/orders", views.orders, name="orders"),
    path("/orders/<int:order_id>", views.orders, name="orders"),
    path("/re_order", views.re_order, name="re_order"),
    path("/faq", views.faq, name="faq"),
    path("/about", views.about, name="about"),
    path("/contact", views.contact, name="contact"),
    path("/checkoutinfo",views.checkoutinfo, name="checkoutinfo"),
    path("/payment", views.payment, name="payment"),
]
