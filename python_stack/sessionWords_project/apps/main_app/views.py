from django.shortcuts import render, redirect

# def test(request):
#     print "see the viewz"

def index(request):
    return render(request, 'main_app/index.html')

def process(request):
    # print 'jazz hands'
    # print '---------->', request.POST['word']
    try:
        request.session['list']
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
    # print request.session['bold'], request.session['color']

    newWord = request.session['word']

    if request.session['bold'] != None:
        newWord = '<b>' + newWord + '</b>'
    if request.session['color'] != None:
        newWord = '<p style=" color: ' + request.session['color'] + ';">'+ newWord+'</p'
    request.session['list'].append(newWord)

    return redirect('/')