from rest_framework.views import APIView 
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer

class UserAPIView(APIView):
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
     
    def get(self, request):
        user = UserSerializer(request.user).data
        return Response({ "user" : user })
