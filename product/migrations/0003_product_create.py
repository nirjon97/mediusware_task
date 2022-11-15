# Generated by Django 4.1.3 on 2022-11-14 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_product_full_variant'),
    ]

    operations = [
        migrations.CreateModel(
            name='product_create',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=255)),
                ('product_sku', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
                ('product_image', models.ImageField(blank=True, upload_to='product/')),
                ('product_variant', models.CharField(max_length=500)),
                ('product_variant_prices', models.CharField(max_length=500)),
            ],
        ),
    ]
