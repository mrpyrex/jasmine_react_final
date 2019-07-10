from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/blog/', include('blog.urls')),
    path('api/shop/', include('shop.urls')),
    path('api/contact/', include('contact.urls')),
    path('api/gallery/', include('gallery.urls')),
    path('api/team/', include('team.urls')),
    path('api/cart/', include('cart.urls')),
    path('', include('accounts.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
