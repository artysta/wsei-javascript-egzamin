document.addEventListener('DOMContentLoaded', function(){
    var buttons = Array.from(document.querySelectorAll("button"));
    var container = document.getElementById("container");

    buttons.forEach(x => x.onclick = () => {
        container.innerText = x.getAttribute("data-text");
    });

});
