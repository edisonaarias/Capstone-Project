# Generated by Django 4.0.6 on 2022-08-03 20:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('professors', '0001_initial'),
        ('rates', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='rate',
            name='professor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='professors.professor'),
        ),
    ]
