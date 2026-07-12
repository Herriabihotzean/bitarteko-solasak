window.onload = function () {

    const liste = document.getElementById("liste-conversations");

    conversations.forEach(function(conversation){

        const bouton = document.createElement("button");

        bouton.innerHTML =
            "🎧 " +
            conversation.numero +
            " – " +
            conversation.titre;

        bouton.style.display = "block";
        bouton.style.width = "100%";
        bouton.style.margin = "8px 0";
        bouton.style.padding = "12px";
        bouton.style.textAlign = "left";

        bouton.onclick = function () {

    const lecteur = document.getElementById("lecteur");

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

        
        
        liste.appendChild(bouton);

    });

};
