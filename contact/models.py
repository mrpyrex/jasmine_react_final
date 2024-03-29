from django.db import models


class Contact(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=14)
    email = models.EmailField()
    message = models.TextField()
    is_subscribed = models.BooleanField(default=False)

    def __str__(self):
        return self.first_name
