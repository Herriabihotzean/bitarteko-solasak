// Récupération des éléments de la page

const liste = document.getElementById("listeConversations");
const lecteur = document.getElementById("lecteur");

// Numéro de la conversation actuellement lue

let conversationCourante = 0;


// -------------------------------------------------------------------
// Création automatique de la liste des conversations
// -------------------------------------------------------------------

conversations.forEach((conversation, index) => {

    const li = document.createElement("li");

    li.textContent = conversation.numero + " - " + conversation.titre;

    li.addEventListener("click", function () {

        lireConversation(index);

    });

    liste.appendChild(li);

});


// -------------------------------------------------------------------
// Lecture d'une conversation
// -------------------------------------------------------------------

function lireConversation(index) {

    conversationCourante = index;

    const conversation = conversations[index];

    // Vérifie qu'un identifiant Google Drive existe

    if (conversation.driveId === "") {

        alert("Cette conversation n'a pas encore de fichier audio.");

        return;

    }

    lecteur.src =
        "https://drive.google.com/uc?export=download&id=" +
        conversation.driveId;

    lecteur.load();

    lecteur.play();

}


// -------------------------------------------------------------------
// Passage automatique à la conversation suivante
// -------------------------------------------------------------------

lecteur.addEventListener("ended", function () {

    conversationCourante++;

    if (conversationCourante < conversations.length) {

        lireConversation(conversationCourante);

    }

});
