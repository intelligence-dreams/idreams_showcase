

from django.urls import path
from pothole.views import PoltholeDetail, PotholeDelete, PotholeEdite, PotholeList
from django.conf.urls.static import static
from django_.settings import MEDIA_URL,MEDIA_ROOT


app_name='pothole'
urlpatterns = [
    path('<int:pk>',PoltholeDetail.as_view(),name='detailcreate'),
    path('',PotholeList.as_view(),name='listcreate'),
    path('edite/<int:pk>/',PotholeEdite.as_view(),name='createpothole'),
    path('delete/potholedetail/<int:pk>/', PotholeDelete.as_view(),'potholedelete')
]

urlpatterns+=static(MEDIA_URL,document_root=MEDIA_ROOT)