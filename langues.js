"use strict";

const HB_STORAGE_KEY = "herria_langue";
const HB_LANGUAGES = ["fr", "eu"];

const HB_LABELS = {
  fr: { fr: "français", eu: "basque" },
  eu: { fr: "frantsesez", eu: "eskuaraz" }
};

/* Textes créés dynamiquement par les autres scripts. */
const HB_DYNAMIC_TRANSLATIONS = {
  eu: {
  "Manuel de la conversation": "Mintzatzen ikhasteko esku-liburua",
  "Le livre": "Liburua",
  "Écouter — Manuel de la conversation": "Entzun — Mintzatzeko esku-liburua",
  "Aucun enregistrement sélectionné": "Ez da grabaketarik hautatu",
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
  "Idem. Sur l'heure": "Orobat. Tenoraren gainean",
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
  "Idem. À un cordonnier": "Orobat. Zapatagin bati",
  "Idem. À une blanchisseuse": "Orobat. Bokheta egile bati",
  "Idem. À un ouvrier agricole": "Orobat. Langile nekhatzaile bati",
  "Idem. À un perruquier": "Orobat. Bizar phikatzaile bati",
  "Idem. À un garçon, à une fille, qui veut se placer quelque part en qualité de domestique": "Orobat. Sehi gisa nonbait pharatu nahi den muthil, neskatxa bati",
  "Idem. À un médecin, à un chirurgien": "Orobat. Mediku, barber bati",
  "Lettres, billets d'invitation": "Letra eta billet gomitatzeko",
  "L. B. de demande": "L. B. galdezkoak",
  "L. B. de remerciements": "L. B. esker onezkoak",
  "L. B. du premier de l'an à un bienfaiteur": "L. B. urthatsetako ongi egile bati",
  "L. B. de félicitation pour une nomination": "L. B. atsegin zorionetan izendazione batentzat",
  "L. B. de condoléance dans toutes sortes d'afflictions": "L. B. gerthakari gaixtoetan atsekabe suerte guzietan",
  "L. B. de reproche de n'avoir pas reçu de réponse": "L. B. gaizkien erraiteko errepostua ez ukhanik",
  "L. B. d'excuse de n'avoir pas répondu": "L. B. barkamendu eskatzeko errepostua ez eginik",
  "L. B. de recommandation pour procurer une place à un jeune homme": "L. B. gomendiozkoak lekhu bil-hatzeko, muthil gazte bati",
  "L. B. pour donner des conseils": "L. B. kontseiluen emaiteko",
  "L. B. d'un père à un ami, pour recommander un enfant partant pour l'Amérique": "L. B. aita batek adiskide bati, Ameriketarat dohan haur baten gomendatzeko",
  "Proverbes basques": "Eskualdunen zuhur hitzak",
  "Le": ""
}
};

(function () {
  "use strict";

  if (window.__HERRIA_LANGUAGE_ENGINE__) return;
  window.__HERRIA_LANGUAGE_ENGINE__ = true;

  let currentLanguage = readStoredLanguage();
  let applying = false;
  const originalTextNodes = new WeakMap();
  const originalAttributes = new WeakMap();

  function readStoredLanguage() {
    try {
      return localStorage.getItem(HB_STORAGE_KEY) === "eu" ? "eu" : "fr";
    } catch (_error) {
      return "fr";
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem(HB_STORAGE_KEY, language);
    } catch (_error) {}
  }

  function dynamicTranslation(original, language) {
    if (language === "fr") return original;

    const clean = String(original).trim();
    if (!clean) return original;

    const dictionary = HB_DYNAMIC_TRANSLATIONS[language] || {};
    if (!Object.prototype.hasOwnProperty.call(dictionary, clean)) return original;

    return String(original).replace(clean, dictionary[clean]);
  }

  function updateEmbeddedContent(language) {
    document.querySelectorAll("[data-fr][data-eu]").forEach((element) => {
      const value = element.dataset[language];
      if (value !== undefined && element.innerHTML !== value) {
        element.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-lang]").forEach((element) => {
      element.hidden = element.dataset.lang !== language;
    });

    const attributes = ["placeholder", "title", "aria-label", "alt"];
    document.querySelectorAll("*").forEach((element) => {
      attributes.forEach((name) => {
        const suffix = language === "fr" ? "Fr" : "Eu";
        const value = element.dataset[`${name}${suffix}`];
        if (value !== undefined) element.setAttribute(name, value);
      });
    });

    const pageTitle = language === "eu"
      ? document.documentElement.dataset.titleEu
      : document.documentElement.dataset.titleFr;

    if (pageTitle) document.title = pageTitle;
  }

  function translateDynamicTextNode(node, language) {
    if (!node || !node.parentElement) return;

    const parent = node.parentElement;
    if (["SCRIPT", "STYLE", "TEXTAREA", "NOSCRIPT"].includes(parent.tagName)) return;
    if (parent.closest(".language-switcher, [data-lang], [data-fr][data-eu]")) return;

    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.nodeValue || "");
    }

    const original = originalTextNodes.get(node);
    const next = language === "fr" ? original : dynamicTranslation(original, language);
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function translateDynamicAttributes(element, language) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return;
    if (element.closest(".language-switcher")) return;

    const names = ["placeholder", "title", "aria-label", "alt"];
    let originals = originalAttributes.get(element);

    if (!originals) {
      originals = {};
      originalAttributes.set(element, originals);
    }

    names.forEach((name) => {
      if (!element.hasAttribute(name)) return;
      if (element.hasAttribute(`data-${name}-fr`)) return;

      if (!(name in originals)) originals[name] = element.getAttribute(name) || "";
      const original = originals[name];
      const next = language === "fr" ? original : dynamicTranslation(original, language);
      if (element.getAttribute(name) !== next) element.setAttribute(name, next);
    });
  }

  function translateDynamicSubtree(root, language) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      translateDynamicTextNode(root, language);
      return;
    }

    if (
      root.nodeType !== Node.ELEMENT_NODE &&
      root.nodeType !== Node.DOCUMENT_NODE
    ) return;

    if (root.nodeType === Node.ELEMENT_NODE) {
      translateDynamicAttributes(root, language);
    }

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) {
        translateDynamicTextNode(node, language);
      } else {
        translateDynamicAttributes(node, language);
      }
    }
  }

  function buildSwitcher() {
    if (document.querySelector(".language-switcher")) return;

    const nav = document.createElement("nav");
    nav.className = "language-switcher";
    nav.setAttribute("aria-label", "Choix de la langue");

    const images = {
      fr: "blason-france.svg",
      eu: "blason-navarre.svg"
    };

    HB_LANGUAGES.forEach((language) => {
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
    });

    document.body.insertBefore(nav, document.body.firstChild);
  }

  function updateSwitcher(language) {
    const labels = HB_LABELS[language];

    document.querySelectorAll(".language-choice").forEach((button) => {
      const code = button.dataset.lang;
      const label = button.querySelector(".language-label");
      const active = code === language;

      if (label) label.textContent = labels[code];
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
      button.setAttribute("aria-label", labels[code]);
    });
  }

  function setLanguage(requestedLanguage, options = {}) {
    const language = HB_LANGUAGES.includes(requestedLanguage)
      ? requestedLanguage
      : "fr";

    currentLanguage = language;
    storeLanguage(language);

    applying = true;
    updateEmbeddedContent(language);
    translateDynamicSubtree(document.body, language);
    updateSwitcher(language);
    document.documentElement.lang = language === "eu" ? "eu" : "fr";
    applying = false;

    if (!options.silent) {
      document.dispatchEvent(
        new CustomEvent("herria-language-change", {
          detail: { lang: language }
        })
      );
    }
  }

  function startObserver() {
    const observer = new MutationObserver((mutations) => {
      if (applying) return;

      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          translateDynamicSubtree(node, currentLanguage);
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  function initialise() {
    buildSwitcher();
    setLanguage(currentLanguage, { silent: true });
    startObserver();
  }

  window.HerriaLanguages = {
    setLanguage,
    getLanguage: () => currentLanguage,
    getGeneralLanguage: readStoredLanguage
  };

  window.hbSetLanguage = setLanguage;
  window.hbCurrentLanguage = () => currentLanguage;

  window.addEventListener("storage", (event) => {
    if (event.key !== HB_STORAGE_KEY) return;
    setLanguage(event.newValue === "eu" ? "eu" : "fr");
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialise, { once: true });
  } else {
    initialise();
  }
})();
