// регистрация события загрузки документа.
if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

// регистрация обработчиков событий элементов формы.
function init() {
    form1.userName.addEventListener("blur", form.name);
    form1.email.addEventListener("blur", form.email)
    form1.zip.addEventListener("blur", form.zip);
    form1.submit.addEventListener("click", onsubmitHandler);
}

let form ={
    valid: function(elem, pattern){
        if(pattern.test(elem.value)) elem.className = "valid";
        else elem.className = "invalid";
    },
    name: function(){
        let pattern = /\S/;
        form.valid(this, pattern);
    },
    email: function(){
        let pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        form.valid(this, pattern);
    },
    zip: function(){
        let pattern = /\d{5}/;
        form.valid(this, pattern);
    }
}
// событие при отправке формы на сервер.
function onsubmitHandler(event) {    
    let invalid = false;
    for (var i = 0; i < form1.elements.length; ++i) {
        let elem = form1.elements[i];
        if (elem.type == "text" && elem.blur) {
            elem.blur(); 
            if (elem.className == "invalid") invalid = true;
        }
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        event.preventDefault();
        return false; // отмена отправки формы.
    }
}