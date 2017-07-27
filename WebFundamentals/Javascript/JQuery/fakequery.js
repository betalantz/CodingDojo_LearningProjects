var $ = function(getElementById){
    var element = document.getElementById(elementId);
    return {
        setText: function(value){
                element.innerHTML = value;
        },
        addClick: function(clickAction){
                document.addEventListener("click", clickAction)
        },
        onLoad: function(loadAction){
                document.addEventListener("DOMContentLoaded", loadAction)
        }
    }
}