"use strict";
const HB_KEY="herria_langue";
const HB_DEFAULT="fr";
const HB_HISTORY=false;
const HB_TRANSLATIONS={"eu": {
  "Manuel de la conversation": "Esku-liburua mintzatzen ikhasteko",
  "Le livre": "Liburua",
  "Commander le livre": "Liburua manatu",
  "Écouter — Manuel de la conversation": "Entzun — Mintzatzeko esku-liburua",
  "Écouter, comprendre et parler": "Entzun, ulertu eta mintzatu",
  "Présentation": "Erakuspena",
  "Présentation générale": "Erakuspen orokorra",
  "Présentation du livre": "Liburuaren erakuspena",
  "← Présentation du livre": "← Liburuaren erakuspena",
  "← Retour à la présentation": "← Erakuspenarat itzuli",
  "← Retour à la présentation du livre": "← Liburuaren erakuspenarat itzuli",
  "← retour à la langue basque": "← Eskualdunen hizkuntzarat itzuli",
  "Nous contacter": "Gurekin harremanetan jarri",
  "Aucun enregistrement sélectionné": "Ez da grabaketarik hautatu",
  "Choisissez un dialogue": "Hauta zazu solasaldi bat",
  "La lecture se poursuivra automatiquement dans l’ordre": "Entzunaldia bere baitharik segituko da ordenan",
  "Cette édition présente le texte du": "Argitaraldi hunek honako testua erakusten du:",
  "accompagné des dialogues et des lettres enregistrés et accessibles sur le site.": "webgunean entzungai diren solasaldi eta gutun grabatuekin batera.",
  "Remplacez ce paragraphe par votre présentation définitive de l’ouvrage, de son histoire et des choix éditoriaux.": "Ordezka ezazu paragrafo hau obraren, haren historiaren eta argitalpen-hautuen behin betiko aurkezpenarekin.",
  "Format :": "Formatua:",
  "à préciser": "zehaztekoa",
  "Nombre de pages :": "Orrialde kopurua :",
  "Reliure :": "Azala :",
  "Impression :": "Inprimaketa :",
  "ISBN :": "ISBN :",
  "Chargement du prix…": "Prezioa kargatzen…",
  "Les informations commerciales ne peuvent pas être chargées pour le moment.": "Merkataritza-informazioa ezin kargatu da oraino.",
  "Commander maintenant": "Orai manatu",
  "Me prévenir lorsqu’il sera à nouveau disponible": "Berriz eskuragarri denean abisatu",
  "Être prévenu du retour en stock": "Berriz salgai denean abisua hartu",
  "Enregistrer ma demande": "Nere eskatzea erregistratu",
  "Pour toute question concernant l’ouvrage, une commande ou une livraison, remplissez ce formulaire.": "Obrari, eskatzea bati edo bidalketa bati buruzko edozoin galderatarako, bete formulario hau.",
  "Prénom *": "Izena *",
  "Nom *": "Deitura *",
  "Adresse électronique *": "Helbide elektronikoa *",
  "Objet *": "Gaia *",
  "Choisissez": "Hautatu",
  "Question sur le livre": "Liburuari buruzko galdera",
  "Question sur une commande": "Eskatzea bati buruzko galdera",
  "Question sur une livraison": "Bidalketa bati buruzko galdera",
  "Autre demande": "Bertze eskatzea bat",
  "Votre message *": "Zure mezua *",
  "Envoyer le message": "Mezua bidali",
  "Remplissez le formulaire, choisissez votre Point Relais ou Locker, puis créez votre commande. Une page de paiement PayPal sécurisée vous sera ensuite proposée.": "Bete formularioa, hautatu zure errelebo-puntua edo Locker-a, eta sortu eskatzea. Ondotik PayPal ordainketa-orri segurua proposatuko zautzu.",
  "Chargement des informations commerciales…": "Merkataritza-informazioa kargatzen…",
  "Cet ouvrage est actuellement en cours de réapprovisionnement et ne peut pas être commandé.": "Obra hau berriz hornitzen ari da eta ezin manatu da oraino.",
  "Destinataire": "Hartzailea",
  "Civilité *": "Deitura *",
  "M.": "Jauna",
  "Mme": "Andere",
  "Adresse personnelle": "Helbide pertsonala",
  "Numéro et nom de la voie *": "Karrikaren zenbakia eta izena *",
  "Complément d’adresse": "Helbide osagarria",
  "Code postal *": "Posta-kodea *",
  "Ville *": "Hiria *",
  "Point Relais ou Locker": "Errelebo-puntua edo Locker-a",
  "Ouvrez la carte du transporteur, recherchez un point proche de votre domicile, puis recopiez ci-dessous ses coordonnées.": "Ideki garraiolariaren mapa, bilatu etxetik hurbil den puntu bat eta kopiatu haren datuak behean.",
  "Ouvrir la carte Mondial Relay": "Mondial Relay mapa ideki",
  "Nom du Point Relais ou du Locker *": "Errelebo-puntuaren edo Locker-aren izena *",
  "Adresse du point choisi *": "Hautatutako puntuaren helbidea *",
  "Identifiant du point, s’il est indiqué": "Puntuaren identifikatzailea, adierazia bada",
  "Commande": "Eskatzea",
  "Nombre d’exemplaires *": "Ale kopurua *",
  "Remarques éventuelles": "Oharrak",
  "Prix d’un livre :": "Liburu baten prezioa:",
  "Quantité :": "Kopurua:",
  "Livraison": "Bidalketa",
  "Total :": "Guzira:",
  "J’accepte que ces informations soient utilisées uniquement pour traiter, payer et expédier cette commande.": "Onartzen dut informazio hau eskatzearen tratatzeko, ordaintzeko eta bidaltzeko bakarrik erabiltzea.",
  "Créer ma commande": "Nere eskatzea sortu",
  "Pour toute demande particulière au sujet d’une commande, nous contacter.": "Eskatzea bati buruzko galdera berezirik bada, jar zaite gurekin harremanetan.",
  "1 exemplaire": "Ale 1", "2 exemplaires": "2 ale", "3 exemplaires": "3 ale", "4 exemplaires": "4 ale", "5 exemplaires": "5 ale", "6 exemplaires": "6 ale", "7 exemplaires": "7 ale", "8 exemplaires": "8 ale", "9 exemplaires": "9 ale", "10 exemplaires": "10 ale", "11 exemplaires": "11 ale", "12 exemplaires": "12 ale", "13 exemplaires": "13 ale", "14 exemplaires": "14 ale", "15 exemplaires": "15 ale", "16 exemplaires": "16 ale", "17 exemplaires": "17 ale", "18 exemplaires": "18 ale", "19 exemplaires": "19 ale", "20 exemplaires": "20 ale",
  "Plus de détails / commander le livre": "Xehetasun gehiago / liburua manatu",
  "ÉCOUTER MAINTENANT": "ORAI ENTZUN",
  "Il est possible de ce procurer le livre en suivant le lien ci-dessous.": "Liburua beherako esteka erabiliz eskura daiteke.",
  "61 dialogues ou lettres accessibles séparément": "61 bitarteko solas edo gutun, berex entzungai",
  "Lecture continue automatique": "Entzunaldi jarraitu bere baitharik",
  "Écoute sur téléphone, tablette et ordinateur": "Telefonoan, tabletan eta ordenagailuan entzun daiteke",
  "AVANT-PROPOS": "AINTZIN-SOLASA",
  "Du départ et du voyage": "Phartidaz eta bidaiaz",
  "Conversation en chemin de fer": "Burdinazko bidean joatean egin ditakeien solasa",
  "Conversation en voiture": "Karroan joaitean egin ditakeien solasa",
  "Conversation en bateau": "Baxetan joaitean egin ditakeien solasa",
  "Pour demander ses bagages, les faire visiter et montrer son passeport": "Bere hatuen galdegiteko, ikhus-arazteko eta bideko paperaren erakhusteko",
  "Pour accompagner un étranger qui vient d'arriver jusqu'à son hôtel": "Arrotz ethorri berri bat bere ostaturat-dino laguntzeko",
  "Pour aider un étranger dans ses recherches": "Zerbaiten ondoan dabilan arrotz baten laguntzeko",
  "Pour louer une maison de campagne": "Bazter Etxe bat, alogimenduz hartzeko",
  "Pour louer un appartement": "Etxe pharte bat, alogimenduz hartzeko",
  "Pour demander une chambre dans une auberge": "Ostatu batean gela bat galdegiteko",
  "Pour remiser un cheval, une voiture": "Zaldi bat, karro bat atherbean ezartzeko",
  "Pour demander à manger ou à boire": "Jatera edo edatera galdegiteko",
  "Conversation à table": "Mahainean egin daitakeien solasa",
  "Sur le lever": "Jaikitzearen gainean",
  "Sur le coucher": "Etzatearen gainean",
  "Pour écrire ou faire écrire une lettre": "Letra baten iskiriatzeko edo izkiri-arazteko",
  "Pour voir une ville et ses environs": "Hiri bat eta haren ingurunen ikhusteko",
  "Pour faire une promenade": "Phasegu baten egiteko",
  "Sur le jeu de cartes": "Karta jokoaren gainean",
  "Sur la chasse, la pêche, le jeu de paume": "Ihiziaren, arrantzaren, pilotaren gainean",
  "Le salut et la bienvenue à un ami, à une connaissance": "Agurra eta ongi ethorria adixkide bati, ezagun bati",
  "Le congé et l’adieu": "Despeida eta adioa",
  "Pour demander de l'argent": "Diru galdatzeko",
  "Pour faire faire quelque démarche": "Zerbait urhats egin-arazteko",
  "Pour obtenir un emploi": "Kargu baten ardiesteko",
  "Pour demander un avis": "Abisu baten galdatzeko",
  "Pour remercier": "Eskertzen emaiteko",
  "Conversation sur la paix et la guerre": "Bitarteko solasa bakhearen eta gerlaren gainean",
  "Idem. Sur les mariages": "Orobat. Ezkontzen gainean",
  "Idem. Sur les accidents, les maladies et les morts": "Orobat. Gerthari gaixto, eritasun, ela hilen gainean",
  "Idem. Sur les récoltes, les vendanges et le cours de divers prix": "Orobat. Bihi alxatze, mahats biltze eta asko prezioen kurtsaren gainean",
  "Idem. Sur le temps": "Orobat. Demboraren gainean",
  "Idem. sur l'heure": "Orobat. Tenoraren gainean",
  "Idem. Sur le français et le basque": "Orobat. Frantsesaren eta eskuararen gainean",
  "Idem. Pour affirmer et nier une chose": "Orobat. Gauza baten sustengatzeko eta ukhatzeko",
  "Idem. Pour exprimer le doute, la surprise, l'admiration": "Orobat. Gauza dudazkoen, ustegabekoen eta miragarrien erraiteko",
  "Idem. Pour témoigner la joie et l'affliction": "Orobat. Bozkarioa eta atsekhabearen seinalatzeko",
  "Idem. Pour faire des reproches, pour menacer, pour exprimer sa colère": "Orobat. Gaizkien erraiteko, mehatxatzeko, haserreduraren erakhusteko",
  "Pour acheter ou vendre un cheval, une paire de bœufs, une vache, etc.": "Zaldi baten, idi pare baten, behi baten erosteko edo saltzeko, etc.",
  "Pour acheter volaille, poissons, légumes, fruits au marché": "Merkhatuan, purailleria, arrain, eltzekari, fruitu erosteko",
  "Pour acheter des meubles": "Mubleen erosteko",
  "Pour acheter des vêtements": "Arropen erosteko",
  "Pour acheter une montre et de la bijouterie": "Zarpako oren gidari baten eta urhe zilharreriaren erosteko",
  "Pour faire quelque commande à un tailleur, à une couturière": "Zerbait manu egiteko xaxtre bat, dendari bati",
  "Idem. A un cordonnier": "Orobat. Zapatagin bati",
  "Idem. A une blanchisseuse": "Orobat. Bokheta egile bati",
  "Idem. A un ouvrier agricole": "Orobat. Langile nekhatzaile bati",
  "Idem. A un perruquier": "Orobat. Bizar phikatzaile bati",
  "Idem. A un garçon, à une fille, qui veut se placer quelque part en qualité de domestique": "Orobat. Sehi gisa nonbait pharatu nahi den muthil, neskatxa bati",
  "Idem. A un médecin, à un chirurgien": "Orobat. Mediku, barber bati",
  "Lettres, billets d'invitation": "Letra eta billet gomitatzeko",
  "L. B. de demande": "L. B. galdezkoak",
  "L. B. de remerciements": "L. B. esker onezkoak",
  "L. B. du premier de l'an à un bienfaiteur": "L. B. urthatsetako ongi egile bati",
  "L. B. de félicitation pour une nomination": "L. B. atsegin zorionetan izendazione batentzat",
  "L. B. de condoléance dans toutes sortes d'afflictions": "L. B. gerthakari gaixtoetan atsekabe suerte guzietan",
  "L. B de reproche de n'avoir pas reçu de réponse": "L. B. gaizkien erraiteko errepostua ez ukhanik",
  "L. B. d'excuse de n'avoir pas répondu": "L. B. barkamendu eskatzeko errepostua ez eginik",
  "L. B. de recommandation pour procurer une place à un jeune homme": "L. B. gomendiozkoak lekhu bil-hatzeko, muthil gazte bati",
  "L. B. pour donner des conseils" : "L. B. kontseiluen emaiteko",
  "L.B. un père à un ami, pour recommander un enfant partant pour l'Amérique": "L.B. aita batek adiskide bati, Ameriketarat dohan haur baten gomendatzeko",
  "Proverbes basques": "Eskualdunen zuhur hitzak",
  "Le Manuel de la conversation écrit par l’abbé Darthayet en 1861, réédité plusieurs fois et finalement revu par l’abbé Daranatz en 1902, est un guide complet d’apprentissage pratique du basque labourdin, « le plus beau et le plus pur » (Darthayet). L’esprit de ce manuel est : peu de théorie, beaucoup de pratique. Il est conçu pour être profitable aux débutants comme aux locuteurs confirmés.": "Darthayet apezak 1861ean idatzi eta Daranatz apezak 1902an berrikusi zuen Mintzatzeko esku-liburua lapurteraren ikaskuntza praktikorako gida osoa da. Eskuliburuaren izpiritua hau da: teoria guti, praktika ainitz. Hasiberrientzat eta hiztun aitzinatuentzat baliagarri izateko egina da.",
  "En lisant les répliques en vis-à-vis dans chacune des langues, basque et française, le lecteur s’imprègne progressivement des tournures de phrases et expressions basques qui sont mises en scène dans des dialogues et correspondances. C’est pour faciliter leur mémorisation que nous proposons, en complément du manuel écrit, les enregistrements audio correspondant à l’avant-propos, aux cinquante dialogues, aux dix modèles de lettres et aux proverbes basques du manuel.": "Euskarazko eta frantsesezko erantzunak parez pare irakurriz, irakurlea emeki-emeki solasaldi eta gutunetan agertzen diren euskal esamoldeez jabetzen da. Haien oroimena errazteko, liburuaz gain aitzin-solasaren, berrogeita hamar solasaldien, hamar gutun ereduen eta erran-zaharren grabaketak eskaintzen ditugu.",
  "De fait, l’écoute répétée des dialogues en basque, tout en en connaissant le sens exact, facilite la compréhension fine de la structure de la langue et en même temps la mémorisation d’expressions caractéristiques qui jalonneront efficacement l’apprentissage.": "Solasaldiak behin eta berriz entzuteak, haien erranahi zehatza ezagutuz, hizkuntzaren egitura hobeki ulertzea eta ikaskuntza aberastuko duten esamolde bereziak gogoan hartzea errazten du.",
  "Autour de ces dialogues et de ces lettres, on trouve les éléments indispensables à l’apprentissage de la langue : des tableaux de déclinaisons, de conjugaisons, un dictionnaire. La construction de la langue y est présentée de manière progressive, peu théorique.": "Solasaldi eta gutun horien inguruan hizkuntza ikasteko beharrezko diren gaiak aurkitzen dira: deklinabide- eta aditz-taulak eta hiztegi bat. Hizkuntzaren egitura emeki eta teoria gutirekin aurkezten da."}};
const HB_LABELS={"fr": {"fr": "français", "eu": "basque", "be": "béarnais"}, "eu": {"fr": "frantsesez", "eu": "eskuaraz", "be": "biarnesez"}, "be": {"fr": "francés", "eu": "bascou", "be": "biarnés"}};

/* Moteur stable de sélection des langues — sans rechargement. */
(function () {
  "use strict";

  if (window.__HERRIA_LANGUAGE_ENGINE__) return;
  window.__HERRIA_LANGUAGE_ENGINE__ = true;

  const VALID_LANGUAGES = new Set(["fr", "eu", "be"]);
  const textOriginals = new WeakMap();
  const attributeOriginals = new WeakMap();
  let pageLanguage = null;
  let currentLanguage = "fr";
  let observer = null;
  let applying = false;

  function generalLanguage() {
    try {
      return localStorage.getItem(HB_KEY) === "eu" ? "eu" : "fr";
    } catch (_error) {
      return HB_DEFAULT || "fr";
    }
  }

  function lookup(original, language) {
    if (language === "fr") return original;
    const clean = String(original).trim();
    if (!clean) return original;
    const dictionary = (HB_TRANSLATIONS && HB_TRANSLATIONS[language]) || {};
    let translated = dictionary[clean];
    if (!translated) {
      const numbered = clean.match(/^(\d+\.\s*)(.+)$/);
      if (numbered && dictionary[numbered[2]]) {
        translated = numbered[1] + dictionary[numbered[2]];
      }
    }
    return translated ? String(original).replace(clean, translated) : original;
  }

  function rememberTextNode(node) {
    if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue || "");
  }

  function translateTextNode(node, language) {
    if (!node || !node.parentElement) return;
    if (["SCRIPT", "STYLE", "TEXTAREA", "NOSCRIPT"].includes(node.parentElement.tagName)) return;
    if (node.parentElement.closest(".language-switcher")) return;
    rememberTextNode(node);
    const original = textOriginals.get(node);
    const next = language === "fr" ? original : lookup(original, language);
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function translateAttributes(element, language) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return;
    const names = ["placeholder", "title", "aria-label", "alt"];
    let originals = attributeOriginals.get(element);
    if (!originals) {
      originals = {};
      attributeOriginals.set(element, originals);
    }
    for (const name of names) {
      if (!element.hasAttribute(name)) continue;
      if (!(name in originals)) originals[name] = element.getAttribute(name) || "";
      const original = originals[name];
      const next = language === "fr" ? original : lookup(original, language);
      if (element.getAttribute(name) !== next) element.setAttribute(name, next);
    }
  }

  function translateSubtree(root, language) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root, language);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    const element = root.nodeType === Node.ELEMENT_NODE ? root : null;
    if (element) translateAttributes(element, language);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node, language);
      else translateAttributes(node, language);
    }
  }

  function switchHistorySection(language) {
    if (!HB_HISTORY) return;
    document.querySelectorAll("[data-history-lang]").forEach((section) => {
      section.hidden = section.dataset.historyLang !== language;
    });
  }

  function updateButtons(language) {
    const labels = HB_LABELS[language] || HB_LABELS.fr;
    document.querySelectorAll(".language-choice").forEach((button) => {
      const code = button.dataset.lang;
      const label = button.querySelector(".language-label");
      if (label) label.textContent = labels[code] || "";
      const active = code === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
      button.setAttribute("aria-label", labels[code] || "");
    });
  }

  function buildSwitcher() {
    if (document.querySelector(".language-switcher")) return;
    const nav = document.createElement("nav");
    nav.className = "language-switcher";
    nav.setAttribute("aria-label", "Choix de la langue");
    const languages = HB_HISTORY ? ["fr", "eu", "be"] : ["fr", "eu"];
    const images = {
      fr: "blason-france.svg",
      eu: "blason-navarre.svg",
      be: "blason-bearn.svg"
    };
    for (const language of languages) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "language-choice";
      button.dataset.lang = language;
      const image = document.createElement("img");
      image.src = images[language];
      image.alt = "";
      const label = document.createElement("span");
      label.className = "language-label";
      button.append(image, label);
      button.addEventListener("click", () => setLanguage(language));
      nav.appendChild(button);
    }
    document.body.insertBefore(nav, document.body.firstChild);
  }

  function setLanguage(requestedLanguage, options = {}) {
    let language = VALID_LANGUAGES.has(requestedLanguage) ? requestedLanguage : "fr";
    if (!HB_HISTORY && language === "be") language = "fr";

    if (HB_HISTORY) {
      pageLanguage = language;
      if (language !== "be") {
        try { localStorage.setItem(HB_KEY, language); } catch (_error) {}
      }
    } else {
      try { localStorage.setItem(HB_KEY, language); } catch (_error) {}
    }

    currentLanguage = language;
    applying = true;
    switchHistorySection(language);
    translateSubtree(document.body, language);
    document.documentElement.lang = language === "eu" ? "eu" : language === "be" ? "oc" : "fr";
    updateButtons(language);
    applying = false;

    if (!options.silent) {
      document.dispatchEvent(new CustomEvent("herria-language-change", {
        detail: { lang: language }
      }));
    }
  }

  function startObserver() {
    observer = new MutationObserver((mutations) => {
      if (applying) return;
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) translateSubtree(node, currentLanguage);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function initialise() {
    buildSwitcher();
    const initial = HB_HISTORY ? generalLanguage() : generalLanguage();
    pageLanguage = initial;
    setLanguage(initial, { silent: true });
    startObserver();
  }

  window.HerriaLanguages = {
    setLanguage,
    getLanguage: () => currentLanguage,
    getGeneralLanguage: generalLanguage
  };
  window.hbSetLanguage = setLanguage;
  window.hbCurrentLanguage = () => currentLanguage;

  window.addEventListener("storage", (event) => {
    if (event.key !== HB_KEY || HB_HISTORY) return;
    setLanguage(event.newValue === "eu" ? "eu" : "fr");
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise, { once: true });
  } else {
    initialise();
  }
})();
