from django.db import models


class Pic(models.Model):
    theme = models.CharField(max_length=200)
    image = models.ImageField(upload_to='gallery/images/')

    def __str__(self):
        return self.theme
