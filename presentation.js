"use strict";
const boutonOuvrir=document.getElementById("ouvrirLecteur");
const lecteurPleinEcran=document.getElementById("lecteurPleinEcran");
const cadreLecteur=document.getElementById("cadreLecteur");
function estEnPleinEcran(){return Boolean(document.fullscreenElement||document.webkitFullscreenElement)}
async function demanderPleinEcran(){if(estEnPleinEcran())return;if(lecteurPleinEcran.requestFullscreen){await lecteurPleinEcran.requestFullscreen({navigationUI:"hide"})}else if(lecteurPleinEcran.webkitRequestFullscreen){lecteurPleinEcran.webkitRequestFullscreen()}}
async function quitterPleinEcran(){if(document.fullscreenElement&&document.exitFullscreen){await document.exitFullscreen()}else if(document.webkitFullscreenElement&&document.webkitExitFullscreen){document.webkitExitFullscreen()}}
async function basculerPleinEcranLecteur(){try{estEnPleinEcran()?await quitterPleinEcran():await demanderPleinEcran()}catch(e){console.info("Le plein écran n’est pas disponible.",e)}transmettreEtatPleinEcran()}
window.basculerPleinEcranLecteur=basculerPleinEcranLecteur;
async function ouvrirLecteur(){lecteurPleinEcran.classList.add("ouvert");lecteurPleinEcran.setAttribute("aria-hidden","false");try{await demanderPleinEcran()}catch(e){console.info("Affichage étendu normal.",e)}transmettreEtatPleinEcran()}
async function fermerLecteur(){try{await quitterPleinEcran()}catch(e){}lecteurPleinEcran.classList.remove("ouvert");lecteurPleinEcran.setAttribute("aria-hidden","true")}
function transmettreEtatPleinEcran(){if(cadreLecteur.contentWindow){cadreLecteur.contentWindow.postMessage({type:"etat-plein-ecran-parent",actif:estEnPleinEcran()},window.location.origin)}}
boutonOuvrir.addEventListener("click",ouvrirLecteur);
cadreLecteur.addEventListener("load",transmettreEtatPleinEcran);
window.addEventListener("message",async e=>{if(e.origin!==window.location.origin)return;if(e.data==="fermer-le-lecteur")await fermerLecteur()});
document.addEventListener("fullscreenchange",transmettreEtatPleinEcran);
document.addEventListener("webkitfullscreenchange",transmettreEtatPleinEcran);