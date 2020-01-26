document.addEventListener("DOMContentLoaded", function () {

    var list = document.getElementById("shopping-list");
    var breadBtn = document.getElementById("button-1")
    var deleteBtn = document.getElementById("button-2")
    var addBtn = document.getElementById("button-3")

    breadBtn.onclick = () => addElement("Chleb");
    deleteBtn.onclick = () => deleteLastElement();
    addBtn.onclick = () => cloneSecondElement();

    function addElement(product) {
        var li = document.createElement("li");
        li.innerHTML = product;
        list.appendChild(li);
    }

    function deleteLastElement() {
        var children = list.children;
        if (children.length > 0) {
            list.removeChild(children[children.length - 1]);
        }
    }

    function cloneSecondElement() {
        var children = list.children;
        if (children.length > 1) {
            addElement(children[1].innerHTML);
        }
    }
});
