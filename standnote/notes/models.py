from django.db import models

# Create your models here.
from django.db import models


class Note(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField(blank=True)
    markdown = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title