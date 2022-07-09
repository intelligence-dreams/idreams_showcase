

from django.urls import path
from driver.views import DriverDetail, DriverDelete, DriverEdite, DriverList
from django.conf.urls.static import static
from django_.settings import MEDIA_URL,MEDIA_ROOT


app_name='pothole'
urlpatterns = [
    path('<int:pk>',DriverDetail.as_view(),name='detailcreate'),
    path('',DriverList.as_view(),name='listcreate'),
    path('edite/<int:pk>/',DriverEdite.as_view(),name='createdriver'),
    path('delete/driverdetail/<int:pk>/', DriverDelete.as_view(),'driverdelete')
]

urlpatterns+=static(MEDIA_URL,document_root=MEDIA_ROOT)