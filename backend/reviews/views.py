from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import logout
from django.shortcuts import redirect
from django.http import JsonResponse
import requests

def login(request):
  google_auth_url = "https://accounts.google.com/o/oauth2/v2/auth"
  client_id = "255102167652-f47m1u1p8opljejslqssdcg4qndc572o.apps.googleusercontent.com"
  redirect_uri = "http://localhost:3000/api/auth/callback"  
  scope = "openid email profile"
  response_type = "code"

  # Construct the Google login URL
  google_login_url = (
      f"{google_auth_url}?client_id={client_id}"
      f"&redirect_uri={redirect_uri}"
      f"&response_type={response_type}&scope={scope}"
  )

  return JsonResponse({"url": google_login_url})

def logout(request):
  logout(request)