"use strict";

const lecteur = document.getElementById("lecteur");
const listeConversations =
    document.getElementById("listeConversations");
const titreEnCours = document.getElementById("titreEnCours");
const boutonPleinEcran =
    document.getElementById("boutonPleinEcran");
const retourPresentation =
    document.getElementById("retourPresentation");

let indexActif = -1;
let boutonActif = null;
let lectureAutomatique = false;

/*
 * Création de la liste des boutons.
 */
function creerBoutons() {
    listeConversations.innerHTML = "";

    conversations.forEach((conversation, index) => {
        const bouton = document.createElement("button");

        bouton.type = "button";
        bouton.className = "bouton-conversation";
        bouton.dataset.index = String(index);
        bouton.setAttribute("aria-pressed", "false");

        const numero = document.createElement("span");
        numero.className = "numero";
        numero.textContent =
            conversation.numero === "A"
                ? "A."
                : `${conversation.numero}.`;

        const titre = document.createElement("span");
        titre.className = "titre-conversation";
        titre.textContent = conversation.titre;

        const icone = document.createElement("span");
        icone.className = "icone-etat";
        icone.setAttribute("aria-hidden", "true");
        icone.textContent = "▶";

        bouton.append(numero, titre, icone);

        bouton.addEventListener("click", () => {
            gererClicConversation(index, bouton);
        });

        listeConversations.appendChild(bouton);
    });
}

/*
 * Premier clic : lecture.
 * Deuxième clic sur le même bouton : pause.
 * Troisième clic : reprise au même endroit.
 */
async function gererClicConversation(index, bouton) {
    const memePiste = index === indexActif;

    if (memePiste) {
        if (lecteur.paused) {
            await reprendreLecture(bouton);
        } else {
            mettreEnPause(bouton);
        }

        return;
    }

    await chargerEtLire(index, bouton);
}

/*
 * Charge une nouvelle piste et commence sa lecture.
 */
async function chargerEtLire(index, bouton) {
    reinitialiserBoutonActif();

    const conversation = conversations[index];

    indexActif = index;
    boutonActif = bouton;
    lectureAutomatique = false;

    lecteur.src = conversation.audio;
    lecteur.load();

    titreEnCours.textContent =
        `${conversation.numero === "A" ? "Avant-propos" : `Conversation ${conversation.numero}`} — ${conversation.titre}`;

    mettreBoutonEnLecture(bouton);

    try {
        await lecteur.play();
    } catch (erreur) {
        /*
         * Le navigateur peut refuser la lecture si le fichier
         * est inaccessible ou si son format n’est pas reconnu.
         */
        mettreBoutonNormal(bouton);

        titreEnCours.textContent =
            "Impossible de démarrer cet enregistrement.";

        console.error(
            "Erreur pendant la lecture du fichier audio :",
            conversation.audio,
            erreur
        );
    }
}

/*
 * Reprend la piste au même endroit après une pause.
 */
async function reprendreLecture(bouton) {
    mettreBoutonEnLecture(bouton);

    try {
        await lecteur.play();
    } catch (erreur) {
        mettreBoutonNormal(bouton);

        console.error(
            "La reprise de la lecture a échoué :",
            erreur
        );
    }
}

/*
 * Met la piste en pause.
 * Le bouton reprend son aspect normal.
 */
function mettreEnPause(bouton) {
    lecteur.pause();
    mettreBoutonNormal(bouton);
}

/*
 * Aspect du bouton pendant la lecture.
 */
function mettreBoutonEnLecture(bouton) {
    bouton.classList.add("en-lecture");
    bouton.classList.remove("en-pause");
    bouton.setAttribute("aria-pressed", "true");

    const icone = bouton.querySelector(".icone-etat");

    if (icone) {
        icone.textContent = "Ⅱ";
    }

    bouton.scrollIntoView({
        behavior: lectureAutomatique ? "smooth" : "auto",
        block: "center"
    });
}

/*
 * Aspect normal du bouton pendant une pause.
 */
function mettreBoutonNormal(bouton) {
    bouton.classList.remove("en-lecture");
    bouton.classList.add("en-pause");
    bouton.setAttribute("aria-pressed", "false");

    const icone = bouton.querySelector(".icone-etat");

    if (icone) {
        icone.textContent = "▶";
    }
}

/*
 * Réinitialise l’ancien bouton lorsqu’on choisit
 * une autre conversation.
 */
function reinitialiserBoutonActif() {
    if (!boutonActif) {
        return;
    }

    boutonActif.classList.remove(
        "en-lecture",
        "en-pause"
    );

    boutonActif.setAttribute("aria-pressed", "false");

    const icone =
        boutonActif.querySelector(".icone-etat");

    if (icone) {
        icone.textContent = "▶";
    }
}

/*
 * Si l’utilisateur agit directement sur le lecteur audio,
 * le bouton doit rester synchronisé.
 */
lecteur.addEventListener("play", () => {
    if (boutonActif) {
        mettreBoutonEnLecture(boutonActif);
    }
});

lecteur.addEventListener("pause", () => {
    /*
     * L’événement pause est aussi déclenché juste avant ended.
     * Dans ce cas, on laisse la fonction ended gérer la suite.
     */
    if (
        boutonActif &&
        !lecteur.ended
    ) {
        mettreBoutonNormal(boutonActif);
    }
});

/*
 * Lecture automatique de la piste suivante.
 */
lecteur.addEventListener("ended", async () => {
    if (boutonActif) {
        reinitialiserBoutonActif();
    }

    const indexSuivant = indexActif + 1;

    if (indexSuivant >= conversations.length) {
        titreEnCours.textContent =
            "La lecture du Manuel de la conversation est terminée.";

        indexActif = -1;
        boutonActif = null;
        return;
    }

    const boutons =
        listeConversations.querySelectorAll(
            ".bouton-conversation"
        );

    lectureAutomatique = true;

    await chargerEtLire(
        indexSuivant,
        boutons[indexSuivant]
    );
});

/*
 * Gestion du plein écran depuis la page d’écoute.
 */
async function basculerPleinEcran() {
    try {
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement
        ) {
            if (document.exitFullscreen) {
                await document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }

            return;
        }

        const element = document.documentElement;

        if (element.requestFullscreen) {
            await element.requestFullscreen({
                navigationUI: "hide"
            });
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    } catch (erreur) {
        console.info(
            "Le plein écran n’est pas disponible.",
            erreur
        );
    }
}

boutonPleinEcran.addEventListener(
    "click",
    basculerPleinEcran
);

function mettreAJourIconePleinEcran() {
    const estEnPleinEcran =
        Boolean(
            document.fullscreenElement ||
            document.webkitFullscreenElement
        );

    boutonPleinEcran.textContent =
        estEnPleinEcran ? "↙" : "⛶";

    boutonPleinEcran.title =
        estEnPleinEcran
            ? "Quitter le plein écran"
            : "Passer en plein écran";
}

document.addEventListener(
    "fullscreenchange",
    mettreAJourIconePleinEcran
);

document.addEventListener(
    "webkitfullscreenchange",
    mettreAJourIconePleinEcran
);

/*
 * Retour vers la page de présentation.
 *
 * Si index.html est affiché dans presentation.html,
 * on demande à la page parente de fermer le lecteur.
 *
 * Si index.html a été ouvert directement, on revient
 * simplement vers presentation.html.
 */
retourPresentation.addEventListener("click", () => {
    if (window.parent !== window) {
        window.parent.postMessage(
            "fermer-le-lecteur",
            "*"
        );
    } else {
        window.location.href = "presentation.html";
    }
});

creerBoutons();
