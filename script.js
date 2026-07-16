"use strict";
const lecteur=document.getElementById("lecteur");
const zoneAvantPropos=document.getElementById("zoneAvantPropos");
const listeConversations=document.getElementById("listeConversations");
const titreEnCours=document.getElementById("titreEnCours");
const message=document.getElementById("message");
const boutonPleinEcran=document.getElementById("boutonPleinEcran");
const retourPresentation=document.getElementById("retourPresentation");
let indexActif=-1,boutonActif=null,lectureAutomatique=false,pleinEcranParentActif=false;
function estAvantPropos(c){return c.numero===0||c.numero==="0"||c.numero==="A"}
function formaterNumero(n){return String(n).padStart(2,"0")}
function creerBoutons(){zoneAvantPropos.innerHTML="";listeConversations.innerHTML="";conversations.forEach((c,index)=>{const b=document.createElement("button");b.type="button";b.className="bouton-conversation";b.dataset.index=String(index);b.setAttribute("aria-pressed","false");const numero=document.createElement("span");numero.className="numero";const titre=document.createElement("span");titre.className="titre-conversation";const icone=document.createElement("span");icone.className="icone-etat";icone.setAttribute("aria-hidden","true");icone.textContent="▶";if(estAvantPropos(c)){numero.textContent="";titre.textContent="AVANT-PROPOS";b.classList.add("avant-propos")}else{numero.textContent=formaterNumero(c.numero)+" –";titre.textContent=c.titre}b.append(numero,titre,icone);b.addEventListener("click",()=>gererClicConversation(index,b));(estAvantPropos(c)?zoneAvantPropos:listeConversations).appendChild(b)})}
async function gererClicConversation(index,b){if(index===indexActif){lecteur.paused?await reprendreLecture(b):mettreEnPause(b);return}await chargerEtLire(index,b)}
async function chargerEtLire(index,b){reinitialiserBoutonActif();const c=conversations[index];indexActif=index;boutonActif=b;lecteur.src=c.audio;lecteur.load();titreEnCours.textContent=estAvantPropos(c)?"AVANT-PROPOS":formaterNumero(c.numero)+" – "+c.titre;mettreBoutonEnLecture(b);try{await lecteur.play();message.textContent=""}catch(e){mettreBoutonEnPause(b);message.textContent="Impossible de démarrer cet enregistrement.";console.error(e)}}
async function reprendreLecture(b){try{await lecteur.play();mettreBoutonEnLecture(b);message.textContent=""}catch(e){mettreBoutonEnPause(b);message.textContent="La reprise de la lecture a échoué."}}
function mettreEnPause(b){lecteur.pause();mettreBoutonEnPause(b)}
function mettreBoutonEnLecture(b){b.classList.add("en-lecture");b.classList.remove("en-pause");b.setAttribute("aria-pressed","true");const i=b.querySelector(".icone-etat");if(i)i.textContent="Ⅱ";if(lectureAutomatique)b.scrollIntoView({behavior:"smooth",block:"center"})}
function mettreBoutonEnPause(b){b.classList.remove("en-lecture");b.classList.add("en-pause");b.setAttribute("aria-pressed","false");const i=b.querySelector(".icone-etat");if(i)i.textContent="▶"}
function reinitialiserBoutonActif(){if(!boutonActif)return;boutonActif.classList.remove("en-lecture","en-pause");boutonActif.setAttribute("aria-pressed","false");const i=boutonActif.querySelector(".icone-etat");if(i)i.textContent="▶"}
lecteur.addEventListener("play",()=>{if(boutonActif)mettreBoutonEnLecture(boutonActif)});
lecteur.addEventListener("pause",()=>{if(boutonActif&&!lecteur.ended)mettreBoutonEnPause(boutonActif)});
lecteur.addEventListener("ended",async()=>{reinitialiserBoutonActif();const suivant=indexActif+1;if(suivant>=conversations.length){titreEnCours.textContent="La lecture du Manuel de la conversation est terminée.";indexActif=-1;boutonActif=null;return}const b=document.querySelector('.bouton-conversation[data-index="'+suivant+'"]');if(!b)return;lectureAutomatique=true;await chargerEtLire(suivant,b);lectureAutomatique=false});
function appelerPleinEcranParent(){try{if(window.parent!==window&&typeof window.parent.basculerPleinEcranLecteur==="function"){window.parent.basculerPleinEcranLecteur();return true}}catch(e){}return false}
async function basculerPleinEcran(){if(window.parent!==window&&appelerPleinEcranParent())return;try{const actif=Boolean(document.fullscreenElement||document.webkitFullscreenElement);if(actif){if(document.exitFullscreen)await document.exitFullscreen();else if(document.webkitExitFullscreen)document.webkitExitFullscreen();return}const el=document.documentElement;if(el.requestFullscreen)await el.requestFullscreen({navigationUI:"hide"});else if(el.webkitRequestFullscreen)el.webkitRequestFullscreen()}catch(e){console.info("Le plein écran n’est pas disponible.",e)}}
function mettreAJourPleinEcran(){const actif=Boolean(document.fullscreenElement||document.webkitFullscreenElement||pleinEcranParentActif);document.body.classList.toggle("mode-plein-ecran",actif);boutonPleinEcran.textContent=actif?"↙":"⛶";boutonPleinEcran.title=actif?"Quitter le plein écran":"Passer en plein écran";boutonPleinEcran.setAttribute("aria-label",boutonPleinEcran.title)}
boutonPleinEcran.addEventListener("click",e=>{e.stopPropagation();basculerPleinEcran()});
document.addEventListener("dblclick",e=>{if(e.target.closest("button,a,input,select,textarea,audio"))return;basculerPleinEcran()});
document.addEventListener("fullscreenchange",mettreAJourPleinEcran);document.addEventListener("webkitfullscreenchange",mettreAJourPleinEcran);
window.addEventListener("message",e=>{if(e.origin!==window.location.origin)return;if(e.data&&e.data.type==="etat-plein-ecran-parent"){pleinEcranParentActif=Boolean(e.data.actif);mettreAJourPleinEcran()}});
retourPresentation.addEventListener("click",()=>{if(window.parent!==window)window.parent.postMessage("fermer-le-lecteur",window.location.origin);else window.location.href="presentation.html"});
creerBoutons();mettreAJourPleinEcran();