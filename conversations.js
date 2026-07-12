const conversations = [
  {
    numero: 1,
    titre: "Du départ et du voyage",
    audio: "audio/001.mp3"
  },
  {
    numero: 2,
    titre: "Conversation en chemin de fer",
    audio: "audio/002.mp3"
  },
  {
    numero: 3,
    titre: "Conversation en voiture",
    audio: "audio/003.mp3"
  },
  {
    numero: 4,
    titre: "Conversation en bateau",
    audio: "audio/004.mp3"
  },
  {
    numero: 5,
    titre: "Pour demander ses bagages, les faire visiter et montrer son passeport",
    audio: "audio/005.mp3"
  },
  {
    numero: 6,
    titre: "Pour accompagner un étranger qui vient d'arriver jusqu'à son hôtel",
    audio: "audio/006.mp3"
  },
  {
    numero: 7,
    titre: "Pour aider un étranger dans ses recherches",
    audio: "audio/007.mp3"
  },
  {
    numero: 8,
    titre: "Pour louer une maison de campagne",
    audio: "audio/008.mp3"
  },
  {
    numero: 9,
    titre: "Pour louer un appartement",
    audio: "audio/009.mp3"
  },
  {
    numero: 10,
    titre: "Pour demander une chambre dans une auberge",
    audio: "audio/010.mp3"
  },
  {
    numero: 11,
    titre: "Pour remiser un cheval, une voiture",
    audio: "audio/011.mp3"
  },
  {
    numero: 12,
    titre: "Pour demander à manger ou à boire",
    audio: "audio/012.mp3"
  },
  {
    numero: 13,
    titre: "Conversation à table",
    audio: "audio/013.mp3"
  },
  {
    numero: 14,
    titre: "Sur le lever",
    audio: "audio/014.mp3"
  },
  {
    numero: 15,
    titre: "Sur le coucher",
    audio: "audio/015.mp3"
  },
  {
    numero: 16,
    titre: "Pour écrire ou faire écrire une lettre",
    audio: "audio/016.mp3"
  },
  {
    numero: 17,
    titre: "Pour voir une ville et ses environs",
    audio: "audio/017.mp3"
  },
  {
    numero: 18,
    titre: "Pour faire une promenade",
    audio: "audio/018.mp3"
  },
  {
    numero: 19,
    titre: "Sur le jeu de cartes",
    audio: "audio/019.mp3"
  },
  {
    numero: 20,
    titre: "Sur la chasse, la pêche, le jeu de paume",
    audio: "audio/020.mp3"
  },
  {
    numero: 21,
    titre: "Le salut et la bienvenue à un ami, à une connaissance",
    audio: "audio/021.mp3"
  },
  {
    numero: 22,
    titre: "Le congé et l’adieu",
    audio: "audio/022.mp3"
  },
  {
    numero: 23,
    titre: "Pour demander de l'argent",
    audio: "audio/023.mp3"
  },
  {
    numero: 24,
    titre: "Pour faire faire quelque démarche",
    audio: "audio/024.mp3"
  },
  {
    numero: 25,
    titre: "Pour obtenir un emploi",
    audio: "audio/025.mp3"
  },
  {
    numero: 26,
    titre: "Pour demander un avis",
    audio: "audio/026.mp3"
  },
  {
    numero: 27,
    titre: "Pour remercier",
    audio: "audio/027.mp3"
  },
  {
    numero: 28,
    titre: "Conversation sur la paix et la guerre",
    audio: "audio/028.mp3"
  },
  {
    numero: 29,
    titre: "Idem. Sur les mariages",
    audio: "audio/029.mp3"
  },
  {
    numero: 30,
    titre: "Idem. Sur les accidents, les maladies et les morts",
    audio: "audio/030.mp3"
  },
  {
    numero: 31,
    titre: "Idem. Sur les récoltes, les vendanges et le cours de divers prix",
    audio: "audio/031.mp3"
  },
  {
    numero: 32,
    titre: "Idem. Sur le temps",
    audio: "audio/032.mp3"
  },
  {
    numero: 33,
    titre: "Idem. Sur l'heure",
    audio: "audio/033.mp3"
  },
  {
    numero: 34,
    titre: "Idem. Sur le français et le basque",
    audio: "audio/034.mp3"
  },
  {
    numero: 35,
    titre: "Idem. Pour affirmer et nier une chose",
    audio: "audio/035.mp3"
  },
  {
    numero: 36,
    titre: "Idem. Pour exprimer le doute, la surprise, l'admiration",
    audio: "audio/036.mp3"
  },
  {
    numero: 37,
    titre: "Idem. Pour témoigner la joie et l'affliction",
    audio: "audio/037.mp3"
  },
  {
    numero: 38,
    titre: "Idem. Pour faire des reproches, pour menacer, pour exprimer sa colère",
    audio: "audio/038.mp3"
  },
  {
    numero: 39,
    titre: "Pour acheter ou vendre un cheval, une paire de bœufs, une vache, etc.",
    audio: "audio/039.mp3"
  },
  {
    numero: 40,
    titre: "Pour acheter volaille, poissons, légumes, fruits au marché",
    audio: "audio/040.mp3"
  },
  {
    numero: 41,
    titre: "Pour acheter des meubles",
    audio: "audio/041.mp3"
  },
  {
    numero: 42,
    titre: "Pour acheter des vêtements",
    audio: "audio/042.mp3"
  },
  {
    numero: 43,
    titre: "Pour acheter une montre et de la bijouterie",
    audio: "audio/043.mp3"
  },
  {
    numero: 44,
    titre: "Pour faire quelque commande à un tailleur, à une couturière",
    audio: "audio/044.mp3"
  },
  {
    numero: 45,
    titre: "Idem. À un cordonnier",
    audio: "audio/045.mp3"
  },
  {
    numero: 46,
    titre: "Idem. À une blanchisseuse",
    audio: "audio/046.mp3"
  },
  {
    numero: 47,
    titre: "Idem. À un ouvrier agricole",
    audio: "audio/047.mp3"
  },
  {
    numero: 48,
    titre: "Idem. À un perruquier",
    audio: "audio/048.mp3"
  },
  {
    numero: 49,
    titre: "Idem. À un garçon, à une fille, qui veut se placer quelque part en qualité de domestique",
    audio: "audio/049.mp3"
  },
  {
    numero: 50,
    titre: "Idem. À un médecin, à un chirurgien",
    audio: "audio/050.mp3"
  },
  {
    numero: 51,
    titre: "Lettres, billets d'invitation",
    audio: "audio/051.mp3"
  },
  {
    numero: 52,
    titre: "L. B. de demande",
    audio: "audio/052.mp3"
  },
  {
    numero: 53,
    titre: "L. B. de remerciements",
    audio: "audio/053.mp3"
  },
  {
    numero: 54,
    titre: "L. B. du premier de l'an à un bienfaiteur",
    audio: "audio/054.mp3"
  },
  {
    numero: 55,
    titre: "L. B. de félicitation pour une nomination",
    audio: "audio/055.mp3"
  },
  {
    numero: 56,
    titre: "L. B. de condoléance dans toutes sortes d'afflictions",
    audio: "audio/056.mp3"
  },
  {
    numero: 57,
    titre: "L. B. de reproche de n'avoir pas reçu de réponse",
    audio: "audio/057.mp3"
  },
  {
    numero: 58,
    titre: "L. B. d'excuse de n'avoir pas répondu",
    audio: "audio/058.mp3"
  },
  {
    numero: 59,
    titre: "L. B. de recommandation pour procurer une place à un jeune homme",
    audio: "audio/059.mp3"
  },
  {
    numero: 60,
    titre: "L. B. d'un père à un ami, pour recommander un enfant partant pour l'Amérique",
    audio: "audio/060.mp3"
  },
  {
    numero: 61,
    titre: "L. B. pour donner des conseils",
    audio: "audio/061.mp3"
  },
  {
    numero: 62,
    titre: "Proverbes basques",
    audio: "audio/062.mp3"
  }
];
