# Generated by Django 2.2.2 on 2019-06-28 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0003_contact_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='is_subscribed',
            field=models.BooleanField(default=False),
        ),
    ]
