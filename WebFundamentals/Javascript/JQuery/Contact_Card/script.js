$(document).ready(function(){

//get input data  
    function getInput(){
        var firstname = $("input[name=firstName]").val();
        var lastname = $("input[name=lastName]").val();
        var description = $("textarea[name=description]").val();
        var result = {
        html : "<div class='contact-card'><h2>" + firstname + " " + lastname + "</h2><p class='front'>Click for description!</p><p class='back' style='display: none'>" +description+ "</p></div>"
    }
    return result;
  }
// output data in new card and append
  function makeCard(result){
        $('section').append(result.html);
  }


//on form submit, make/append new card
    $('form').submit(function(event){
        event.preventDefault();
        makeCard(getInput());
    });


//listen for card click
    $(this).on('click', '.contact-card', function(){
        swapData.apply(this);
        // alert("clicked");
    });

//swap card data
    function swapData(){
        // var temp = result.html();
        // console.log(temp);
        // card.html(card.data('storedInfo'));
        // card.data('storedInfo', temp);
        if($('.front').css('display')!='none'){
        $('.back').show().('.front').hide();
        }else if($('.back').css('display')!='none'){
        $('.front').show().('.back').hide();
        // var flip = $(this).html();
        // $(this).html($(this).html());
        // $(this.back).html(flip);
        }
    }

});
