from django.shortcuts import render, HttpResponse, redirect
from django.core.urlresolvers import reverse
from .models import User

# Example of an old index method:
# def index(request):
#     print("hello, I am your first request")
#     return redirect('/target/this_app/new')
# Can be transformed to the following:
def index(request):
    print("hello, I am your first request")
    return redirect(reverse('my_new'))
    # or, if using named routes, can state as follows:
    return redirect(reverse('users:new'))
    # OR if you need to pass parameters for the redirect, see this:
    return redirect(reverse('users:show', kwargs={'id': your_id_variable }))



def update(request):
    errors = Blog.objects.basic_validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags=tag)
            return redirect('/blog/edit/'+id)
        else:
            blog = Blog.objects.get(id = id)
            blog.name = request.POST['name']
            blog.desc = request.POST['desc']
            blog.save()
            return redirect('/blogs')