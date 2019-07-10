from cart.models import Cart, CartItem
from rest_framework import viewsets, permissions
from .serializers import CartItemSerializer, CartSerializer


class CartViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def _cart_id(request):
        cart = request.session.session_key

        if not cart:
            cart = request.session.create()
        return cart

    def add_cart(request, slug):
        product = Product.objects.get(slug=slug)
        try:
            cart = Cart.objects.get(cart_id=_cart_id(request))
        except Cart.DoesNotExist:
            cart = Cart.objects.create(cart_id=_cart_id(request))
            cart.save()
        try:
            cart_item = CartItem.objects.get(product=product, cart=cart)
            if cart_item.quantity < cart_item.product.stock:
                cart_item.quantity += 1
            cart_item.save()
        except CartItem.DoesNotExist:
            cart_item = CartItem.objects.create(
                product=product, quantity=1, cart=cart)
            cart_item.save()
        return redirect('cart:cart_detail')

    def cart_detail(request, total=0, counter=0, cart_items=None):
        try:
            cart = Cart.objects.get(cart_id=_cart_id(request))
            cart_items = CartItem.objects.filter(cart=cart)
            for cart_item in cart_items:
                total += (cart_item.product.price * cart_item.quantity)
                counter += cart_item.quantity
        except ObjectDoesNotExist:
            pass

        context = {
            'cart_items': cart_items,
            'total': total,
            'counter': counter
        }
        return render(request, 'cart/cart.html', context)
