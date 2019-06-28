from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    content = models.TextField()
    thumb = models.ImageField(null=True, upload_to='blog/images/')
    date_posted = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, related_name="posts")

    def __str__(self):
        return self.title
