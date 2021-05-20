let list = document.getElementById("list");


function firstElem() {
    list.firstElementChild.setAttribute("style", "color: red");
}

function lastElem() {
    list.lastElementChild.setAttribute("style", "color:red");
}

let a = list.firstElementChild;
let b = list.lastElementChild;

function nextElem() {
    let children = Array.from(list.children);
    children.forEach(e => {
        e.removeAttribute("style");
    }); 
    if (a==list.lastElementChild) {
        a.setAttribute("style", "color:green");
        a = list.firstElementChild;
        
    } else{
        a.setAttribute("style", "color:green");
        a = a.nextElementSibling;
    }
}

function prevElem(){
    let children = Array.from(list.children);
    children.forEach(e => {
        e.removeAttribute("style");
    }); 
    if (b==list.firstElementChild) {
        b.setAttribute("style", "color:green");
        b = list.lastElementChild;
        
    } else{
        b.setAttribute("style", "color:green");
        b = b.previousElementSibling;
    }
}

function addElem() {
    let newElem = document.createElement("li");
    newElem.innerHTML = "New Item";
    list.appendChild(newElem);

}

function delElem() {
    let oneChild = list.lastElementChild;
    list.removeChild(oneChild);
}

function addFirstElem() {
    let newItem = document.createElement("li");
    newItem.innerHTML = "New Item";
    list.insertBefore(newItem, list.firstElementChild);
}
