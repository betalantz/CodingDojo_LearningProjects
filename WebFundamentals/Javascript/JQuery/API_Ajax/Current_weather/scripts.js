$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        // your code here (build up your url)
        var city = $('#cityName').val();
        var key = '&&appid=b8089347acc48347309e677445c63467';
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric' + key;
        $.get(url, function(res) { addCity(res)
            // your code here
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        // return false; replaced by event.preventDefault on l.3
    });
});

function addCity(res){
    console.dir(res);
    var output = '<div class="cityResult"><h2>' + res.name + '</h2>';
    output += '<span>Temperature: ' + res.main.temp + '&#8451;</span></div>'
    $('body').append(output);
}