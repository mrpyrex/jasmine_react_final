# Generated by Django 2.2.2 on 2019-06-25 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('theme', models.CharField(max_length=200)),
                ('image', models.ImageField(upload_to='gallery/images/')),
            ],
        ),
    ]
