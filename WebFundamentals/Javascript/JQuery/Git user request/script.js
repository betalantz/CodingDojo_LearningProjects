$(document).ready(function(){
  //sends form's contents out into a new div under main, adds styling, stores description for later swapping, and adds a handler to swap html contents with stored data on hover
  function appendContactDiv(contact){

    // Pass the new element to jQeury to give it cool methods, and save it
    var newElement = $(contact.html);
    // Use jQuery to modify as if it were regular dom
    newElement.attr("storedInfo", contact.storedInfo);
    // append
    $("main").append(newElement);

    // $(".contact:last").hover(function(){
    //   swapCardData($(this));
    // },
    // function(){
    //   swapCardData($(this));
    // });
  }
  // sets event listener for clicks on cards and calls swap function

  // $(".contact").on("click",".contact", function(){
  //   alert("I was clicked!!")
  //   swapCardData(this);
  // })
  $('.contact').click(function(){
    alert("I was clicked!!")
    swapCardData(this);
  });

  //returns html along with the description
  //html is appended to main, description is stored as data on the appropriate div
  
  function generateGithubInfo(){
    var username = $("input[name=username]").val();
    var url = "https://api.github.com/users/" + username;
    $.getJSON(url, function(data){
      var name = data.name;
      var description = data.bio;
      var result = {
        html: "<div class='contact'><h2>" + name + "</h2><p>Hover for description!</p></div>",
        storedInfo : description
      }
      appendContactDiv(result);
    });
  }
  //temporarily stores html contents of a card, then swaps them with the stored contents (initially description)
  function swapCardData(card){
    var temp = card.html();
    var stor = card.data("storedInfo");
    console.log(stor);
    //card.html(card.data("storedInfo"));
    //card.data("storedInfo", temp);
  }

  $("form").submit(function(){
    generateGithubInfo();
    return false;
  });
});