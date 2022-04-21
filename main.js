/*
 * L'objectif de l'exercice est d'implémenter une fusée qui décolle après qu'on ait
 * cliqué sur un bouton qui déclenche un compte à rebours de 5 secondes.
 * Une fois qu'on a cliqué sur le bouton, on ne peut pas revenir en arrière ! Le bouton est désactivé.
 * Une fois le compte à zéro la fusée s'envole verticalement de la lune, de bas
 * en haut de l'écran, progressivement, jusqu'à disparaître de l'écran.
 * Déplacer la fusée de 2 pixels en 2 pixels, puis en bonus la faire déplacer
 * de plus en plus vite.
 * Lorsqu'on clique sur la fusée, les coordonnées X, Y de la souris s'affichent dans la console.
 */

// ---- VARIABLES ET CONSTANTES GLOBALES
let rocket = document.querySelector("img.rocket");

let bottom = 0;
function launchRocket() {
  bottom += 2;

  rocket.style.bottom = bottom + "px";
}
const launch = () => {
  let intervalRocket = setInterval(launchRocket, 100);
};

const rocketStart = () => {
  let interval = setInterval(countdown, 1000);
  launchButton.disabled = true;
  function countdown() {
    counter.textContent = `${chrono}`;
    if (chrono === 0) {
      clearInterval(interval);
      console.log("départ");
      launch();
    }
    chrono--;
  }
};

console.log("bottom", bottom); // La position verticale de la fusée en pixels, depuis le bas de l'écran
let chrono = 2; // Le chronomètre du compte à rebours
let counter = document.querySelector("span");

// L'objet DOM représentant la balise <span>
let launchButton = document.querySelector("button");
launchButton.addEventListener("click", rocketStart);

// console.log("button", launchButton); // L'objet DOM représentant la balise <button>

// console.log("rocket", rocket); // L'objet DOM représentant la balise <img>

// ---- FONCTIONS

// Le gestionnaire d'évènement de clic sur le bouton qui initie le comptes à rebours.
// 1- Il faut désactiver le bouton, quel attribut HTML permet de le faire ? En déduire le code JavaScript DOM
// 2- Il faut afficher la valeur de départ du compte à rebours pour informer l'utilisateur
// 3- Il faut initier le compte à rebours et informer l'utilisateur du temps restant en temps réel
// 4- Il faut lancer la fusée

// Le gestionnaire d'évènement de clic sur la fusée qui affiche la position de celle-ci dans la console.
// Regarder du côté de l'objet event des évènements de souris...

// La fonction qui produit l'animation de déplacement de la fusée.

// Il faut se baser sur le positionnement en CSS, voir le fichier CSS ligne 19

// ---- CODE PRINCIPAL

// Recherche de la fusée et du bouton et compteur du panneau de commandes.

// Installation d'un gestionnaire d'évènement de clic sur le bouton pour initier le compte à rebours.

// Installation d'un gestionnaire d'évènement de clic sur la fusée pour afficher sa position dans la console.

// --------------- time set
// //Fonction anonyme
// let timeout = setTimeout(function () {
//     console.log("Hello word")
// }, 5000)

// //Fonction flèche
// setTimeout(() => console.log(this), 5000)

// let timeout2 = setTimeout(function () {
//     console.log("hello")
// }, 3000)

// let interval2 = setInterval(function () {
//     console.log("hello")
// }, 3000)

// clearTimeout(timeout2)
// clearInterval(interval2)
