const BUTTON = document.getElementById('btn');
let age = document.getElementById('inputAge');
let sexe = document.getElementById('inputSexe');

btn.addEventListener('click', function(){
    sexe = sexe.value;
    console.log(sexe);
    age = age.value;
    console.log(age);
    impot();
});


function impot(){

    if (age > 20 && sexe == "H") { //si l'âge est supérieur à 20 et que c'est un homme
        alert("Imposable")
      } else if (age >= 18 && age <= 35 && sexe == "F") { //si l'âge est supérieur ou égal à 18 et inférieur ou égal a 35 et que c'est une femme
        alert("Imposable")
      } else {
        alert("Non imposable")
      }   
}





