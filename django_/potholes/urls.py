

from django.urls import path
from django_.settings import MEDIA_ROOT, MEDIA_URL
from potholes.models import Pothole
from potholes.views import PotholeDelete, PotholeDetail, PotholeEdite, PotholeList  
from django.conf.urls.static import static


app_name= "potholes"
urlpatterns = [
    path("<int:pk>",PotholeDetail.as_view(),name="detail"),
    path('',PotholeList.as_view(),name="listcreate"),
    path('edite/<int:pk>',PotholeEdite.as_view(),name="potholecreate"),
    path('delete/potholedetail/<int:pk>',PotholeDelete.as_view(),name="potholedelete")
]

urlpatterns+=static(MEDIA_URL,document_root=MEDIA_ROOT)