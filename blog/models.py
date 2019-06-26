from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    content = models.TextField()
    thumb = models.ImageField(null=True, upload_to='blog/images/')
    date_posted = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
