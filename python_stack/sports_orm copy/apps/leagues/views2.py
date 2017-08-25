from django.shortcuts import render, redirect
from .models import League, Team, Player
from django.db.models import Count

from . import team_maker

def index(request):
	# l = League.objects.get(name='International Collegiate Baseball Conference')
	context = {
		# "leagues": League.objects.all(),
		# "leagues": League.objects.filter(sport='Baseball'),
		# "leagues": League.objects.filter(name__contains='Atlantic'),
		# "leagues": League.objects.filter(name__contains='Conference'),
		# "leagues": League.objects.exclude(sport='Football'),
		# "leagues": League.objects.filter(sport__contains='Hockey'),
		# "leagues": League.objects.filter(name__contains='Women'),
		# "teams": Team.objects.all(),
		# "teams": Team.objects.filter(location='Dallas'),
		# "teams": Team.objects.filter(team_name__startswith='T'),
		# "teams": Team.objects.order_by('location'),
		# "teams": Team.objects.order_by('-team_name'),
		#"teams": League.objects.get(name='Atlantic Soccer Conference').teams.all(),
		# "players": Player.objects.all()
		# "players": Player.objects.filter(last_name='Cooper').exclude(first_name='Joshua')
		# "players": Player.objects.filter(first_name='Alexander')|Player.objects.filter(first_name='Wyatt')
		# "players": Team.objects.get(
		# 	location='Boston', team_name='Penguins').curr_players.all(),
		# "players": League.objects.get(name='International Collegiate Baseball Conference').teams.all()
		# "players": Player.objects.get(league__name='International Collegiate Baseball Conference')
		# "teams" : getSophia(request),
		"leagues" : getSophiaLeagues(request),
	}
	context["players"] = softFlores(request)

	return render(request, "leagues/index.html", context)

def softFlores(request):
	softs = Team.objects.exclude(team_name__contains='Rough', location='Washington')
	flores = Player.objects.filter(last_name='Flores', curr_team__in=softs)


	return flores

def getSophia(request):
	sophias = Player.objects.filter(first_name="Sophia")
	incl_teams = Team.objects.filter(curr_players__in=sophias)

	return incl_teams

def getSophiaLeagues(request):
	sophias = Player.objects.filter(first_name="Sophia")
	incl_teams = Team.objects.filter(curr_players__in=sophias)
	incl_leagues = League.objects.filter(teams__in=incl_teams)

	return incl_leagues

def getTeams(request):
	incl_teams = League.objects.get(name='American Conference of Amateur Football').teams.all()
	incl_players = Player.objects.filter(curr_team__in=incl_teams, last_name='Lopez')
	
	return incl_players

def getLeague(request):
	incl_leagues = League.objects.filter(sport='Football')
	incl_teams = Team.objects.filter(league__in=incl_leagues)
	incl_players = Player.objects.filter(curr_team__in=incl_teams)

	return incl_players

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")