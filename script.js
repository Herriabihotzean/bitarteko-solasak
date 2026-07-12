window.onload = function () {

    const lecteur = document.getElementById("lecteur");
    const source = document.getElementById("source-audio");
    const liste = document.getElementById("liste-conversations");

    conversations.forEach(function(conversation){

        const bouton = document.createElement("button");

        bouton.textContent =
            "🎧 " +
            conversation.numero +
            " – " +
            conversation.titre;

        bouton.onclick = function(){

            lecteur.src = "https://drive.google.com/uc?export=download&id=" +
        conversation.driveId;

            lecteur.load();

            lecteur.play();

        };

        liste.appendChild(bouton);

    });

};
