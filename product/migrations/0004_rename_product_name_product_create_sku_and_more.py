# Generated by Django 4.1.3 on 2022-11-14 14:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_product_create'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product_create',
            old_name='product_name',
            new_name='sku',
        ),
        migrations.RenameField(
            model_name='product_create',
            old_name='product_sku',
            new_name='title',
        ),
    ]
