"use strict";

const lecteur =
    document.getElementById("lecteur");

const zoneAvantPropos =
    document.getElementById("zoneAvantPropos");

const listeConversations =
    document.getElementById("listeConversations");

const titreEnCours =
    document.getElementById("titreEnCours");

const message =
    document.getElementById("message");

const boutonPleinEcran =
    document.getElementById("boutonPleinEcran");

const retourPresentation =
    document.getElementById("retourPresentation");


let indexActif = -1;
let boutonActif = null;
let lectureAutomatique = false;
let pleinEcranParentActif = false;


/*
 * Reconnaît l’avant-propos.
 */
function estAvantPropos(conversation) {
    return (
        conversation.numero === 0 ||
        conversation.numero === "0" ||
        conversation.numero === "A"
    );
}


/*
 * Transforme 1 en 01, 2 en 02, etc.
 */
function formaterNumero(numero) {
    return String(numero).padStart(2, "0");
}


/*
 * Crée les boutons de l’avant-propos
 * et des dialogues.
 *
 * Aucune icône de lecture ou de pause
 * n’est ajoutée aux rectangles.
 */
function creerBoutons() {
    zoneAvantPropos.innerHTML = "";
    listeConversations.innerHTML = "";

    conversations.forEach(
        function (conversation, index) {
            const bouton =
                document.createElement("button");

            bouton.type = "button";
            bouton.className =
                "bouton-conversation";

            bouton.dataset.index =
                String(index);

            bouton.setAttribute(
                "aria-pressed",
                "false"
            );


            const numero =
                document.createElement("span");

            numero.className = "numero";


            const titre =
                document.createElement("span");

            titre.className =
                "titre-conversation";


            if (estAvantPropos(conversation)) {
                numero.style.display = "none";

                titre.textContent =
                    "AVANT-PROPOS";

                titre.style.flex = "none";
                
                bouton.classList.add(
                    "avant-propos"
                );
            } else {
                numero.textContent =
                    formaterNumero(
                        conversation.numero
                    ) + " –";

                titre.textContent =
                    conversation.titre;
            }


            bouton.append(
                numero,
                titre
            );


            bouton.addEventListener(
                "click",
                function () {
                    gererClicConversation(
                        index,
                        bouton
                    );
                }
            );


            if (estAvantPropos(conversation)) {
                zoneAvantPropos.appendChild(
                    bouton
                );
            } else {
                listeConversations.appendChild(
                    bouton
                );
            }
        }
    );
}


/*
 * Premier clic : lecture.
 * Deuxième clic sur la même piste : pause.
 * Troisième clic : reprise au même endroit.
 */
async function gererClicConversation(
    index,
    bouton
) {
    const memePiste =
        index === indexActif;

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
 * Charge une nouvelle piste et commence
 * sa lecture.
 */
async function chargerEtLire(
    index,
    bouton
) {
    reinitialiserBoutonActif();

    const conversation =
        conversations[index];

    indexActif = index;
    boutonActif = bouton;

    lecteur.src =
        conversation.audio;

    lecteur.load();


    if (estAvantPropos(conversation)) {
        titreEnCours.textContent =
            "AVANT-PROPOS";
    } else {
        titreEnCours.textContent =
            formaterNumero(
                conversation.numero
            ) +
            " – " +
            conversation.titre;
    }


    mettreBoutonEnLecture(bouton);

    try {
        await lecteur.play();

        message.textContent = "";
    } catch (erreur) {
        mettreBoutonEnPause(bouton);

        message.textContent =
            "Impossible de démarrer cet enregistrement.";

        console.error(
            "Erreur pendant la lecture :",
            conversation.audio,
            erreur
        );
    }
}


/*
 * Reprend la lecture au même endroit.
 */
async function reprendreLecture(bouton) {
    try {
        await lecteur.play();

        mettreBoutonEnLecture(bouton);

        message.textContent = "";
    } catch (erreur) {
        mettreBoutonEnPause(bouton);

        message.textContent =
            "La reprise de la lecture a échoué.";

        console.error(erreur);
    }
}


/*
 * Met la piste en pause sans la remettre
 * au début.
 */
function mettreEnPause(bouton) {
    lecteur.pause();

    mettreBoutonEnPause(bouton);
}


/*
 * Aspect visuel pendant la lecture :
 * fond ivoire et texte gras.
 */
function mettreBoutonEnLecture(bouton) {
    bouton.classList.add(
        "en-lecture"
    );

    bouton.classList.remove(
        "en-pause"
    );

    bouton.setAttribute(
        "aria-pressed",
        "true"
    );


    if (lectureAutomatique) {
        bouton.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


/*
 * Aspect visuel pendant la pause :
 * fond ivoire et texte normal.
 */
function mettreBoutonEnPause(bouton) {
    bouton.classList.remove(
        "en-lecture"
    );

    bouton.classList.add(
        "en-pause"
    );

    bouton.setAttribute(
        "aria-pressed",
        "false"
    );
}


/*
 * Rend neutre l’ancien bouton quand une
 * autre piste est sélectionnée.
 */
function reinitialiserBoutonActif() {
    if (!boutonActif) {
        return;
    }

    boutonActif.classList.remove(
        "en-lecture",
        "en-pause"
    );

    boutonActif.setAttribute(
        "aria-pressed",
        "false"
    );
}


/*
 * Synchronise le bouton avec les commandes
 * du lecteur audio.
 */
lecteur.addEventListener(
    "play",
    function () {
        if (boutonActif) {
            mettreBoutonEnLecture(
                boutonActif
            );
        }
    }
);


lecteur.addEventListener(
    "pause",
    function () {
        if (
            boutonActif &&
            !lecteur.ended
        ) {
            mettreBoutonEnPause(
                boutonActif
            );
        }
    }
);


/*
 * Lance automatiquement la piste suivante.
 */
lecteur.addEventListener(
    "ended",
    async function () {
        reinitialiserBoutonActif();

        const indexSuivant =
            indexActif + 1;


        if (
            indexSuivant >=
            conversations.length
        ) {
            titreEnCours.textContent =
                "La lecture du Manuel de la conversation est terminée.";

            indexActif = -1;
            boutonActif = null;

            return;
        }


        const prochainBouton =
            document.querySelector(
                '.bouton-conversation[data-index="' +
                indexSuivant +
                '"]'
            );


        if (!prochainBouton) {
            return;
        }


        lectureAutomatique = true;

        await chargerEtLire(
            indexSuivant,
            prochainBouton
        );

        lectureAutomatique = false;
    }
);


/*
 * Demande à presentation.html de changer
 * l’état du plein écran lorsque l’index se
 * trouve dans l’iframe.
 */
function appelerPleinEcranParent() {
    try {
        if (
            window.parent !== window &&
            typeof window.parent
                .basculerPleinEcranLecteur ===
                "function"
        ) {
            window.parent
                .basculerPleinEcranLecteur();

            return true;
        }
    } catch (erreur) {
        console.info(
            "Le plein écran parent n’est pas disponible.",
            erreur
        );
    }

    return false;
}


/*
 * Active ou quitte le plein écran.
 */
async function basculerPleinEcran() {
    if (
        window.parent !== window &&
        appelerPleinEcranParent()
    ) {
        return;
    }


    try {
        const actif =
            Boolean(
                document.fullscreenElement ||
                document.webkitFullscreenElement
            );


        if (actif) {
            if (document.exitFullscreen) {
                await document.exitFullscreen();
            } else if (
                document.webkitExitFullscreen
            ) {
                document.webkitExitFullscreen();
            }

            return;
        }


        const element =
            document.documentElement;


        if (element.requestFullscreen) {
            await element.requestFullscreen({
                navigationUI: "hide"
            });
        } else if (
            element.webkitRequestFullscreen
        ) {
            element.webkitRequestFullscreen();
        }
    } catch (erreur) {
        console.info(
            "Le plein écran n’est pas disponible.",
            erreur
        );
    }
}


/*
 * Met à jour le bouton de plein écran
 * et la visibilité du bouton de retour.
 */
function mettreAJourPleinEcran() {
    const actif =
        Boolean(
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            pleinEcranParentActif
        );


    document.body.classList.toggle(
        "mode-plein-ecran",
        actif
    );


    boutonPleinEcran.textContent =
        actif ? "↙" : "⛶";


    boutonPleinEcran.title =
        actif
            ? "Quitter le plein écran"
            : "Passer en plein écran";


    boutonPleinEcran.setAttribute(
        "aria-label",
        boutonPleinEcran.title
    );
}


boutonPleinEcran.addEventListener(
    "click",
    function (evenement) {
        evenement.stopPropagation();

        basculerPleinEcran();
    }
);


/*
 * Double clic dans une zone libre pour
 * entrer ou sortir du plein écran.
 */
document.addEventListener(
    "dblclick",
    function (evenement) {
        const elementInteractif =
            evenement.target.closest(
                "button, a, input, select, textarea, audio"
            );


        if (elementInteractif) {
            return;
        }


        basculerPleinEcran();
    }
);


document.addEventListener(
    "fullscreenchange",
    mettreAJourPleinEcran
);


document.addEventListener(
    "webkitfullscreenchange",
    mettreAJourPleinEcran
);


/*
 * Reçoit de presentation.html l’état
 * du plein écran du conteneur parent.
 */
window.addEventListener(
    "message",
    function (evenement) {
        if (
            evenement.origin !==
            window.location.origin
        ) {
            return;
        }


        if (
            evenement.data &&
            evenement.data.type ===
                "etat-plein-ecran-parent"
        ) {
            pleinEcranParentActif =
                Boolean(
                    evenement.data.actif
                );

            mettreAJourPleinEcran();
        }
    }
);


/*
 * Retour vers la présentation.
 *
 * La lecture est interrompue avant de
 * quitter l’index.
 */
retourPresentation.addEventListener(
    "click",
    function () {
        lecteur.pause();


        if (window.parent !== window) {
            window.parent.postMessage(
                "fermer-le-lecteur",
                window.location.origin
            );
        } else {
            window.location.href =
                "presentation.html";
        }
    }
);


creerBoutons();
mettreAJourPleinEcran();
