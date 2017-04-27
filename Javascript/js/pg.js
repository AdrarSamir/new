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

//exo 2 : function pour mettre à la puissance k un entier n
var puissance = function (n, k) {
    return Math.pow(n, k);
}
console.log(puissance(n, k));

//exo 3 : function qui permet de savoit si (des entiers) n est divisible par div
var estDivisible = function (n, div) {
    if (n % div == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(estDivisible(n, k));

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

//algo pour remplir le tableau
function remplirTableau(note) {

    for (var i = 0; i < note.length; i++) {

        note[i] = Math.round((Math.random() * 40)) / 2;
        console.log('les notes arrondis : ' + note[i]);
    }

}

console.log(remplirTableau(note));

var eleve = {
    nom: 'john Doe',
    noteFrancais: 12
};
var eleve2 = {
    nom: 'johny Doe',
    noteFrancais: 20
};
var tabEleve = [eleve, eleve2]



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
    var test = document.getElementById("b");
    test.innerHTML ="la note max est de : "+max;
    
    console.log(max);
    console.log(min);
    
}


noteMaxx(tabEleve);
// cela permet de changer un élément à partir de la class 
function p(){
   var test2= document.getElementsByClassName('texte')[1];
    test2.innerHTML="nulllllllllllll";
}
p();

function changeAttribut(){
var x = document.getElementById("vid");

    if (x.hasAttribute("src")) {
        x.setAttribute("src", "https://www.youtube.com/embed/b7JhXQe1JHQ");
}
}

console.log('la note est ici'+eleve.noteFrancais);

