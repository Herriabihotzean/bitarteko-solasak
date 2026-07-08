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

    alert("Bouton cliqué");

    const lecteur = document.getElementById("lecteur");

    lecteur.src = "audio/" + conversation.audio;

    lecteur.play();

};
        
        liste.appendChild(bouton);

    });

};
