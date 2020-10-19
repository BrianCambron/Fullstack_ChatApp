from django.urls import path, include

urlpatterns = [
    # path('', include('accounts.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('chats/', include('chats.urls')),
]
