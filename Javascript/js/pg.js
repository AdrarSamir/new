var n = 25;
var k = 2;
var div = 2;
var i = 2;
var prem = true;

//exo 1 : function pour mettre au carré
var carre = function (n) {
    return n * n;
}
console.log(carre(n));

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//exo 2 : function pour mettre à la puissance k un entier n
var puissance = function (n, k) {
    return Math.pow(n, k);
}
console.log(puissance(n, k));

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//exo 3 : function qui permet de savoit si (des entiers) n est divisible par div
var estDivisible = function (n, div) {
    if (n % div == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(estDivisible(n, k));

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//exo 4 : function qui permet de savoir si un nombre est premier
var nPremier = function (n) {

    while (i < n && prem == true) {
        if (estDivisible(n, k)) {
            prem = false;
            return prem;
        } else {
            return true;
        }

    }
}
console.log(nPremier(n));

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

var chaine1 = "Oui";
var chaine2 = "oui";

/*var compar = function(chaine1,chaine2){
    
    if (chaine1 == chaine2){
        return true;
    }
    
    else false;
}*/

console.log(Object.is(chaine1, chaine2));
console.log(chaine1.toLowerCase() === chaine2.toLocaleLowerCase());
console.log(chaine1 == chaine2);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

/*var chaine3 = "H-ello W-o-rld+++";
var chaine4 = "H-ello W-o-rld";
var compte1 = 0;
var compte2 = 0;
for (var i = 0; i < chaine3.length; i++) {
    document.write(chaine3.charAt(i) + "-");
}

var testchar = function (chaine3, chaine4) {
    for (var i = 0; i < chaine3.length; i++) {
        if (chaine3.charAt(i) == '-') {
            compte1++
        }

        if (chaine4.charAt(i) == '-') {
            compte2++
        }
    }

    if (compte1 == compte2) {
        return true;
    } else
        return false
}

var testchar2 = function (chaine3) {
    for (var i = 0; i < chaine3.length; i++) {
        if (chaine3.charAt(i) == '-') {
            compte1++
        }

        if (chaine3.charAt(i) == '+') {
            compte2++
        }
    }

    if (compte1 == compte2) {
        return true;
    } else
        return false
}

console.log(chaine3);
console.log(chaine3);
console.log(testchar(chaine3, chaine4));
console.log(testchar2(chaine3));*/

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

var par = "";
compte3 = 0;
compte4 = 0;
compte5 = 0;
var parenthese = function (par) {

    for (var i = 0; i < par.length; i++) {

        if (par.charAt(i) == "(") {
            compte3++
        }

        if (par.charAt(i) == ")") {
            compte3--
        }
    }

    if (compte3 === 0) {
        return "c'est ok";
    } else
        return "c'est pas ok";
}

console.log(parenthese(")"));

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//algo pour nombre max
var note = [10, 20];
// attention évité les notes globales pour rien 
function noteMax(note) {
    var temp = 0;

    for (var i = 0; i < note.length; i++) {
        if (temp < note[i]) {
            temp = note[i];
        }
    }

    console.log('la note max est : ' + temp);

}

console.log(noteMax(note));

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//algo moyenne
function noteMoyenne(note) {
    var temp = 0;
    for (var i = 0; i < note.length; i++) {

        temp += note[i];

    }
    temp = temp / note.length;
    console.log('la moyenne est : ' + temp);

}

console.log(noteMoyenne(note));

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//algo note mediane
/*function compnumber(note[0],note[1]){
    return n1-n2;*/

function noteMediane(note) {

    //si c'est pair
    var idx = note.length / 2;
    return (note[idx] + note[idx - 1]) / 2;

    //si c'est impair
    var idx = Math.floor(note.length / 2);
    return note[idx];



}

console.log(noteMediane(note));

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// cela permet d'afficher un certain nombre de chiffre après la virgule
function decimalAdjust(type, value, exp) {
    // Si la valeur de exp n'est pas définie ou vaut zéro...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si la valeur n'est pas un nombre 
    // ou si exp n'est pas un entier...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Si la valeur est négative
    if (value < 0) {
        return -decimalAdjust(type, -value, exp);
    }
    // Décalage
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Décalage inversé
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

Math.round10 = function (value, exp) {
    return decimalAdjust('round', value, exp);
}


//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

//algo pour remplir le tableau
function remplirTableau(note) {

    for (var i = 0; i < note.length; i++) {

        note[i] = Math.round((Math.random() * 40)) / 2;
        console.log('les notes arrondis : ' + note[i]);
    }

}

console.log(remplirTableau(note));

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

//1/ Créez un tableau JavaScript d'une demi-douzaine d'objet élèves
//contenant chacun deux attributs :

var eleve1 = {
    nom: 'john Doe',
    noteFrancais: 12
};
var eleve2 = {
    nom: 'johny Doe',
    noteFrancais: 19
};
var eleve3 = {
    nom: 'joy Doe',
    noteFrancais: 15
};
var eleve4 = {
    nom: 'jiii Doe',
    noteFrancais: 13
};
var eleve5 = {
    nom: 'jzzz Doe',
    noteFrancais: 17
};
var eleve6 = {
    nom: 'jouuuu Doe',
    noteFrancais: 14
};
var tabEleve = [eleve1, eleve2, eleve3, eleve4, eleve5, eleve6]

//Écrire un script qui ajoute au début de l'élément <main> la note
//maximale en français.

function noteMaxx(eleves) {

    var max = 0;
    var min = 20;


    for (var i = 0; i < eleves.length; i++) {
        if (max < eleves[i].noteFrancais) {
            max = eleves[i].noteFrancais;
        }

        if (min > eleves[i].noteFrancais) {
            min = eleves[i].noteFrancais;
        }
    }

    // cela permet de changer un élément à partir de l'id
    var noteMax = document.getElementById("main");
    noteMax.innerHTML = "La note max est : " + max + "<br>" + "<br>";

}

noteMaxx(tabEleve);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

/*3/ Écrire une fonction qui ajoute à la section #eleves la liste des
élèves de la classe. Créer pour chaque élève un bloc div de classe
'elv' avec comme contenu le nom de l'élève entre balises <h2> et la
note en français.*/

function ajouteElement(eleves) {


    for (var i = 0; i < eleves.length; i++) {
        //cela permet d'ajouter les div dans la section eleves
        var nouveauDiv = document.getElementById('eleves');
        document.getElementById('eleves').innerHTML += '<div class="modifDiv">' + "<h2>" + 'le nom est : ' + eleves[i].nom + "<br>" + 'la note est : ' + eleves[i].noteFrancais + "</h2>" + "</div>";

    }

}
ajouteElement(tabEleve);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

/*Images aléatoires

1/ Écrire une page HTML avec une balise <img>. Dans le fichier
JavaScript, écrire un tableau de chaînes de caractères représentant
les chemins vers plusieurs images. Au chargement de la page, choisir
une image aléatoirement et l'insérer dans la page en modifiant
l'attribut src de la balise <img> de la page.*/

function randomImage() {
    var tabImg = new Array();
    tabImg[0] = "img/01.png";
    tabImg[1] = "img/02.jpg";
    tabImg[2] = "img/03.jpg";

    document.getElementById('image').src = tabImg[Math.round(Math.random() * 2)];
    document.getElementById('image').alt = "image de sport";
    document.getElementById('image').title = "sport";

}

randomImage();

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

/*Tables

Écrire une fonction qui retourne (sous forme d'une chaîne de
caractères) le code d'un tableau HTML représentant la table de
multiplication d'un entier passé en paramètre : genereTableHTML(n).

Utiliser cette fonction pour insérer dans la section <main> de votre
page les tables de multiplication de 1 à 10.*/

function genereTableHTML(n) {


    var tableMultiplication = document.getElementById("main");
    var texte = '';

    texte += "<table>";
    texte += "<caption>" + "<strong>" + "Table de multiplication" + "</strong>" + "</caption>";
    for (var j = 1; j <= 10; j++) {

        texte += "<tr>";
        for (var i = 1; i <= 10; i++) {

            texte += "<td>" + j + 'x' + i + '=' + j * i + "</td>";
        }
        texte += "</tr>";

    }
    texte += "</table>";
    tableMultiplication.innerHTML += texte + "<br>";

}

genereTableHTML(1);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

/*1/ Écrire une fonction moisAnnee(mois, annee) qui retourne le code
HTML de la première ligne du tableau avec à gauche le mois, et à
droite l'année. Utiliser colspan pour prendre l'ensemble de la ligne.*/

/*function moisAnnee(mois, annee) {
    var calendrier = document.getElementById("main");
    var texte = '';
    // appel de la fonction semaine afin de stocker les jours de la semaine dans le calendrier
    var jourDeLaSemaine = semaine();
    // appel de la fonction lesDates afin de stocker les dates du mois dans le calendrier
    var indexDates = lesDates(2, 30);

    texte += '<table>' + "<caption>" + "<strong>" + "Calendrier" + "</strong>" + "</caption>" + '<tr>' + '<th colspan=4>' + mois + '</th>' + '<th colspan=3>' + annee + '</th>' + '</tr>' + jourDeLaSemaine + indexDates + '</table>';
    calendrier.innerHTML += texte;
}

moisAnnee('Septembre', 2017);*/

function moisAnnee(mois, annee) {

    var texte = '';
    var tabMois = new Array();

    tabMois[1] = 'Janvier';
    tabMois[2] = 'Fevrier';
    tabMois[3] = 'Mars';
    tabMois[4] = 'Avril';
    tabMois[5] = 'Mai';
    tabMois[6] = 'Juin';
    tabMois[7] = 'Juillet';
    tabMois[8] = 'Août';
    tabMois[9] = 'Septembre';
    tabMois[10] = 'Octobre';
    tabMois[11] = 'Novembre';
    tabMois[12] = 'Decembre';


    texte += "<caption>" + "<strong>" + "Calendrier" + "</strong>" + "</caption>" + '<tr>' + '<th colspan=4>' + tabMois[mois] + '</th>' + '<th colspan=3>' + annee + '</th>' + '</tr>';
    return texte;
}

moisAnnee(1, 2017);

/*2/ Écrire une fonction semaine qui retourne le code HTML de la ligne
du tableau avec les différents jours de la semaine.*/


function semaine() {
    var texteSemaine = '';
    texteSemaine += '<tr>' + '<td>' + 'Lundi' + '</td>' + '<td>' + 'Mardi' + '</td>' + '<td>' + 'Mercredi' + '</td>' + '<td>' + 'Jeudi' + '</td>' + '<td>' + 'Vendredi' + '</td>' + '<td>' + 'Samedi' + '</td>' + '<td>' + 'Dimanche' + '</td>' + '</tr>';
    return texteSemaine;
}

/*3/ Écrire une fonction lesDates(idxPremierJour, nbJours) qui prend en
paramètre l'index dans la semaine du premier jour du mois (1 pour
lundi, 7 pour dimanche) et le nombre de jours du mois. La fonction
retourne une chaîne de caractères, code HTML qui contient autant de
lignes de tableau que nécessaire. Les premiers jours de la semaine ne
faisant pas partie du mois doivent être occupés par des cases vides,
ainsi que les derniers.*/

function lesDates(idxPremierJour, nbJours) {

    var texteDates = '';
    var jours = 1;
    for (var i = 1; i <= 6; i++) {
        texteDates += '<tr>';
        for (var j = 1; j <= 7; j++) {

            if (jours <= nbJours && idxPremierJour === j) {
                texteDates += '<td>' + jours + '</td>';
                jours++;
                idxPremierJour = j + 1;

                if (idxPremierJour > 7) {
                    idxPremierJour = 1
                }

            } else {
                texteDates += '<td>' + ' ' + '</td>';
            }
        }
        texteDates += '</tr>';
    }
    texteDates += '</tr>';
    return texteDates;
}

/*4/ Écrire une fonction init qui fait appel aux trois fonctions
précédentes pour modifier la page HTML.*/

function init() {

    var str = '<table class ="calendrierBordure">';

    var main = document.getElementById('main');

    str += moisAnnee('Janvier', 2017);

    str += semaine();

    str += lesDates(7, 31);

    str += '</table>';

    main.innerHTML = str;

}

init();

/*6/ Écrire une fonction qui étant donné un mois et une année, renvoie
son nombre de jours et l'index du premier jour du mois pour pouvoir
directement afficher un calendrier en fonction du mois et de l'année.
Utiliser l'objet Date de JavaScript.*/


function date(mois, annee) {


    var d = new Date(annee + "-" + mois + "-01");
    
    var djours = d.getDay();
    if (djours == 0) {
        djours = 7
    }
    //pour nbJours je l'ai trouvé sur le net car j'arrivais pas à trouver de solution
    var nbJours = new Date(annee, mois, 0).getDate();

    var str = '<table class ="calendrierBordure">';

    var main = document.getElementById('main');

    str += moisAnnee(mois, annee);

    str += semaine();

    str += lesDates(djours, nbJours);

    str += '</table>';

    main.innerHTML = str;
}
date(5, 2017);
