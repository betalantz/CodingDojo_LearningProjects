$(document).ready(function(){

    function formInputToString(){

        var firstname = $("input[name=firstName]").val();
        var lastname = $("input[name=lastName]").val();
        var email = $("input[name=email]").val();
        var phone = $("input[name=phone]").val();

        $('table').append('<tr>'+'<td>'+firstname+'</td>'+'<td>'+lastname+'</td>'+'<td>'+email+'</td>'+'<td>'+phone+'</td>'+'</tr>');
    }

    $('form').submit(function(event){
        event.preventDefault();
        formInputToString();
        // return false;
    });

});