from django.contrib import admin
from .models import Request

class RequestAdmin(admin.ModelAdmin):
    list_display = ['user', 'id', 'recipientName', 'recipientAge', 'bldGrp', 'bldRequiredBeforeDate', 'bldDonationLocation', 'contact',  'acceptedBy']

admin.site.register(Request, RequestAdmin)