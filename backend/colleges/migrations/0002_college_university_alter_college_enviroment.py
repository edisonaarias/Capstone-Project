# Generated by Django 4.0.6 on 2022-07-15 20:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('colleges', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='college',
            name='University',
            field=models.CharField(default='exit', max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='college',
            name='enviroment',
            field=models.CharField(max_length=100),
        ),
    ]
