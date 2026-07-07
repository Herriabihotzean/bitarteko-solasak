window.onload = function () {

    const liste = document.getElementById("liste-conversations");

    conversations.forEach(function(lecon){

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

        liste.appendChild(bouton);

    });

};
