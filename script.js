"use strict";

const lecteur = document.getElementById("lecteur");
const listeConversations = document.getElementById("liste-conversations");
const titreEnCours = document.getElementById("titre-en-cours");
const message = document.getElementById("message");

let indexEnCours = -1;


/*
    Création automatique des 62 boutons
*/
conversations.forEach(function (conversation, index) {
    const bouton = document.createElement("button");

    bouton.type = "button";
    bouton.className = "conversation";
    bouton.dataset.index = index;

    if (conversation.numero === 0) {

        bouton.classList.add("avant-propos");

        bouton.innerHTML =
            "<span>" +
            conversation.titre +
            "</span>";

    } else {

        bouton.innerHTML =
            "<span>" +
            "Dialogue " +
            conversation.numero +
            " – " +
            conversation.titre +
            "</span>";
    }

    bouton.addEventListener("click", function () {
        lireConversation(index);
    });

    listeConversations.appendChild(bouton);
});


/*
    Lance la conversation choisie
*/
function lireConversation(index) {
    if (index < 0 || index >= conversations.length) {
        return;
    }

    indexEnCours = index;

    const conversation = conversations[indexEnCours];

    message.textContent = "";

    lecteur.src = conversation.audio;
    lecteur.load();

    if (conversation.numero === 0) {

        titreEnCours.textContent = "AVANT-PROPOS";
        titreEnCours.classList.add("avant-propos-en-cours");

    } else {

        titreEnCours.textContent =
            "Dialogue " +
            conversation.numero +
            " – " +
            conversation.titre;

        titreEnCours.classList.remove("avant-propos-en-cours");
    }

    actualiserBoutonActif();

    lecteur.play().catch(function (erreur) {
        console.error("La lecture n’a pas pu commencer :", erreur);

        message.textContent =
            "La lecture n’a pas pu commencer. Vérifiez que le fichier " +
            conversation.audio +
            " existe bien.";
    });
}


/*
    Met en évidence la conversation en cours
*/
function actualiserBoutonActif() {
    const boutons = document.querySelectorAll(".conversation");

    boutons.forEach(function (bouton, index) {
        if (index === indexEnCours) {
            bouton.classList.add("active");
        } else {
            bouton.classList.remove("active");
        }
    });
}


/*
    Lorsque la piste se termine,
    la piste suivante commence automatiquement
*/
lecteur.addEventListener("ended", function () {
    const prochainIndex = indexEnCours + 1;

    if (prochainIndex < conversations.length) {
        lireConversation(prochainIndex);
    } else {
        titreEnCours.textContent =
            "La dernière conversation est terminée.";

        message.textContent =
            "Vous avez atteint la fin du Manuel de la conversation.";

        indexEnCours = -1;
        actualiserBoutonActif();
    }
});


/*
    Affiche un message si le fichier audio est introuvable
    ou ne peut pas être lu
*/
lecteur.addEventListener("error", function () {
    if (indexEnCours === -1) {
        return;
    }

    const conversation = conversations[indexEnCours];

    console.error(
        "Impossible de charger le fichier :",
        conversation.audio
    );

    message.textContent =
        "Impossible de charger le fichier « " +
        conversation.audio +
        " ». Vérifiez son nom et son emplacement.";
});
