from django.urls import path
from . import views
# from app.views import *
from app.views import indax
from django.contrib import admin

from django.conf import settings
from django.conf.urls. static import static
# app_name = 'users'
#配置路由
urlpatterns = [
    path('',views.indax,name='indax'),
    # path('logo/',views.login,name='login'),
    # path('regist/',views.regist,name='regist'),
    # path('articel/',views.articel,name='articel'),
    # path('footer/',views.footer,name='footer'),
    # path('admin/', admin.site.urls),
]  + static (settings.STATIC_URL, document_root = settings.STATIC_ROOT)

# app_name = 'users'   # 定义一个命名空间，用来区分不同应用之间的链接地址
# urlpatterns = [ 
#     path('login.html', views.login, name='login')
# ]s