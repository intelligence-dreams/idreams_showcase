# Generated by Django 3.2.8 on 2022-07-15 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pothole',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('lattitude', models.CharField(max_length=70)),
                ('longitude', models.CharField(max_length=70)),
                ('adminarea', models.CharField(max_length=70)),
                ('country', models.CharField(max_length=70)),
                ('road', models.CharField(max_length=70)),
                ('visibility', models.BooleanField(default=True)),
            ],
        ),
    ]