let bool = true;

function change() {
    let h3 = document.querySelectorAll('h3');
    let para = document.querySelectorAll('p');
    let h2 = document.querySelectorAll('h2');
    let tab = [h2, h3, para];

    document.getElementById('bgColor').className = bool ? 'bg-dark' : 'bg-light';
    for (i = 0; i < tab.length; i++) {
        for (x = 0; x < tab[i].length; x++) {
            tab[i][x].style.color = bool ? 'white' : 'black';
        }
    }
    bool = !bool;
}

function valider() {
    swal({
        title: "Envoyé",
        text: "votre message c'est envoyé avec succès!",
        icon: "success",
    });
}

function disPara() {
    let e = document.getElementById('para1');
    e.classList.add('hidden');
}

function flou() {
    var elements = document.getElementsByClassName('spoiler');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
    }
}
