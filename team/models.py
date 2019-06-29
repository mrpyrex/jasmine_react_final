from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    pic = models.ImageField(upload_to='team/images/')

    def __str__(self):
        return self.name
