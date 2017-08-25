from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Count

from . import team_maker

def index(request):
	context = {
		# "leagues" : 
		"players" : playerMass(),
		"teams": gangsOfStuff(),
	}
	
	return render(request, "leagues/index.html", context)

def gangsOfStuff():
	teams = Team.objects.annotate(count_players=Count('all_players')).filter(count_players__gte=12).order_by('-count_players')
	# print "-------->>>", teams[0].count_players
	return teams

def playerMass():
	return Player.objects.annotate(count_teams=Count('all_teams')).order_by('count_teams')

def findSams(request):
	sam = Player.objects.filter(first_name="Samuel", last_name="Evans")
	return Team.objects.filter(all_players__in=sam)
	
def findTigers():
	incl_teams = Team.objects.filter(location="Manitoba", team_name="Tiger-Cats")	
	return Player.objects.filter(all_teams__in=incl_teams)

def somePlums():
	incl_teams = Team.objects.filter(location='Wichita', team_name='Vikings')
	return Player.objects.filter(all_teams__in=incl_teams).exclude(curr_team=incl_teams[0])
# without __in, exclude or include expects a single value.  This works because we are expecting a single team
def somePlums_v2mightyDucks():
	incl_teams = Team.objects.get(location='Wichita', team_name='Vikings')
	return Player.objects.filter(all_teams=incl_teams).exclude(curr_team=incl_teams)

def some50shades():
	jacob = Player.objects.filter(first_name='Jacob', last_name='Gray')
	return Team.objects.filter(all_players__in=jacob).exclude(curr_players__in=jacob)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")