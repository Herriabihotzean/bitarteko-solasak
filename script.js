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

            source.src = "audio/001.mp3";

            lecteur.load();

            lecteur.play();

        };

        liste.appendChild(bouton);

    });

};
