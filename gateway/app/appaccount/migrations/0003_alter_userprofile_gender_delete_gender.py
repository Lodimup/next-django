# Generated by Django 5.0 on 2023-12-13 16:41

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("appaccount", "0002_session"),
    ]

    operations = [
        migrations.AlterField(
            model_name="userprofile",
            name="gender",
            field=models.CharField(
                choices=[
                    ("m", "Male"),
                    ("f", "Female"),
                    ("n", "Non-binary"),
                    ("o", "Other"),
                ],
                default=None,
                null=True,
            ),
        ),
        migrations.DeleteModel(
            name="Gender",
        ),
    ]
