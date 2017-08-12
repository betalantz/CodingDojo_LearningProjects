from django.shortcuts import render, redirect

def index(request):
    return render(request, 'main_app/index.html')

def process(request):
    try:
        request.session['list'] = request.POST['list']
    except:
        request.session['list'] = []
    try:
        request.session['word'] = request.POST['word']
    except:
        return redirect ('/')

    try:
        request.session['color'] = request.POST['color']
    except:
        request.session['color'] = None
    try:
        request.session['bold'] = request.POST['bold']
    except:
        request.session['bold'] = None
    print request.session['bold'], request.session['color']

    request.session['newWord'] = request.session['word']

    if request.session['bold'] = 'on':
        request.session['newWord'] = '<b>' + request.session['newWord'] + '</b>'
    if request.session['color'] != None:
        request.session['newWord'] = '<p style=" color: ' + request.session['color'] + ';">'+ request.session['newWord']+'</p'
    request.session['list'].append(request.session['newWord'])

    return redirect('/')