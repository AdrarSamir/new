function cliqueQuille(evt) {
    var rand = Math.random() * (2 - 0) + 0;
    evt.target.classList.add('tombe');
    if (rand > 1) {
        rand = Math.random() * (2 - 0) + 0;
        if (rand > 1) {
            evt.target.nextElementSibling.classList.add('tombe');
        } else {
            evt.target.previousElementSibling.classList.add('tombe');
        }
    }

    termine();
}

//2/ Écrire une fonction termine() qui teste si le jeu est fini ou non
//et affiche « gagné » ou « perdu » dans la page.


function termine() {
    var p = document.getElementsByClassName("tombe");
    console.log(p);
    var gagne = document.getElementById('main');
    if ((p.length == 7) || (p.length == 9)) {
        gagne.innerHTML += '<div class="gagne">perduuuuuuuuuuuuuuuuuuuu</div>';
    } else if (p.length == 8) {
        gagne.innerHTML += '<div class="gagne">gagnééééééééééééééééééé</div>';
    }
}

function init() {
    var p = document.getElementsByClassName("quille");

    for (var i = 0; i < p.length; i++) {
        p[i].onclick = cliqueQuille;

    }
    console.log(1 + 1);
}

window.onload = init;
