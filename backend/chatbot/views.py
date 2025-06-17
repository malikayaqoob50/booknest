from django.shortcuts import render
from django.http import JsonResponse

def chatbot_home(request):
    if request.method == 'POST':
        user_message = request.POST.get('message')
        bot_response = f"I received your message: {user_message}"
        return JsonResponse({'response': bot_response})
    return render(request, 'chatbot/chatbot.html')
