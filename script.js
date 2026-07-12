const liste=document.getElementById("listeConversations");

const lecteur=document.getElementById("lecteur");

let conversationCourante=0;



conversations.forEach((conversation,index)=>{

const li=document.createElement("li");

li.textContent=conversation.numero+" - "+conversation.titre;

li.onclick=()=>{

lireConversation(index);

};

liste.appendChild(li);

});



function lireConversation(index){

conversationCourante=index;

const conversation=conversations[index];

lecteur.src="https://drive.google.com/uc?export=download&id="+conversation.driveId;

lecteur.load();

lecteur.play();

}



lecteur.addEventListener("ended",()=>{

conversationCourante++;

if(conversationCourante<conversations.length){

lireConversation(conversationCourante);

}

});
