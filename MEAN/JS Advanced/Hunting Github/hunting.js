$(document).ready(function(){

    // Link our variable "button" to a DOM element
    var button = document.getElementById("someButton")
    // add a DOM eventListener to that variable.
    button.addEventListener("click", whatToDoOnClick);
    // here we define the whatToDoOnClick function
    function whatToDoOnClick() {
        $.get("https://api.github.com/users/betalantz", displayName)
        // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
        function displayName(data) {
            console.log(data);
            let el = document.getElementById('myName')
            // let username = data.name
            el.innerHTML = data.name
        }
        
    }
});