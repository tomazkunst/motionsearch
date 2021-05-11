# Generated by Django 3.2 on 2021-05-10 19:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('motions', '0015_alter_motionvote_unique_together'),
    ]

    operations = [
        migrations.AlterField(
            model_name='motionvote',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
