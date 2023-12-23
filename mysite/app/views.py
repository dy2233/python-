from django.shortcuts import render
from django.shortcuts import HttpResponse,redirect
from django.contrib.auth.models import User
# from django.contrib.auth import authenticate,login,logout
from django.contrib.auth import *



# import requests
# Create your views here.
#配置主界面
def indax(request):
    return render(request,'index.html')
    # return HttpResponse('hhkrduhxih')

# #登录界面
# def login(request):
#     if request.method=='POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         User = authenticate(username=username,password=password)
#         if User:
#             login(request,User)
#             return redirect('/')
#         else:
#             msg='用户名登录错误'
#             return render(request,'login.html',locals())
#     return render(request, 'login.html')


# #注册界面
# def regist(request):
#     if request.method=='POST':
#         username = request.POST.get('username')
#         password = request.POST.get('password')
#         password2 = request.post.get('password2')
#         email = request.POST.get('email')
#         if password != password2:
#             msg = "请重新输入"
#             return render(request,'regist.html',locals())
#         elif username == "":
#             msg = '用户名不能为空'
#             return render(request,'regist.html',locals())
#         cuser = User.objects.create_user(username=username,password=password,email=email)
#         cuser.save()
#         return redirect('/login')

#     return render(request,'regist.html')



# def articel(request):
#     return render(request,'articel.html')


# #跳转足部界面
# def footer(request):
#     return render(request,'footer.html')