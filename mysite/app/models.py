#数据库操作
from django.db import models
class article(models.Model):
    tit = models.CharField('标题',max_length=200)
    img = models.FileField('图片',upload_to='img')
    # img = models.CharField(max_length=200,unique=True,verbose_name='文章图片')
    conten = models.TextField('内容')
    c_tim = models.DateField('创建日期')



