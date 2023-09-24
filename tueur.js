"use strict";

let nomSurv=["Johnny ","Jonathan ","Max ","Gyro ","Brando ","Jean-Alfredo ","Pepito "]
let nomCara=["le blagueur ","le peureux ","le sportif ","le populaire ","l'intello ","le courageux "]
let pvJason=100
let probaMort=0.3;
let probaAttaque=0.5;
let probaSacrifice=0.2;
let tabSurv=[];
let tabMort=[];

//prend un chiffre aléatoire entre 0 et x-1
function randomInt(max){
    return Math.floor(Math.random() * max);
}

//prend des noms aléatoires
function nomAleatoire(){
    let index=randomInt(nomSurv.length);
    let nom= nomSurv[index];
    nomSurv.splice(index, 1);
    let index2=randomInt(nomCara.length);
    let cara= nomCara[index2];
    nomCara.splice(index2, 1);
    return nom+cara;
}

for(let i=0; i<5; i++){
    tabSurv.push(nomAleatoire());
}

console.log("Survivants restants : "+tabSurv);
//toutes les actions répétées aléatoirement tant que le tueur n'est pas mort ou tout les survivants ne sont pas morts
while(pvJason>0 && tabSurv.length>0){
    let indexSurv=randomInt(tabSurv.length);
    let prob=Math.random();
    let cible=tabSurv[indexSurv];
    if(prob>=0 && prob<probaMort){
        console.log("Jason a attaqué et tue "+cible);
        tabMort.push(cible)
        tabSurv.splice(indexSurv, 1)
    }else if(prob>=probaMort && prob<probaMort+probaAttaque){
        console.log("Jason attaque "+cible+" mais le survivant esquive et inflige 10 points de dégâts.");
        pvJason-=10;
    }else if(prob>=probaMort+probaAttaque && prob<1){
        console.log("Jason attaque et tue "+cible+" mais le survivant meurt en infligeant 30 points de dégâts.");
        pvJason-=30;
        tabMort.push(cible)
        tabSurv.splice(indexSurv, 1)
    }console.log("Survivants restants : "+tabSurv);
}
if(pvJason<=0){
    console.log("Les survivants ont vaincu Jason ! Cependant, les survivants morts sont : "+tabMort);
}else{
    console.log("Tous les survivant sont morts et Jason est encore en vie, il a donc gagné...")
}