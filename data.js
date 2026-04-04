// ┌─────────────────────────────────────────────────────────┐
// │  ONE PIECE TIMELINE — Base de données                   │
// │  Source : Library of Ohara v5.0, SBS, Vivre Cards       │
// │  Format : JavaScript (chargé par index.html)            │
// │  Pour modifier : éditer ce fichier ou utiliser          │
// │  l'export/import dans l'application                     │
// └─────────────────────────────────────────────────────────┘

var DATA = {
  version: "1.0",
  lastUpdated: "2026-04",
  source: "The Library of Ohara v5.0 (chap. 1103) + connaissances générales",
  events: [

// ── PRÉHISTOIRE ──────────────────────────────────────────
{ id:"p002", era:"prehistoric", type:"ere", year_k:null, years_before:5000, approx:true,
  date_label:"Il y a ~5 000 ans",
  title:"L'Arbre de la Toute-Connaissance",
  description:"Un arbre qui deviendra 'l'Arbre de la Toute-Connaissance' pousse sur l'île d'Ohara. Il sera pendant des millénaires utilisé comme bibliothèque.",
  characters:[], locations:["Ohara"], source:"Chapitre 392", tags:["Ohara","archéologie"] },

{ id:"p003", era:"prehistoric", type:"politique", year_k:null, years_before:4000, approx:true,
  date_label:"Il y a ~4 000 ans",
  title:"Construction du Palais d'Alubarna",
  description:"Le Palais d'Alubarna est bâti sur l'île de Sable, au cœur du Royaume d'Alabasta. Il servira de site historique pendant quatre millénaires.",
  characters:[], locations:["Alabasta","Alubarna"], source:"Chapitre 188", tags:["Alabasta"] },

{ id:"p004", era:"prehistoric", type:"ere", year_k:0, years_before:1524, approx:false,
  date_label:"An 0 Kaienreki",
  title:"Naissance du Calendrier Kaienreki",
  description:"L'année 0 du Calendrier Marin (Kaienreki / 海円暦) est instaurée. Ce calendrier est encore en usage à l'époque actuelle, il y a 1524 ans de cela.",
  characters:[], locations:[], source:"Chapitre 287, SBS", tags:["calendrier","monde"] },

// ── ANTIQUITÉ ────────────────────────────────────────────
{ id:"a001", era:"antiquite", type:"ere", year_k:null, years_before:1200, approx:true,
  date_label:"Il y a >1 120 ans",
  title:"Civilisation de la Lune — Birka",
  description:"Des hominidés ailés colonisent la Lune et fondent la cité de Birka. Leur civilisation prospère grâce à leur technologie avancée, et ils créent une race d'androïdes : les automates horlogers.",
  characters:[], locations:["Lune","Birka"], source:"Chapitre 470", tags:["Lune","Skypiea"] },

{ id:"a002", era:"antiquite", type:"ere", year_k:null, years_before:1100, approx:true,
  date_label:"Il y a >1 120 ans",
  title:"Départ des Peuples de la Lune",
  description:"Faute de ressources naturelles, les habitants de la Lune descendent sur la planète. Les trois tribus se séparent et fondront un jour les cités de Birka (ciel), Skypiea et Shandora.",
  characters:[], locations:["Lune","Skypiea","Shandora"], source:"Chapitre 472", tags:["Lune","Shandians"] },

{ id:"a003", era:"antiquite", type:"politique", year_k:402, years_before:1122, approx:false,
  date_label:"An 402 — Il y a 1 122 ans",
  title:"Shandora prospère sur Jaya",
  description:"La Cité de Shandora, fondée par des descendants des peuples de la Lune, est florissante sur l'île de Jaya. Elle abrite un ponéglyphe et une grande cloche d'or.",
  characters:["Kalgara"], locations:["Jaya","Shandora"], source:"Chapitre 261", tags:["Shandians","Jaya","Skypiea"] },

{ id:"a004", era:"antiquite", type:"naissance", year_k:null, years_before:1024, approx:true,
  date_label:"Il y a >1 000 ans",
  title:"Naissance de Zunisha",
  description:"L'éléphant Naitamie-Norida Zunisha vient au monde. Il deviendra la demeure du peuple des Minks pendant des siècles.",
  characters:["Zunisha"], locations:[], source:"Vivre Card", tags:["Minks","Zou"] },

{ id:"a005", era:"antiquite", type:"ere", year_k:null, years_before:1000, approx:true,
  date_label:"Il y a ~1 000 ans",
  title:"Le Conflit des 1 000 Ans",
  description:"Un conflit entre la race des Bras-Longs (Longarm) et la race des Jambes-Longues (Longleg) débute et durera un millénaire entier.",
  characters:[], locations:[], source:"Chapitre 884", tags:["races"] },

{ id:"a006", era:"antiquite", type:"politique", year_k:null, years_before:950, approx:true,
  date_label:"Il y a >900 ans",
  title:"Fondation de Dressrosa & Ère des Esclaves",
  description:"Le Royaume de Dressrosa est fondé sous la dynasty Donquixote. L'Ère des Esclaves sévit : des tyrans cruels accumulent richesses et gloire sur la souffrance des esclaves.",
  characters:[], locations:["Dressrosa"], source:"Chapitre 726", tags:["Dressrosa","esclavage"] },

// ── SIÈCLE DU VIDE ────────────────────────────────────────
{ id:"v001", era:"vide", type:"ere", year_k:600, years_before:924, approx:false,
  date_label:"An 600 — Il y a 924 ans",
  title:"Début du Siècle Oublié",
  description:"Le siècle qui sera connu sous le nom de 'Siècle Oublié' commence. Cette période met fin à l'Ère des Esclaves — en apparence.",
  characters:[], locations:[], source:"Chapitre 649", tags:["Siècle Oublié"] },

{ id:"v002", era:"vide", type:"naissance", year_k:null, years_before:900, approx:true,
  date_label:"An ~600-700 — Il y a ~900 ans",
  title:"Naissance du Roi Nerona Imu",
  description:"Nerona Imu, roi qui deviendra l'ombre au pouvoir absolu du Gouvernement Mondial, naît pendant le Siècle Oublié.",
  characters:["Imu"], locations:[], source:"Chapitre 1086", tags:["Imu","Gouvernement"] },

{ id:"v003", era:"vide", type:"naissance", year_k:668, years_before:856, approx:true,
  date_label:"An ~668 — Il y a ~856 ans",
  title:"Naissance d'Amatsuki Toki",
  description:"Amatsuki Toki naît de parents originaires du Pays de Wano, mais elle vit à l'étranger. Elle possède le Toki Toki no Mi qui lui permet de voyager dans le temps.",
  characters:["Toki"], locations:["Wano"], source:"Chapitre 964", tags:["Toki","Wano","Fruit du Démon"] },

{ id:"v004", era:"vide", type:"mystere", year_k:null, years_before:880, approx:true,
  date_label:"An 600-700 — Il y a ~900 ans",
  title:"Apparition des Fruits du Démon",
  description:"Les plus anciens Fruits du Démon connus apparaissent dans le monde. Selon la théorie de Vegapunk, ils seraient la matérialisation des rêves des gens. Le Gomu Gomu no Mi (Nika) existe déjà depuis cette époque.",
  characters:[], locations:[], source:"Chapitre 973, 1044", tags:["Fruits du Démon","mystère"] },

{ id:"v005", era:"vide", type:"ere", year_k:null, years_before:880, approx:true,
  date_label:"An ~600 — Il y a ~900 ans",
  title:"Le Grand Royaume & le Clan des D.",
  description:"Un 'immense royaume' prospère avec une technologie très avancée. Relié à l'Île des Hommes-Poissons, Wano, Shandora et bien d'autres, il est composé de membres du 'Clan D.'",
  characters:[], locations:["Grand Royaume"], source:"Chapitre 1065, 1085", tags:["Clan D.","Grand Royaume","mystère"] },

{ id:"v006", era:"vide", type:"mystere", year_k:null, years_before:880, approx:true,
  date_label:"An ~600 — Il y a ~900 ans",
  title:"Fabrication du Géant de Fer",
  description:"Un colossal robot — le 'Géant de Fer' — est fabriqué par le Grand Royaume grâce à sa technologie avancée. Il attaquera Mary Geoise 200 ans avant l'histoire principale.",
  characters:[], locations:["Grand Royaume"], source:"Chapitre 1066, 1067", tags:["Géant de Fer","mystère","technologie"] },

{ id:"v007", era:"vide", type:"mystere", year_k:null, years_before:870, approx:true,
  date_label:"An 600-700 — Il y a ~870 ans",
  title:"Joyboy & le Fruit Nika",
  description:"Des esclaves et opprimés commencent à vénérer 'le Guerrier de la Libération Nika' comme un dieu. Ce rêve prend forme dans le Hito Hito no Mi, Modèle : Nika, mangé par un utilisateur qui gagne le surnom de 'Joyboy'.",
  characters:["Joyboy","Nika"], locations:[], source:"Chapitre 649, 1044", tags:["Joyboy","Nika","Fruit du Démon","Luffy"] },

{ id:"v008", era:"vide", type:"politique", year_k:null, years_before:870, approx:true,
  date_label:"An 600-700 — Il y a ~870 ans",
  title:"Promesse de Joyboy à l'Île des Hommes-Poissons",
  description:"La Princesse Sirène de l'Île des Hommes-Poissons, baptisée 'Poséidon', et les habitants de l'île font une promesse avec Joyboy impliquant l'arche Noah et Poséidon.",
  characters:["Joyboy","Poséidon"], locations:["Île des Hommes-Poissons"], source:"Chapitre 649", tags:["Joyboy","Île des Hommes-Poissons","Armes Ancestrales"] },

{ id:"v009", era:"vide", type:"mystere", year_k:null, years_before:865, approx:true,
  date_label:"An 600-700 — Il y a ~865 ans",
  title:"Les Trois Armes Ancestrales",
  description:"Les trois Armes Ancestrales — Pluton (un navire de guerre), Poséidon (la Princesse Sirène), et Urano — sont reconnues comme capables de 'détruire le monde'.",
  characters:[], locations:["Water 7","Île des Hommes-Poissons"], source:"Chapitre 344, 650", tags:["Armes Ancestrales","Pluton","Poséidon","Urano"] },

{ id:"v010", era:"vide", type:"guerre", year_k:null, years_before:860, approx:true,
  date_label:"An 600-700 — Il y a ~860 ans",
  title:"La Grande Guerre du Siècle Oublié",
  description:"Une guerre colossale oppose le Grand Royaume (Clan D.) à une alliance de 20 rois humains, incluant Imu, Lily d'Alabasta (en réalité membre du Clan D.), Donquixote de Dressrosa et 17 autres souverains.",
  characters:["Imu","Lily","Donquixote"], locations:["Grand Royaume"], source:"Chapitre 1066, 1085", tags:["Siècle Oublié","guerre","Gouvernement"] },

{ id:"v011", era:"vide", type:"mystere", year_k:null, years_before:824, approx:true,
  date_label:"Fin du siècle 600 — Il y a ~824 ans",
  title:"Création des Ponéglyphes",
  description:"Anticipant leur défaite, le Grand Royaume s'allie au Clan Kouzuki de Wano pour graver l'histoire sur des pierres indestructibles : les Ponéglyphes. 30 sont créés, dont 9 contenant la vraie histoire.",
  characters:["Clan Kouzuki"], locations:["Wano"], source:"Chapitre 395, 818", tags:["Ponéglyphes","Kouzuki","mystère"] },

{ id:"v012", era:"vide", type:"mort", year_k:null, years_before:824, approx:true,
  date_label:"Fin du siècle 600 — Il y a ~824 ans",
  title:"Mort de Joyboy & Fuite du Nika",
  description:"L'utilisateur de Joyboy meurt. Le Hito Hito no Mi, Modèle : Nika se réincarne et commence à fuir ses ennemis pendant 800 ans, en quête d'un nouvel utilisateur.",
  characters:["Joyboy"], locations:[], source:"Chapitre 1044, 1037", tags:["Joyboy","Nika","Fruit du Démon"] },

{ id:"v013", era:"vide", type:"guerre", year_k:null, years_before:822, approx:true,
  date_label:"Fin du siècle 600 — Il y a ~822 ans",
  title:"Chute de Shandora",
  description:"Les puissances alliées tentent de voler le Ponéglyphe de Shandora. Un conflit brutal s'ensuit, causant la chute de Shandora, mais les Shandiens protègent leur pierre.",
  characters:["Kalgara"], locations:["Shandora","Jaya"], source:"Chapitre 261, 275", tags:["Shandians","Siècle Oublié","Ponéglyphes"] },

{ id:"v014", era:"vide", type:"mort", year_k:null, years_before:820, approx:true,
  date_label:"Fin du siècle 600 — Il y a ~820 ans",
  title:"Défaite du Grand Royaume",
  description:"Le Grand Royaume est vaincu. L'île finale de la Route des Ponéglyphes — plus tard appelée 'Laugh Tale' — est abandonnée, laissant derrière elle le trésor connu sous le nom d'One Piece.",
  characters:[], locations:["Laugh Tale"], source:"Chapitre 967", tags:["Siècle Oublié","One Piece","Laugh Tale"] },

{ id:"v015", era:"vide", type:"ere", year_k:694, years_before:830, approx:true,
  date_label:"An ~694 — Il y a ~830 ans",
  title:"Toki Traverse le Temps",
  description:"Amatsuki Toki utilise son Toki Toki no Mi pour bondir 800 ans dans le futur, espérant voir l'avènement de celui qui renversera le monde.",
  characters:["Toki"], locations:[], source:"Chapitre 973", tags:["Toki","Fruit du Démon","voyage dans le temps"] },

// ── POST-SIÈCLE DU VIDE ────────────────────────────────────
{ id:"pv001", era:"post_vide", type:"politique", year_k:700, years_before:824, approx:false,
  date_label:"An 700 — Il y a 824 ans",
  title:"Fondation du Gouvernement Mondial",
  description:"Les 19 rois survivants (Lily ayant disparu) fondent la capitale mondiale de Mary Geoise sur le Dos-du-Monde, à la place du Pays des Dieux des Lunaries. Ils créent le Gouvernement Mondial et effacent toute trace du Siècle Oublié.",
  characters:["Imu"], locations:["Mary Geoise"], source:"Chapitre 497, 907", tags:["Gouvernement Mondial","Mary Geoise","Dragons Célestes"] },

{ id:"pv002", era:"post_vide", type:"politique", year_k:700, years_before:824, approx:false,
  date_label:"An 700 — Il y a 824 ans",
  title:"Le Serment du Trône Vide",
  description:"Un Trône Vide est érigé dans le Château de Pangée. Les 19 rois prêtent serment de n'en convoiter jamais le pouvoir. En réalité, Imu s'en empare secrètement comme Roi du Monde.",
  characters:["Imu"], locations:["Mary Geoise","Pangée"], source:"Chapitre 907, 1085", tags:["Trône Vide","Imu","Gouvernement"] },

{ id:"pv003", era:"post_vide", type:"politique", year_k:700, years_before:824, approx:false,
  date_label:"An 700 — Il y a 824 ans",
  title:"Fermeture des Frontières de Wano",
  description:"Le Clan Kouzuki ferme les frontières du Pays de Wano pour protéger ses ponéglyphes et l'Arme Ancestrale Pluton. D'immenses murailles sont érigées, inondant lentement le pays.",
  characters:["Clan Kouzuki"], locations:["Wano"], source:"Chapitre 972, 1055", tags:["Wano","Kouzuki","Pluton"] },

{ id:"pv004", era:"post_vide", type:"politique", year_k:700, years_before:824, approx:false,
  date_label:"An 700 — Il y a 824 ans",
  title:"Fondation d'Enies Lobby & de la CP9",
  description:"Enies Lobby est fondée sur un trou laissé par une arme ancestrale pour servir d'île judiciaire au Gouvernement. La CP9 y est stationnée pour les 800 années suivantes.",
  characters:[], locations:["Enies Lobby"], source:"Chapitre 426", tags:["Gouvernement","Enies Lobby","CP9"] },

{ id:"pv005", era:"post_vide", type:"politique", year_k:800, years_before:724, approx:true,
  date_label:"An ~800 — Il y a ~724 ans",
  title:"Construction de Tequila Wolf",
  description:"Sur ordre des Dragons Célestes, par le travail forcé d'esclaves, un pont colossal commence à être construit à East Blue. Sa construction durera sept siècles.",
  characters:[], locations:["Tequila Wolf","East Blue"], source:"Chapitre 593", tags:["esclavage","Tequila Wolf"] },

{ id:"pv006", era:"post_vide", type:"mystere", year_k:1324, years_before:200, approx:false,
  date_label:"An 1324 — Il y a 200 ans",
  title:"Attaque du Géant de Fer sur Mary Geoise",
  description:"Le Géant de Fer, fabriqué il y a 900 ans, attaque soudainement Mary Geoise, mais tombe en panne avant de causer des dégâts. Le Gouvernement le cache pour étudier sa source d'énergie mystérieuse.",
  characters:[], locations:["Mary Geoise"], source:"Chapitre 1067", tags:["Géant de Fer","mystère","Mary Geoise"] },

{ id:"pv007", era:"post_vide", type:"politique", year_k:1324, years_before:200, approx:false,
  date_label:"An 1324 — Il y a 200 ans",
  title:"Reverie de 1324 — Les Hommes-Poissons rejoignent le Gouvernement",
  description:"Le Royaume de Ryuuguu participe à la Reverie de 1324 pour signer un traité de paix. Les Hommes-Poissons sont légalement traités comme des êtres normaux, mais la discrimination reste.",
  characters:["Neptune"], locations:["Mary Geoise","Île des Hommes-Poissons"], source:"Chapitre 620", tags:["Hommes-Poissons","Gouvernement","Reverie"] },

// ── ÈRE DES GÉANTS / PRÉ-ROCKS ──────────────────────────
{ id:"g001", era:"rocks", type:"ere", year_k:1000, years_before:524, approx:true,
  date_label:"An ~1000 — Il y a ~524 ans",
  title:"La Terreur d'Oars le Pays-Puleur",
  description:"Le géant ancien Oars terrorise le monde entier comme le 'Pays-Puleur', dit avoir fondé un pays de brigands en pillant des îles entières. Certains le croient être le Diable incarné.",
  characters:["Oars"], locations:[], source:"Chapitre 456", tags:["Oars","géants"] },

{ id:"g002", era:"rocks", type:"mort", year_k:1000, years_before:524, approx:true,
  date_label:"An ~1000 — Il y a ~524 ans",
  title:"Mort d'Oars dans le Pays des Glaces",
  description:"Oars se perd dans le Pays des Glaces et succombe aux engelures, mettant fin à son règne de terreur.",
  characters:["Oars"], locations:["Pays des Glaces"], source:"Chapitre 477", tags:["Oars","mort"] },

{ id:"g003", era:"rocks", type:"naissance", year_k:1434, years_before:90, approx:false,
  date_label:"An 1434 — Il y a 90 ans (4 avril)",
  title:"Naissance de Brook",
  description:"Brook naît dans West Blue. Il deviendra chevalier d'un royaume avant de devenir pirate, et obtiendra le Yomi Yomi no Mi — le Fruit de la Résurrection.",
  characters:["Brook"], locations:["West Blue"], source:"SBS Vol. 51", tags:["Brook","Chapeau de Paille"] },

{ id:"g004", era:"rocks", type:"naissance", year_k:1446, years_before:78, approx:false,
  date_label:"An 1446 — Il y a 78 ans (14 mai)",
  title:"Naissance de Silvers Rayleigh",
  description:"Silvers Rayleigh naît. Il deviendra le premier officier du capitaine Gol D. Roger, surnommé 'le Roi des Ténèbres'.",
  characters:["Rayleigh"], locations:[], source:"SBS Vol. 82", tags:["Rayleigh","Pirates de Roger"] },

{ id:"g005", era:"rocks", type:"naissance", year_k:1447, years_before:77, approx:false,
  date_label:"An 1447 — Il y a 77 ans (31 décembre)",
  title:"Naissance de Gol D. Roger",
  description:"Gol D. Roger naît. Il deviendra le seul Roi des Pirates à avoir conquis la Grand Line, trouvé Laugh Tale et l'One Piece.",
  characters:["Gol D. Roger"], locations:[], source:"SBS Vol. 82", tags:["Roger","Roi des Pirates"] },

{ id:"g006", era:"rocks", type:"naissance", year_k:1446, years_before:78, approx:false,
  date_label:"An 1446 — Il y a 78 ans (2 mai)",
  title:"Naissance de Monkey D. Garp",
  description:"Monkey D. Garp naît. Il deviendra l'un des plus grands héros de la Marine, surnommé 'Garp le Poing'.",
  characters:["Monkey D. Garp"], locations:[], source:"SBS Vol. 82", tags:["Garp","Marine"] },

{ id:"g007", era:"rocks", type:"naissance", year_k:1450, years_before:74, approx:false,
  date_label:"An 1450 — Il y a 74 ans (6 avril)",
  title:"Naissance d'Edward Newgate",
  description:"Edward Newgate naît sur l'île de Sphinx. Orphelin, il cherchera toujours une famille. Il deviendra le plus puissant des Quatre Empereurs : Barbe-Blanche.",
  characters:["Barbe-Blanche","Edward Newgate"], locations:["Sphinx"], source:"Chapitre 577", tags:["Barbe-Blanche","Empereurs"] },

{ id:"g008", era:"rocks", type:"naissance", year_k:1456, years_before:68, approx:false,
  date_label:"An 1456 — Il y a 68 ans (15 février)",
  title:"Naissance de Charlotte Linlin",
  description:"Charlotte Linlin naît. Sa taille et ses comportements erratiques conduiront ses parents à l'abandonner à Elbaf à l'âge de 6 ans. Elle deviendra l'Impératrice Big Mom.",
  characters:["Big Mom","Charlotte Linlin"], locations:[], source:"SBS Vol. 85", tags:["Big Mom","Empereurs"] },

{ id:"g009", era:"rocks", type:"politique", year_k:1461, years_before:63, approx:false,
  date_label:"An 1461 — Il y a 63 ans (février)",
  title:"Abandon de Linlin à Elbaf",
  description:"À 6 ans, Charlotte Linlin est abandonnée à Elbaf chez Mère Caramel. Lors du jeûne du solstice, sa fringale détruit le village et tue le géant Jorul.",
  characters:["Big Mom","Mère Caramel","Jorul"], locations:["Elbaf"], source:"Chapitre 866", tags:["Big Mom","Elbaf","géants"] },

{ id:"g010", era:"rocks", type:"ere", year_k:1462, years_before:62, approx:false,
  date_label:"An 1462 — Il y a 62 ans",
  title:"Naissance des Pirates de Big Mom",
  description:"Lors de son 6ème anniversaire, Linlin dévore Mère Caramel et ses amis, absorbant son Soru Soru no Mi par inadvertance. Le jeune pirate Streusen rencontre Linlin perdue et ils s'associent : naissance des Pirates de Big Mom.",
  characters:["Big Mom","Streusen","Mère Caramel"], locations:["Whole Cake Island"], source:"Chapitre 867", tags:["Big Mom","Empereurs","Pirates de Big Mom"] },

{ id:"g011", era:"rocks", type:"naissance", year_k:1465, years_before:59, approx:false,
  date_label:"An 1465 — Il y a 59 ans (2 janvier)",
  title:"Naissance de Kouzuki Oden",
  description:"Kouzuki Oden naît comme héritier du Shogun Sukiyaki de Wano. Avant même ses 1 an, il projette sa nourrice au sol. Son destin sera intimement lié à Roger et au Secret du Monde.",
  characters:["Oden"], locations:["Wano"], source:"Vivre Card", tags:["Oden","Wano","Kouzuki"] },

{ id:"g012", era:"rocks", type:"naissance", year_k:1465, years_before:59, approx:false,
  date_label:"An 1465 — Il y a 59 ans (1er mai)",
  title:"Naissance de Kaidou",
  description:"Kaidou naît dans le Royaume de Vodka. Enfant soldat, il sera à 13 ans vendu au Gouvernement Mondial avant de rejoindre les Pirates de Rocks.",
  characters:["Kaidou"], locations:["Royaume de Vodka"], source:"Vivre Card", tags:["Kaidou","Empereurs"] },

{ id:"g013", era:"rocks", type:"naissance", year_k:1478, years_before:46, approx:false,
  date_label:"An 1478 — Il y a 46 ans (2 avril)",
  title:"Naissance de Jinbe",
  description:"Jinbe naît. Il deviendra Capitaine des Hommes-Poissons des Pirates de Barbe-Blanche, puis Chevalier de la Mer, et finalement membre de l'Équipage du Chapeau de Paille.",
  characters:["Jinbe"], locations:[], source:"SBS Vol. 58", tags:["Jinbe","Chapeau de Paille","Hommes-Poissons"] },

{ id:"g014", era:"rocks", type:"naissance", year_k:1481, years_before:43, approx:false,
  date_label:"An 1481 — Il y a 43 ans (9 mars)",
  title:"Naissance de Dracule Mihawk",
  description:"Dracule Mihawk naît. Il deviendra le plus grand épéiste du monde, l'un des Sept Grands Corsaires, et le rival légendaire de Shanks.",
  characters:["Mihawk"], locations:[], source:"SBS Vol. 58", tags:["Mihawk","Corsaires","épéiste"] },

{ id:"g015", era:"rocks", type:"naissance", year_k:1483, years_before:41, approx:false,
  date_label:"An 1483 — Il y a 41 ans (23 octobre)",
  title:"Naissance de Donquixote Doflamingo",
  description:"Donquixote Doflamingo naît Dragon Céleste, fils de Donquixote Homing. Son enfance sera marquée par la trahison de son père qui renonce à son statut de Dragon Céleste.",
  characters:["Doflamingo"], locations:["Mary Geoise"], source:"SBS Vol. 58", tags:["Doflamingo","Dragons Célestes","Dressrosa"] },

// ── ÈRE DES ROCKS ────────────────────────────────────────
{ id:"r001", era:"rocks", type:"ere", year_k:1480, years_before:44, approx:true,
  date_label:"An ~1480 — Il y a ~44 ans",
  title:"L'Ère des Rocks — Règne de Xebec",
  description:"Rocks D. Xebec et son équipage de monstres (Barbe-Blanche, Big Mom, Kaidou, Shiki...) terrorisent le monde depuis Hachinosu. C'est l'Ère des Rocks, la plus sombre de l'histoire récente.",
  characters:["Rocks D. Xebec","Barbe-Blanche","Big Mom","Kaidou","Shiki"], locations:["Hachinosu"], source:"Chapitre 907", tags:["Rocks","Empereurs","ère"] },

{ id:"r002", era:"rocks", type:"naissance", year_k:1484, years_before:40, approx:false,
  date_label:"An 1484 — Il y a 40 ans (3 août)",
  title:"Naissance de Marshall D. Teach",
  description:"Marshall D. Teach (Barbe-Noire) naît. Singularité de la nature, il est le seul homme à ne jamais dormir de sa vie. Il sera l'un des plus grands criminels de l'histoire.",
  characters:["Barbe-Noire","Marshall D. Teach"], locations:[], source:"SBS Vol. 58", tags:["Barbe-Noire","Empereurs"] },

{ id:"r003", era:"rocks", type:"naissance", year_k:1485, years_before:39, approx:false,
  date_label:"An 1485 — Il y a 39 ans (9 mars)",
  title:"Naissance de Shanks",
  description:"Shanks naît Dragon Céleste de la famille Fegarland — un fait longtemps ignoré. Il sera trouvé enfant dans un coffre lors de l'Incident de God Valley par Roger, qui l'élèvera comme son fils.",
  characters:["Shanks"], locations:["God Valley"], source:"SBS Vol. 4, Film RED", tags:["Shanks","Empereurs","Roger"] },

{ id:"r004", era:"rocks", type:"naissance", year_k:1485, years_before:39, approx:false,
  date_label:"An 1485 — Il y a 39 ans (8 août)",
  title:"Naissance de Buggy",
  description:"Buggy naît. Il deviendra marin apprenti sur le navire de Roger, puis pirate et finalement l'un des Sept Grands Corsaires.",
  characters:["Buggy"], locations:[], source:"SBS Vol. 84", tags:["Buggy","Pirates de Roger","Corsaires"] },

{ id:"r005", era:"rocks", type:"guerre", year_k:1486, years_before:38, approx:false,
  date_label:"An 1486 — Il y a 38 ans",
  title:"L'Incident de God Valley",
  description:"Les Dragons Célestes organisent leur Tournoi du Génocide sur God Valley. Les Pirates de Rocks envahissent l'île pour s'emparer d'un trésor volé. Garp et Roger s'allient pour les combattre. Rocks D. Xebec meurt, l'île de God Valley disparaît de la carte. Big Mom récupère le Uo Uo no Mi et le donne à Kaidou. Shanks est trouvé dans un coffre par Roger.",
  characters:["Rocks D. Xebec","Garp","Roger","Big Mom","Kaidou","Shanks"], locations:["God Valley"], source:"Chapitre 957, 999", tags:["God Valley","Rocks","Garp","Roger","Big Mom","Kaidou"] },

{ id:"r006", era:"rocks", type:"ere", year_k:1486, years_before:38, approx:false,
  date_label:"An 1486 — Il y a 38 ans",
  title:"Fin de l'Ère des Rocks, Début de l'Ère de Roger",
  description:"La défaite des Pirates de Rocks marque la fin de leur ère. Garp obtient tout le crédit, devenant le 'Héros de la Marine'. Roger s'impose comme la force dominante des mers.",
  characters:["Garp","Roger"], locations:[], source:"Chapitre 957, One Piece Magazine", tags:["Rocks","Roger","Marine","Garp"] },

// ── ÈRE DE ROGER ─────────────────────────────────────────
{ id:"ro001", era:"roger", type:"naissance", year_k:1488, years_before:36, approx:false,
  date_label:"An 1488 — Il y a 36 ans (8 mars)",
  title:"Naissance de Cutty Flam (Franky)",
  description:"Cutty Flam naît. Il sera plus tard abandonné par ses parents pirates à Water 7, recueilli par Tom, et deviendra le cyborg Franky, charpentier de l'Équipage du Chapeau de Paille.",
  characters:["Franky","Cutty Flam"], locations:["West Blue"], source:"Chapitre 353", tags:["Franky","Chapeau de Paille"] },

{ id:"ro002", era:"roger", type:"naissance", year_k:1494, years_before:30, approx:false,
  date_label:"An 1494 — Il y a 30 ans (6 février)",
  title:"Naissance de Nico Robin",
  description:"Nico Robin naît sur Ohara, fille de l'archéologue Nico Olvia. Elle sera la seule survivante de la destruction d'Ohara et deviendra l'archéologue de l'Équipage du Chapeau de Paille.",
  characters:["Nico Robin","Nico Olvia"], locations:["Ohara"], source:"Chapitre 218", tags:["Robin","Chapeau de Paille","Ohara"] },

{ id:"ro003", era:"roger", type:"politique", year_k:1496, years_before:28, approx:false,
  date_label:"An 1496 — Il y a 28 ans",
  title:"Roger apprend sa maladie terminale",
  description:"Gol D. Roger apprend qu'il est atteint d'une maladie incurable. Il décide de tenter une dernière circumnavigation du monde pour réaliser son rêve. Il rencontre à Twin Cape le Dr Crocus, qui stabilise sa maladie.",
  characters:["Roger","Crocus","Rayleigh"], locations:["Grand Line","Twin Cape"], source:"Chapitre 506", tags:["Roger","Roi des Pirates"] },

{ id:"ro004", era:"roger", type:"naissance", year_k:1496, years_before:28, approx:false,
  date_label:"An 1496 — Il y a 28 ans (7 octobre)",
  title:"Naissance de Kouzuki Momonosuke",
  description:"Kouzuki Momonosuke naît à bord du Moby Dick, fils d'Oden et Toki. Il sera plus tard le seul humain capable de communiquer avec Zunisha.",
  characters:["Momonosuke","Oden","Toki"], locations:["Moby Dick"], source:"Chapitre 701", tags:["Momonosuke","Wano","Kouzuki"] },

{ id:"ro005", era:"roger", type:"politique", year_k:1496, years_before:28, approx:false,
  date_label:"An 1496 — Il y a 28 ans",
  title:"Orochi usurpe le Trône de Wano",
  description:"Le Shogun Sukiyaki est kidnappé et emprisonné par Orochi. Grâce à Higurashi et son Mane Mane no Mi, Orochi se fait passer pour un shogun régent en attendant le retour d'Oden.",
  characters:["Orochi","Sukiyaki","Higurashi"], locations:["Wano"], source:"Chapitre 965", tags:["Orochi","Wano","usurpation"] },

{ id:"ro006", era:"roger", type:"guerre", year_k:1497, years_before:27, approx:false,
  date_label:"An 1497 — Il y a 27 ans",
  title:"Bataille d'Edd War",
  description:"Les Pirates de Roger affrontent la flotte de Shiki le Lion d'Or dans la mer d'Edd War. Une tempête soudaine détruit la flotte de Shiki, qui se retrouve avec son gouvernail planté dans le crâne. Roger s'en échappe miraculeusement.",
  characters:["Roger","Shiki","Rayleigh","Buggy","Shanks"], locations:["Edd War"], source:"Chapitre 0", tags:["Roger","Shiki","Edd War"] },

{ id:"ro007", era:"roger", type:"aventure", year_k:1499, years_before:25, approx:false,
  date_label:"An 1499 — Il y a 25 ans",
  title:"Roger atteint Laugh Tale",
  description:"Les Pirates de Roger deviennent le premier équipage en 800 ans à atteindre l'île finale : Laugh Tale. Ils y découvrent l'One Piece et apprennent la vraie histoire du monde. Roger rit.",
  characters:["Roger","Rayleigh","Oden","Buggy","Shanks"], locations:["Laugh Tale","Grand Line"], source:"Chapitre 967", tags:["Laugh Tale","One Piece","Roger"] },

{ id:"ro008", era:"roger", type:"politique", year_k:1500, years_before:24, approx:false,
  date_label:"An 1500 — Il y a 24 ans",
  title:"Dissolution des Pirates de Roger",
  description:"Roger dissout son équipage. Il est capturé par la Marine et demande à être exécuté à Loguetown, espérant que sa mort déclenchera la Grande Ère de la Piraterie.",
  characters:["Roger","Rayleigh"], locations:["Grand Line"], source:"Chapitre 1, 506", tags:["Roger","fin d'équipage"] },

{ id:"ro009", era:"roger", type:"mort", year_k:1500, years_before:24, approx:false,
  date_label:"An 1500 — Il y a 24 ans",
  title:"Exécution de Gol D. Roger à Loguetown",
  description:"Gol D. Roger est exécuté sur l'échafaud de Loguetown, la Cité du Commencement et de la Fin. Ses derniers mots déclenchent la Grande Ère de la Piraterie : 'Vous voulez mon trésor ? Je vous le laisse ! Cherchez-le ! J'ai tout mis dans un seul endroit !'",
  characters:["Roger"], locations:["Loguetown"], source:"Chapitre 1", tags:["Roger","exécution","Grande Ère de la Piraterie"] },

{ id:"ro010", era:"roger", type:"ere", year_k:1500, years_before:24, approx:false,
  date_label:"An 1500 — Il y a 24 ans",
  title:"Début de la Grande Ère de la Piraterie",
  description:"Les derniers mots de Roger lancent des millions de personnes sur les mers. La Grande Ère de la Piraterie commence. D'innombrables pirates partent en quête de l'One Piece.",
  characters:["Roger"], locations:[], source:"Chapitre 1", tags:["Grande Ère de la Piraterie","One Piece"] },

// ── AUBE DES PIRATES (PRÉ-HISTOIRE) ─────────────────────
{ id:"ph001", era:"pre_histoire", type:"guerre", year_k:1502, years_before:22, approx:true,
  date_label:"An 1502 — Il y a ~22 ans",
  title:"Destruction d'Ohara — Buster Call",
  description:"Le Gouvernement Mondial lance un Buster Call sur l'île d'Ohara pour effacer les recherches des archéologues sur le Siècle Oublié. La bibliothèque est détruite. Seule une enfant de 8 ans survit : Nico Robin.",
  characters:["Robin","Saul","Aokiji","Spandine"], locations:["Ohara"], source:"Chapitre 391-397", tags:["Ohara","Robin","Buster Call","Gouvernement"] },

{ id:"ph002", era:"pre_histoire", type:"naissance", year_k:1502, years_before:22, approx:false,
  date_label:"An 1502 — Il y a 22 ans (5 mai)",
  title:"Naissance de Monkey D. Luffy",
  description:"Monkey D. Luffy naît, fils de Dragon le Révolutionnaire et petit-fils de Garp. Sa mère est inconnue. Il grandira à Foosha sous la garde de Curly Dadan et avec Ace et Sabo.",
  characters:["Luffy","Garp","Dragon"], locations:["Foosha"], source:"SBS, Chapitre 1", tags:["Luffy","Chapeau de Paille"] },

{ id:"ph003", era:"pre_histoire", type:"naissance", year_k:1502, years_before:22, approx:false,
  date_label:"An 1502 — Il y a 22 ans",
  title:"Naissance de Portgas D. Ace",
  description:"Portgas D. Ace naît, fils de Gol D. Roger et de Portgas D. Rouge, qui attend 20 mois avant d'accoucher pour protéger son fils. Rouge meurt à la naissance d'Ace.",
  characters:["Ace","Roger","Portgas D. Rouge"], locations:[], source:"Chapitre 550", tags:["Ace","Roger","Blanc-Barbe"] },

{ id:"ph004", era:"pre_histoire", type:"naissance", year_k:1501, years_before:23, approx:false,
  date_label:"An 1501 — Il y a 23 ans (11 novembre)",
  title:"Naissance de Roronoa Zoro",
  description:"Roronoa Zoro naît. Il rêve de devenir le plus grand épéiste du monde pour honorer la promesse faite à Kuina. Il deviendra le Coq de l'Équipage du Chapeau de Paille.",
  characters:["Zoro"], locations:[], source:"SBS", tags:["Zoro","Chapeau de Paille","épéiste"] },

{ id:"ph005", era:"pre_histoire", type:"naissance", year_k:1503, years_before:21, approx:false,
  date_label:"An 1503 — Il y a 21 ans (3 mars)",
  title:"Naissance de Nami",
  description:"Nami naît. Orpheline recueillie par Bell-Mère, elle grandira à Cocoyasi. Sa passion pour les cartes et la navigation fera d'elle la navigatrice du Chapeau de Paille.",
  characters:["Nami","Bell-Mère"], locations:["Cocoyasi"], source:"SBS", tags:["Nami","Chapeau de Paille"] },

{ id:"ph006", era:"pre_histoire", type:"naissance", year_k:1503, years_before:21, approx:false,
  date_label:"An 1503 — Il y a 21 ans (2 mars)",
  title:"Naissance de Sanji",
  description:"Sanji naît au sein de la famille royale Vinsmoke du Royaume de Germa. Il sera rejeté par son père et rejoindra les mers comme cuisinier, devenant le 'Jambe du Diable'.",
  characters:["Sanji","Vinsmoke Judge"], locations:["Germa"], source:"SBS", tags:["Sanji","Chapeau de Paille","Vinsmoke"] },

{ id:"ph007", era:"pre_histoire", type:"naissance", year_k:1504, years_before:20, approx:false,
  date_label:"An 1504 — Il y a 20 ans (1er avril)",
  title:"Naissance d'Usopp",
  description:"Usopp naît, fils du tireur d'élite Yasopp des Pirates de Shanks. Il grandira à Syrup Village en attendant le retour de son père.",
  characters:["Usopp","Yasopp"], locations:["Syrup Village"], source:"SBS", tags:["Usopp","Chapeau de Paille"] },

{ id:"ph008", era:"pre_histoire", type:"naissance", year_k:1507, years_before:17, approx:false,
  date_label:"An 1507 — Il y a 17 ans (24 décembre)",
  title:"Naissance de Tony Tony Chopper",
  description:"Tony Tony Chopper naît renne à Drum Island. Rejeté par son troupeau pour son nez bleu, il sera recueilli par le Dr Hiriluk puis par Kureha, devenant le médecin de l'Équipage du Chapeau de Paille.",
  characters:["Chopper","Hiriluk","Kureha"], locations:["Drum Island"], source:"SBS", tags:["Chopper","Chapeau de Paille"] },

{ id:"ph009", era:"pre_histoire", type:"guerre", year_k:1508, years_before:16, approx:false,
  date_label:"An 1508 — Il y a 16 ans",
  title:"Fisher Tiger — L'Attaque de Mary Geoise",
  description:"Fisher Tiger, Homme-Poisson légendaire, escalade seul le Dos-du-Monde et attaque Mary Geoise pour libérer les esclaves. Parmi eux, Boa Hancock. Il fonde l'Alliance Solaire.",
  characters:["Fisher Tiger","Boa Hancock","Jinbe"], locations:["Mary Geoise"], source:"Chapitre 521", tags:["Fisher Tiger","esclavage","Mary Geoise","Hommes-Poissons"] },

{ id:"ph010", era:"pre_histoire", type:"mort", year_k:1508, years_before:16, approx:false,
  date_label:"An 1508 — Il y a ~16 ans",
  title:"Mort de Fisher Tiger",
  description:"Fisher Tiger est mortellement blessé lors d'une embuscade de la Marine. Refusant une transfusion de sang humain par principe, il meurt de ses blessures. Sa mort marque profondément la communauté des Hommes-Poissons.",
  characters:["Fisher Tiger"], locations:[], source:"Chapitre 622", tags:["Fisher Tiger","mort","Hommes-Poissons"] },

{ id:"ph011", era:"pre_histoire", type:"aventure", year_k:1509, years_before:13, approx:true,
  date_label:"An ~1509 — Il y a ~13 ans",
  title:"Luffy mange le Gomu Gomu no Mi",
  description:"Le jeune Luffy mange accidentellement le Gomu Gomu no Mi (le Fruit Nika), fruit de la collection de Shanks. Il devient un homme de caoutchouc mais perd la capacité de nager.",
  characters:["Luffy","Shanks"], locations:["Foosha"], source:"Chapitre 1", tags:["Luffy","Gomu Gomu no Mi","Nika","Fruit du Démon"] },

{ id:"ph012", era:"pre_histoire", type:"guerre", year_k:1509, years_before:13, approx:true,
  date_label:"An ~1509 — Il y a ~13 ans",
  title:"Shanks perd son bras pour Luffy",
  description:"Un énorme crocodile de mer (Neptunien) attaque le bateau où est enfermé Luffy. Shanks le sauve en sacrifiant son bras gauche, lui transmettant son chapeau de paille.",
  characters:["Shanks","Luffy","Higuma"], locations:["Foosha","East Blue"], source:"Chapitre 1", tags:["Shanks","Luffy","Chapeau de Paille"] },

{ id:"ph013", era:"pre_histoire", type:"mort", year_k:1512, years_before:10, approx:true,
  date_label:"An ~1512 — Il y a ~10 ans",
  title:"'Mort' de Sabo",
  description:"Sabo, frère juré de Luffy et Ace, tente de fuir sa famille noble sur un bateau. Son embarcation est détruite par un boulet de canon d'un Dragon Céleste. Il est présumé mort — mais survit, recueilli par Dragon.",
  characters:["Sabo","Dragon","Luffy","Ace"], locations:["Goa"], source:"Chapitre 589, 731", tags:["Sabo","Révolutionnaires","Luffy","Ace"] },

{ id:"ph014", era:"pre_histoire", type:"piraterie", year_k:1518, years_before:6, approx:true,
  date_label:"An ~1518 — Il y a ~6 ans",
  title:"Ace rejoint les Pirates de Barbe-Blanche",
  description:"Portgas D. Ace, après avoir refusé trois fois l'invitation de Barbe-Blanche, finit par rejoindre son équipage. Il devient Commandant de la 2ème Division.",
  characters:["Ace","Barbe-Blanche"], locations:["Grand Line"], source:"Chapitre 158, 551", tags:["Ace","Barbe-Blanche","Pirates de Barbe-Blanche"] },

{ id:"ph015", era:"pre_histoire", type:"politique", year_k:1520, years_before:2, approx:true,
  date_label:"An ~1520 — Il y a ~4 ans",
  title:"Chasse à Ace — Mise à Prix de Barbe-Noire",
  description:"Ace traque Barbe-Noire, qui a tué Thatch pour lui voler son Fruit du Démon. Barbe-Noire le piège et le livre au Gouvernement. Le Gouvernement déclare que l'exécution d'Ace, fils de Roger, sera publique — allumant la mèche de la Guerre de Marineford.",
  characters:["Ace","Barbe-Noire","Barbe-Blanche"], locations:["Impel Down","Marineford"], source:"Chapitre 440, 550", tags:["Ace","Barbe-Noire","Gouvernement","Marineford"] },

// ── HISTOIRE PRINCIPALE ───────────────────────────────────
{ id:"h001", era:"histoire", type:"aventure", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Début de l'histoire",
  title:"Luffy part à l'aventure — Village de Foosha",
  description:"Luffy, 17 ans, quitte enfin le Village de Foosha pour partir en mer. Son seul objectif : devenir Roi des Pirates. Son chapeau de paille, héritage de Shanks, est sa seule possession précieuse.",
  characters:["Luffy","Makino","Woop Slap"], locations:["Foosha","East Blue"], source:"Chapitre 1", tags:["Luffy","début","Chapeau de Paille"] },

{ id:"h002", era:"histoire", type:"aventure", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Arc East Blue",
  title:"Arc Orange Town — Recrutement de Nami",
  description:"Luffy rencontre le clown pirate Buggy puis la voleuse de cartes Nami. Après leur victoire, Nami rejoint provisoirement l'équipage pour voler son trésor.",
  characters:["Luffy","Zoro","Nami","Buggy"], locations:["Orange Town","East Blue"], source:"Chapitres 8-21", tags:["Buggy","Nami","East Blue"] },

{ id:"h003", era:"histoire", type:"aventure", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Arc East Blue",
  title:"Arc Baratie — Recrutement de Sanji",
  description:"L'équipage du Chapeau de Paille affronte Don Krieg et son armada. Sanji, cuisinier du restaurant flottant Baratie, rejoint l'équipage après un combat épique contre le pirate Zeff.",
  characters:["Luffy","Sanji","Zeff","Don Krieg","Mihawk","Zoro"], locations:["Baratie","East Blue"], source:"Chapitres 43-68", tags:["Sanji","Baratie","Mihawk","Zoro"] },

{ id:"h004", era:"histoire", type:"aventure", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Arc East Blue",
  title:"Arc Arlong Park — Libération de Kokoyasi",
  description:"Luffy affronte Arlong et libère le village de Cocoyasi de la tyrannie des Hommes-Poissons. Nami rejoint officiellement l'équipage. La prime de Luffy est fixée à 30 000 000 Berrys.",
  characters:["Luffy","Nami","Arlong","Bell-Mère"], locations:["Arlong Park","Cocoyasi","East Blue"], source:"Chapitres 69-95", tags:["Nami","Arlong","East Blue"] },

{ id:"h005", era:"histoire", type:"aventure", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Arc East Blue",
  title:"Arc Loguetown — La Cité du Commencement et de la Fin",
  description:"L'équipage passe par Loguetown, lieu de naissance et d'exécution de Roger. Luffy monte sur l'échafaud où Roger est mort. L'équipage entre dans la Grand Line.",
  characters:["Luffy","Smoker","Buggy","Dragon"], locations:["Loguetown"], source:"Chapitres 96-100", tags:["Loguetown","Roger","Grand Line","Dragon"] },

{ id:"h006", era:"histoire", type:"aventure", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Grand Line",
  title:"Arc Alabasta — Defeat de Baroque Works",
  description:"L'équipage escorte la princesse Vivi à travers la Grand Line pour arrêter la guerre civile à Alabasta, orchestrée par Sir Crocodile et son organisation Baroque Works.",
  characters:["Luffy","Vivi","Crocodile","Bon Clay"], locations:["Alabasta","Rainbase"], source:"Chapitres 100-217", tags:["Alabasta","Crocodile","Vivi","Baroque Works"] },

{ id:"h007", era:"histoire", type:"aventure", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Grand Line",
  title:"Arc Drum Island — Recrutement de Chopper",
  description:"L'équipage fait escale sur l'Île de Drum pour soigner Nami. Chopper, renne ayant mangé un Fruit du Démon, rejoint l'équipage après la mort du Dr Hiriluk.",
  characters:["Luffy","Chopper","Hiriluk","Kureha","Wapol"], locations:["Drum Island"], source:"Chapitres 130-154", tags:["Chopper","Drum Island","Hiriluk"] },

{ id:"h008", era:"histoire", type:"aventure", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Grand Line (Ciel)",
  title:"Arc Skypiea — Le Ciel au-dessus de la Grand Line",
  description:"L'équipage monte dans les nuages et découvre Skypiea, île céleste sur laquelle Énel s'est autoproclamé Dieu. Ils retrouvent la cloche de Shandora et battent Énel.",
  characters:["Luffy","Énel","Gan Fall","Conis"], locations:["Skypiea","Shandora"], source:"Chapitres 238-303", tags:["Skypiea","Énel","Shandians","île céleste"] },

{ id:"h009", era:"histoire", type:"aventure", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Grand Line",
  title:"Arc Water 7 & Enies Lobby",
  description:"Robin est capturée par la CP9. L'équipage envahit Enies Lobby pour la sauver. Luffy bat Rob Lucci. Les Chapeau de Paille brûlent le drapeau du Gouvernement Mondial. Franky rejoint l'équipage.",
  characters:["Luffy","Robin","Lucci","Franky","Iceburg"], locations:["Water 7","Enies Lobby"], source:"Chapitres 322-430", tags:["Robin","Lucci","Enies Lobby","CP9","Franky"] },

{ id:"h010", era:"histoire", type:"aventure", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Grand Line",
  title:"Arc Thriller Bark — Le Triangle de Florian",
  description:"L'équipage arrive sur Thriller Bark, un navire-île hanté par Gecko Moria. Brook rejoint l'équipage après avoir récupéré son ombre. Zoro sacrifie toutes ses blessures pour Luffy.",
  characters:["Luffy","Zoro","Brook","Moria","Kuma"], locations:["Thriller Bark","Triangle de Florian"], source:"Chapitres 442-489", tags:["Brook","Moria","Thriller Bark","Kuma"] },

{ id:"h011", era:"histoire", type:"aventure", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Grand Line",
  title:"Arc Archipel Sabaody",
  description:"L'équipage arrive à Sabaody, aux portes du Nouveau Monde. Luffy frappe un Dragon Céleste. L'Amiral Kizaru attaque. Kuma sépare l'équipage en envoyant chaque membre dans une région différente du monde.",
  characters:["Luffy","Kuma","Kizaru","Rayleigh"], locations:["Sabaody"], source:"Chapitres 490-513", tags:["Sabaody","Kuma","Kizaru","séparation"] },

{ id:"h012", era:"histoire", type:"guerre", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Marineford",
  title:"Guerre du Meilleur — Bataille de Marineford",
  description:"Barbe-Blanche mène une armada pour libérer Ace d'Impel Down. La Marine et le Gouvernement défendent Marineford. La plus grande bataille de l'Grande Ère de la Piraterie se déroule sous les yeux du monde entier.",
  characters:["Barbe-Blanche","Luffy","Ace","Sengoku","Akainu","Barbe-Noire"], locations:["Marineford"], source:"Chapitres 550-580", tags:["Marineford","Barbe-Blanche","Ace","Guerre"] },

{ id:"h013", era:"histoire", type:"mort", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Marineford",
  title:"Mort de Portgas D. Ace",
  description:"Ace meurt en protégeant Luffy d'un coup de poing de magma de l'Amiral Akainu. Sa mort dévaste Luffy et déclenche une période sombre dans sa vie.",
  characters:["Ace","Luffy","Akainu"], locations:["Marineford"], source:"Chapitre 574", tags:["Ace","mort","Marineford","Akainu"] },

{ id:"h014", era:"histoire", type:"mort", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Marineford",
  title:"Mort de Barbe-Blanche",
  description:"Edward Newgate, Barbe-Blanche, meurt à Marineford après 267 coups de lame, 152 balles de fusil et 46 boulets de canon. Il ne recule jamais. Barbe-Noire lui vole ensuite ses pouvoirs.",
  characters:["Barbe-Blanche","Barbe-Noire","Akainu"], locations:["Marineford"], source:"Chapitre 577", tags:["Barbe-Blanche","mort","Marineford","Barbe-Noire"] },

{ id:"h015", era:"histoire", type:"ere", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522-1524",
  title:"Le Timeskip — 2 ans d'entraînement",
  description:"Après la défaite de Marineford, Luffy retourne à Sabaody avec le message '3D2Y', demandant à l'équipage de s'entraîner pendant 2 ans. Luffy s'entraîne avec Rayleigh sur Rusukaina. Chaque membre se renforce dans une région différente.",
  characters:["Luffy","Rayleigh"], locations:["Rusukaina","Sabaody"], source:"Chapitre 597, 614", tags:["Timeskip","entraînement","Rayleigh"] },

{ id:"h016", era:"histoire", type:"aventure", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Nouveau Monde",
  title:"Arc Punk Hazard — L'Île des Gaz Toxiques",
  description:"L'équipage retrouvé entre dans le Nouveau Monde et arrive sur Punk Hazard. Ils découvrent les expériences illégales de César Clown, s'allient à Trafalgar Law et démantelent l'île.",
  characters:["Luffy","Law","César Clown","Smoker"], locations:["Punk Hazard"], source:"Chapitres 654-699", tags:["Law","César Clown","Punk Hazard","Nouveau Monde"] },

{ id:"h017", era:"histoire", type:"aventure", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Nouveau Monde",
  title:"Arc Dressrosa — Chute de Doflamingo",
  description:"Luffy et Law s'allient pour renverser Doflamingo, seigneur fantoche de Dressrosa. Le Réveil du Fruit du Démon de Doflamingo. Luffy bat Doflamingo avec le Gear Fourth. Formation de l'Alliance Chapeaux de Paille.",
  characters:["Luffy","Law","Doflamingo","Issho","Kyros","Rebecca"], locations:["Dressrosa"], source:"Chapitres 700-801", tags:["Doflamingo","Dressrosa","Law","Gear Fourth"] },

{ id:"h018", era:"histoire", type:"aventure", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Nouveau Monde",
  title:"Arc Whole Cake Island — Mariage de Sanji",
  description:"Sanji est forcé à un mariage arrangé avec Charlotte Pudding. Luffy envahit le domaine de Big Mom pour récupérer Sanji. Révélation de l'histoire des Vinsmoke et du pacte Germa-Big Mom.",
  characters:["Luffy","Sanji","Big Mom","Pudding","Katakuri"], locations:["Whole Cake Island"], source:"Chapitres 825-902", tags:["Sanji","Big Mom","Whole Cake Island","mariage"] },

{ id:"h019", era:"histoire", type:"aventure", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Wano",
  title:"Arc Wano — Chute de Kaidou & Orochi",
  description:"L'alliance Chapeau de Paille/Cœur/Minks/Kouzuki mène la Rébellion de Wano contre Kaidou et Orochi. Luffy développe l'Haki de l'Armement Avancé et le Gear Fifth. Révélation du Fruit Nika.",
  characters:["Luffy","Zoro","Kaidou","Orochi","Yamato","Oden","Momonosuke"], locations:["Wano","Onigashima"], source:"Chapitres 909-1057", tags:["Wano","Kaidou","Orochi","Gear Fifth","Nika"] },

{ id:"h020", era:"histoire", type:"aventure", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Egghead",
  title:"Arc Egghead — L'Île du Futur",
  description:"L'équipage arrive sur Egghead, île du Dr Vegapunk. Les Cinq Doyens envahissent l'île pour supprimer Vegapunk. Révélations majeures sur le Vide du Siècle, le Fruit Nika, et le message final de Vegapunk au monde.",
  characters:["Luffy","Vegapunk","Kizaru","Saturn","Robin","Bonney"], locations:["Egghead"], source:"Chapitres 1058+", tags:["Egghead","Vegapunk","Cinq Doyens","Kizaru","révélations"] }


// ── NAISSANCES MARINES & GOUVERNEMENT ───────────────────
,{ id:"nb001", era:"rocks", type:"naissance", year_k:1445, years_before:79, approx:false,
  date_label:"An 1445 — Il y a 79 ans (9 mai)",
  title:"Naissance de Sengoku",
  description:"Sengoku naît. Il deviendra l'un des plus grands amiraux de la Marine avant de prendre le poste de Maréchal en Chef, surnommé 'Sengoku le Bouddha'.",
  characters:["Sengoku"], locations:[], source:"SBS Vol. 82", tags:["Sengoku","Marine","Maréchal"] },

{ id:"nb002", era:"rocks", type:"naissance", year_k:1445, years_before:79, approx:false,
  date_label:"An 1445 — Il y a 79 ans (9 mai)",
  title:"Naissance de Monkey D. Garp (rappel)",
  description:"Monkey D. Garp naît le même jour que Sengoku. Les deux deviendront les piliers légendaires de la Marine pendant des décennies.",
  characters:["Garp","Sengoku"], locations:[], source:"SBS Vol. 82", tags:["Garp","Marine"] },

{ id:"nb003", era:"rocks", type:"naissance", year_k:1448, years_before:76, approx:false,
  date_label:"An 1448 — Il y a 76 ans (26 mars)",
  title:"Naissance de Tsuru",
  description:"Tsuru naît. Elle deviendra Vice-Amiral de la Marine, surnommée 'Grande Stratège', et sera l'une des rares à avoir résisté à l'Ère des Rocks par sa sagesse.",
  characters:["Tsuru"], locations:[], source:"SBS Vol. 82", tags:["Tsuru","Marine"] },

{ id:"nb004", era:"rocks", type:"naissance", year_k:1466, years_before:58, approx:false,
  date_label:"An 1466 — Il y a 58 ans (23 novembre)",
  title:"Naissance de Borsalino (Kizaru)",
  description:"Borsalino naît. Il deviendra l'Amiral Kizaru, utilisateur du Pika Pika no Mi (Lumière). Réputé pour son comportement nonchalant et sa puissance dévastatrice.",
  characters:["Kizaru","Borsalino"], locations:[], source:"Volume 1000", tags:["Kizaru","Marine","Amiral"] },

{ id:"nb005", era:"rocks", type:"naissance", year_k:1469, years_before:55, approx:false,
  date_label:"An 1469 — Il y a 55 ans (16 août)",
  title:"Naissance de Sakazuki (Akainu)",
  description:"Sakazuki naît. Il deviendra l'Amiral Akainu, utilisateur du Magu Magu no Mi (Magma). Sa philosophie de 'Justice Absolue' est redoutée par tous. Il sera responsable de la mort d'Ace.",
  characters:["Akainu","Sakazuki"], locations:[], source:"Volume 1000", tags:["Akainu","Marine","Amiral"] },

{ id:"nb006", era:"rocks", type:"naissance", year_k:1469, years_before:55, approx:false,
  date_label:"An 1469 — Il y a 55 ans (5 octobre)",
  title:"Naissance de Monkey D. Dragon",
  description:"Monkey D. Dragon naît, fils de Garp et père du futur Luffy. Il deviendra le chef de l'Armée Révolutionnaire, l'homme le plus recherché du monde.",
  characters:["Dragon","Garp"], locations:[], source:"Vivre Card", tags:["Dragon","Révolutionnaires"] },

{ id:"nb007", era:"rocks", type:"naissance", year_k:1470, years_before:54, approx:false,
  date_label:"An 1470 — Il y a 54 ans (10 août)",
  title:"Naissance d'Issho (Fujitora)",
  description:"Issho naît. Il deviendra l'Amiral Fujitora, utilisateur du Zushi Zushi no Mi (Gravité). Il choisit de se rendre aveugle volontairement pour ne plus jamais voir la laideur du monde.",
  characters:["Fujitora","Issho"], locations:[], source:"Vivre Card", tags:["Fujitora","Marine","Amiral"] },

{ id:"nb008", era:"rocks", type:"naissance", year_k:1475, years_before:49, approx:false,
  date_label:"An 1475 — Il y a 49 ans (21 septembre)",
  title:"Naissance de Kuzan (Aokiji)",
  description:"Kuzan naît. Il deviendra l'Amiral Aokiji, utilisateur du Hie Hie no Mi (Glace). Après sa défaite face à Akainu pour le poste de Maréchal en Chef, il quitte la Marine et rejoint les Pirates de Barbe-Noire.",
  characters:["Aokiji","Kuzan"], locations:[], source:"Volume 1000", tags:["Aokiji","Marine","Amiral"] },

{ id:"nb009", era:"rocks", type:"naissance", year_k:1477, years_before:47, approx:false,
  date_label:"An 1477 — Il y a 47 ans (9 février)",
  title:"Naissance de Bartholomew Kuma",
  description:"Bartholomew Kuma naît dans le Royaume de Sorbet, fils d'un survivant de la race des Buccaneers. Esclavagisé tout enfant à Mary Geoise, il deviendra Corsaire puis instrument du Gouvernement — le premier Pacifista.",
  characters:["Kuma"], locations:["Sorbet"], source:"SBS Vol. 58, Chapitre 1095", tags:["Kuma","Buccaneers","Corsaires","Pacifista"] },

{ id:"nb010", era:"rocks", type:"naissance", year_k:1471, years_before:53, approx:false,
  date_label:"An 1471 — Il y a 53 ans (8 janvier)",
  title:"Naissance d'Emporio Ivankov",
  description:"Emporio Ivankov naît. Surnommé 'la Reine des Okama', il est l'un des commandants de l'Armée Révolutionnaire et utilisateur du Horu Horu no Mi.",
  characters:["Ivankov"], locations:[], source:"Vivre Card", tags:["Ivankov","Révolutionnaires"] },

// ── NAISSANCES CORSAIRES & GRANDS PIRATES ───────────────
{ id:"nc001", era:"rocks", type:"naissance", year_k:1460, years_before:64, approx:false,
  date_label:"An 1460 — Il y a 64 ans (8 mai)",
  title:"Naissance de Shakuyaku (Shakky)",
  description:"Shakuyaku naît. Elle sera Impératrice d'Amazon Lily avant de devenir tenancière du bar de Shakky à l'Archipel Sabaody. Ancienne membre supposée des Pirates de Rocks.",
  characters:["Shakky"], locations:[], source:"Vivre Card", tags:["Shakky","Sabaody"] },

{ id:"nc002", era:"rocks", type:"naissance", year_k:1474, years_before:50, approx:false,
  date_label:"An 1474 — Il y a 50 ans (6 septembre)",
  title:"Naissance de Gecko Moria",
  description:"Gecko Moria naît. Il deviendra l'un des Sept Grands Corsaires, capitaine des Pirates du Chapeau de Paille Fantôme et utilisateur du Kage Kage no Mi.",
  characters:["Moria"], locations:[], source:"SBS Vol. 58", tags:["Moria","Corsaires","Thriller Bark"] },

{ id:"nc003", era:"rocks", type:"naissance", year_k:1478, years_before:46, approx:false,
  date_label:"An 1478 — Il y a 46 ans (5 septembre)",
  title:"Naissance de Crocodile",
  description:"Crocodile naît. Ancien Corsaire déchu, il fondera l'organisation criminelle Baroque Works et tentera de s'emparer d'Alabasta. Utilisateur du Suna Suna no Mi.",
  characters:["Crocodile"], locations:[], source:"SBS Vol. 58", tags:["Crocodile","Corsaires","Baroque Works"] },

{ id:"nc004", era:"rocks", type:"naissance", year_k:1483, years_before:41, approx:false,
  date_label:"An 1483 — Il y a 41 ans (3 mai)",
  title:"Naissance d'Arlong",
  description:"Arlong naît dans un environnement toxique du District des Hommes-Poissons, développant une haine profonde des humains. Il deviendra le tyran d'Arlong Park à East Blue.",
  characters:["Arlong"], locations:["District des Hommes-Poissons"], source:"Chapitre 621", tags:["Arlong","Hommes-Poissons","East Blue"] },

{ id:"nc005", era:"rocks", type:"naissance", year_k:1493, years_before:31, approx:false,
  date_label:"An 1493 — Il y a 31 ans (2 septembre)",
  title:"Naissance de Boa Hancock",
  description:"Boa Hancock naît. Enlevée à 12 ans et réduite en esclavage par les Dragons Célestes, elle sera libérée par Fisher Tiger. Elle deviendra l'Impératrice Serpent, l'une des femmes les plus puissantes du monde.",
  characters:["Boa Hancock"], locations:["Amazon Lily"], source:"SBS Vol. 58", tags:["Boa Hancock","Amazon Lily","Corsaires"] },

{ id:"nc006", era:"rocks", type:"naissance", year_k:1493, years_before:31, approx:false,
  date_label:"An 1493 — Il y a 31 ans (9 septembre)",
  title:"Naissance de Basil Hawkins",
  description:"Basil Hawkins naît. Surnommé 'le Magicien des Cartes', il sera l'un des Onze Supernovas et allié de Kaidou à Wano.",
  characters:["Hawkins"], locations:[], source:"SBS Vol. 68", tags:["Hawkins","Supernovas","Wano"] },

{ id:"nc007", era:"pre_histoire", type:"naissance", year_k:1492, years_before:32, approx:false,
  date_label:"An 1492 — Il y a 32 ans (16 juin)",
  title:"Naissance de Pedro",
  description:"Pedro naît. Capitaine des Guardiens de la Forêt des Minks sur Zou, il sacrifiera sa vie à Whole Cake Island pour permettre à l'équipage de fuir.",
  characters:["Pedro"], locations:["Zou"], source:"Chapitre 878", tags:["Pedro","Minks","Zou","sacrifice"] },

{ id:"nc008", era:"pre_histoire", type:"naissance", year_k:1492, years_before:32, approx:false,
  date_label:"An 1492 — Il y a 32 ans (15 août)",
  title:"Naissance de Bentham (Mr. 2 Bon Clay)",
  description:"Bentham, alias Mr. 2 Bon Clay, naît. Ancien agent de Baroque Works, son sacrifice dans Impel Down pour sauver Luffy est l'un des moments les plus émouvants de la série.",
  characters:["Bon Clay","Bentham"], locations:[], source:"Vivre Card", tags:["Bon Clay","Baroque Works","amitié"] },

// ── NAISSANCES SUPERNOVAS & ÉQUIPAGES ACTUELS ────────────
{ id:"ns001", era:"pre_histoire", type:"naissance", year_k:1491, years_before:33, approx:false,
  date_label:"An 1491 — Il y a 33 ans (24 octobre)",
  title:"Naissance de Diez Drake (X Drake)",
  description:"Diez Drake naît, fils du pirate Diez Barrels. Il deviendra Supernova, puis Capitaine des SWORD, une unité secrète de la Marine infiltrée chez les pirates.",
  characters:["X Drake"], locations:[], source:"SBS Vol. 68", tags:["X Drake","Supernovas","SWORD","Marine"] },

{ id:"ns002", era:"pre_histoire", type:"naissance", year_k:1493, years_before:31, approx:false,
  date_label:"An 1493 — Il y a 31 ans (10 mars)",
  title:"Naissance de Scratchmen Apoo",
  description:"Scratchmen Apoo naît. Chef des Pirates de l'Orchestre de la Rue, il sera Supernova et finira allié de Kaidou à Wano.",
  characters:["Apoo"], locations:[], source:"SBS Vol. 68", tags:["Apoo","Supernovas","Wano"] },

{ id:"ns003", era:"pre_histoire", type:"naissance", year_k:1492, years_before:32, approx:false,
  date_label:"An 1492 — Il y a 32 ans (3 mars)",
  title:"Naissance de Capone Bege",
  description:"Capone Bege naît. Chef mafieux devenu pirate, Supernova et utilisateur du Shiro Shiro no Mi. Il s'allie brièvement aux Chapeaux de Paille contre Big Mom.",
  characters:["Bege"], locations:[], source:"SBS Vol. 68", tags:["Bege","Supernovas","mafieux"] },

{ id:"ns004", era:"pre_histoire", type:"naissance", year_k:1492, years_before:32, approx:false,
  date_label:"An 1492 — Il y a 32 ans (4 juillet)",
  title:"Naissance de Caribou",
  description:"Caribou naît. Pirate sadique surnommé 'Caribou l'ensanglanté', il sera présent à Sabaody lors de la réunion des Supernovas.",
  characters:["Caribou"], locations:[], source:"Vivre Card", tags:["Caribou","Supernovas"] },

{ id:"ns005", era:"pre_histoire", type:"naissance", year_k:1477, years_before:47, approx:false,
  date_label:"An 1477 — Il y a 47 ans (1er août)",
  title:"Naissance d'Urouge",
  description:"Urouge naît. Le 'Moine Fou', Supernova, est l'un des rares pirates à avoir survécu une rencontre directe avec Big Mom.",
  characters:["Urouge"], locations:[], source:"SBS Vol. 68", tags:["Urouge","Supernovas"] },

// ── NAISSANCES ÉQUIPAGE CHAPEAUX DE PAILLE ───────────────
{ id:"cs001", era:"pre_histoire", type:"naissance", year_k:1504, years_before:20, approx:false,
  date_label:"An 1504 — Il y a 20 ans (6 mai)",
  title:"Naissance de Nami (précision)",
  description:"Nami naît. Orpheline, elle sera adoptée par la Marine Bell-Mère à Cocoyasi. Son génie pour la navigation et la météorologie en fera la cartographe la plus douée de la Grand Line.",
  characters:["Nami","Bell-Mère"], locations:["Cocoyasi","East Blue"], source:"SBS", tags:["Nami","Chapeau de Paille","cartographie"] },

{ id:"cs002", era:"pre_histoire", type:"naissance", year_k:1500, years_before:24, approx:false,
  date_label:"An 1500 — Il y a 24 ans (9 octobre)",
  title:"Naissance de Sabo",
  description:"Sabo naît dans une famille noble de Goa. Rêvant de liberté, il s'échappera de sa famille pour vivre avec Luffy et Ace. Présumé mort, il est en réalité recueilli par Dragon le Révolutionnaire.",
  characters:["Sabo","Luffy","Ace","Dragon"], locations:["Goa"], source:"Chapitre 589", tags:["Sabo","Révolutionnaires","Luffy","Ace"] },

{ id:"cs003", era:"pre_histoire", type:"naissance", year_k:1496, years_before:28, approx:false,
  date_label:"An 1496 — Il y a 28 ans (3 novembre)",
  title:"Naissance de Yamato",
  description:"Yamato naît, fille de Kaidou au Pays de Wano. Emprisonnée à 8 ans par son père pour s'être liée d'amitié avec Ace, elle admirera profondément Oden et rejoindra les Chapeaux de Paille.",
  characters:["Yamato","Kaidou"], locations:["Wano"], source:"Chapitre 985", tags:["Yamato","Kaidou","Wano","Chapeau de Paille"] },

{ id:"cs004", era:"pre_histoire", type:"naissance", year_k:1494, years_before:30, approx:false,
  date_label:"An 1494 — Il y a 30 ans (2 juin)",
  title:"Naissance de Rob Lucci",
  description:"Rob Lucci naît et grandit comme enfant soldat de la Police Secrète (Cipher Pol). À 13 ans, il exécutera 500 soldats pour protéger l'honneur de la Marine — révélant sa philosophie d'une Justice absolue.",
  characters:["Rob Lucci"], locations:[], source:"SBS Vol. 47", tags:["Lucci","CP9","Gouvernement"] },

// ── PERSONNAGES DE WANO & ARC ODEN ───────────────────────
{ id:"wo001", era:"rocks", type:"naissance", year_k:1468, years_before:56, approx:false,
  date_label:"An 1468 — Il y a 56 ans (29 janvier)",
  title:"Naissance de Kin'emon",
  description:"Kin'emon naît. Samouraï du Pays de Wano, il deviendra le porte-parole des vassaux d'Oden et un fidèle retainer du Clan Kouzuki.",
  characters:["Kin'emon"], locations:["Wano"], source:"Vivre Card", tags:["Kin'emon","Wano","Kouzuki"] },

{ id:"wo002", era:"rocks", type:"naissance", year_k:1482, years_before:42, approx:false,
  date_label:"An 1482 — Il y a 42 ans (9 septembre)",
  title:"Naissance de Kikunojo (Kiku)",
  description:"Kikunojo naît au Pays de Wano, jeune frère d'Izou. Guerrière farouche au corps masculin mais à l'âme féminine, elle sera l'une des retainers d'Oden.",
  characters:["Kikunojo","Kiku","Izou"], locations:["Wano"], source:"Vivre Card", tags:["Kiku","Wano","Kouzuki"] },

{ id:"wo003", era:"rocks", type:"naissance", year_k:1470, years_before:54, approx:false,
  date_label:"An 1470 — Il y a 54 ans (21 juillet)",
  title:"Naissance de Kurozumi Kanjuro",
  description:"Kanjuro naît dans une famille d'acteurs Kurozumi, persécutée et tuée sur scène. Sa haine fera de lui l'espion d'Orochi infiltré dans le groupe d'Oden pendant des décennies.",
  characters:["Kanjuro","Orochi"], locations:["Wano"], source:"Vivre Card", tags:["Kanjuro","Wano","traître","Kurozumi"] },

{ id:"wo004", era:"rocks", type:"naissance", year_k:1470, years_before:54, approx:false,
  date_label:"An 1470 — Il y a 54 ans (23 septembre)",
  title:"Naissance de Kurozumi Orochi",
  description:"Orochi naît dans une famille persécutée car son grand-père avait tenté un coup d'État. Sa haine envers le Clan Kouzuki forgera son désir de domination absolue sur Wano.",
  characters:["Orochi"], locations:["Wano"], source:"Vivre Card", tags:["Orochi","Wano","Kurozumi"] },

{ id:"wo005", era:"rocks", type:"naissance", year_k:1477, years_before:47, approx:false,
  date_label:"An 1477 — Il y a 47 ans (26 octobre)",
  title:"Naissance de Denjiro",
  description:"Denjiro naît. Fidèle retainer d'Oden, il restera à Wano pour se venger d'Orochi en se faisant passer pour Kyoshiro, chef yakuza, pendant 20 ans.",
  characters:["Denjiro","Kyoshiro"], locations:["Wano"], source:"Vivre Card", tags:["Denjiro","Wano","Kouzuki"] },

{ id:"wo006", era:"roger", type:"naissance", year_k:1484, years_before:40, approx:false,
  date_label:"An 1484 — Il y a 40 ans (11 octobre)",
  title:"Naissance d'Inuarashi",
  description:"Inuarashi naît sur Zou. Il deviendra avec Nekomamushi le Duc Doggo, l'un des deux souverains des Minks, les 'Retainers de Jour et de Nuit' d'Oden.",
  characters:["Inuarashi"], locations:["Zou"], source:"Vivre Card", tags:["Inuarashi","Minks","Zou","Kouzuki"] },

{ id:"wo007", era:"roger", type:"naissance", year_k:1484, years_before:40, approx:false,
  date_label:"An 1484 — Il y a 40 ans (22 novembre)",
  title:"Naissance de Nekomamushi",
  description:"Nekomamushi naît sur Zou. Avec Inuarashi, il forment les deux gardiens du Clan Kouzuki. Seigneur de la nuit, il a perdu son bras face à Jack.",
  characters:["Nekomamushi"], locations:["Zou"], source:"Vivre Card", tags:["Nekomamushi","Minks","Zou","Kouzuki"] },

// ── ARC NOLAND (400 ANS) ─────────────────────────────────
{ id:"nl001", era:"post_vide", type:"aventure", year_k:1122, years_before:402, approx:false,
  date_label:"An 1122 — Il y a 402 ans (12 mai)",
  title:"Noland débarque sur Jaya",
  description:"L'explorateur Mont Blanc Noland débarque sur Jaya et interrompt un rituel de sacrifice. Ses connaissances botaniques guérissent la fièvre des arbres qui décimait les Shandiens. Il noue une profonde amitié avec le guerrier Kalgara.",
  characters:["Noland","Kalgara"], locations:["Jaya","Shandora"], source:"Chapitre 288-290", tags:["Noland","Kalgara","Jaya","Shandora"] },

{ id:"nl002", era:"post_vide", type:"politique", year_k:1126, years_before:398, approx:false,
  date_label:"An 1126 — Il y a 398 ans",
  title:"Shandora projetée dans les Cieux",
  description:"Le Knock Up Stream projette la moitié de l'île de Jaya dans les cieux, emportant Shandora avec elle. Les Shandiens débutent 400 ans de guerre contre les habitants de Skypiea pour protéger leur ponéglyphe.",
  characters:["Kalgara"], locations:["Jaya","Skypiea"], source:"Chapitre 292", tags:["Skypiea","Shandora","Sky War"] },

{ id:"nl003", era:"post_vide", type:"mort", year_k:1128, years_before:396, approx:false,
  date_label:"An 1128 — Il y a 396 ans (mai)",
  title:"Exécution de Mont Blanc Noland",
  description:"Noland est ramené à Lvneel et exécuté pour avoir menti sur la Cité d'Or — la moitié de Jaya s'étant envolée dans les cieux. Il mourra sans avoir pu prouver la vérité. Son histoire deviendra le conte de 'Noland le Menteur' dans North Blue.",
  characters:["Noland"], locations:["Lvneel","North Blue"], source:"Chapitre 292", tags:["Noland","exécution","Lvneel"] },

// ── ÉVÉNEMENTS PRÉ-ROGER / ROCKS ─────────────────────────
{ id:"pr001", era:"rocks", type:"guerre", year_k:1483, years_before:41, approx:false,
  date_label:"An 1483 — Il y a 41 ans",
  title:"L'Incident de la Montagne Dieu (Wano)",
  description:"Kin'emon attire accidentellement un gigantesque sanglier sacré dans la Capitale des Fleurs. Oden sauve la situation mais est exilé de la Capitale et commence à explorer Wano. Kin'emon et Denjiro deviennent ses premiers retainers.",
  characters:["Oden","Kin'emon","Denjiro"], locations:["Wano","Capitale des Fleurs"], source:"Chapitre 960", tags:["Oden","Wano","Kin'emon"] },

{ id:"pr002", era:"rocks", type:"politique", year_k:1491, years_before:33, approx:false,
  date_label:"An 1491 — Il y a 33 ans",
  title:"Homing renonce au statut de Dragon Céleste",
  description:"Donquixote Homing décide de renoncer à son statut de Dragon Céleste pour vivre parmi les humains. Sa famille et lui sont exilés dans un pays du Nord. Sa naïveté les condamne à une vie de misère et de violence.",
  characters:["Doflamingo","Homing","Rosinante"], locations:["Mary Geoise","North Blue"], source:"Chapitre 763", tags:["Doflamingo","Dragons Célestes","Homing"] },

{ id:"pr003", era:"rocks", type:"mort", year_k:1493, years_before:31, approx:false,
  date_label:"An 1493 — Il y a 31 ans",
  title:"Doflamingo tue son père & parricide",
  description:"Doflamingo, 10 ans, tue son père Homing d'une balle donnée par Trébol pour tenter de retrouver sa place à Mary Geoise. Les Célestes le rejettent quand même. Il et Rosinante se séparent.",
  characters:["Doflamingo","Homing","Trébol"], locations:["North Blue"], source:"Chapitre 747", tags:["Doflamingo","parricide","Homing"] },

{ id:"pr004", era:"roger", type:"politique", year_k:1494, years_before:30, approx:false,
  date_label:"An 1494 — Il y a 30 ans",
  title:"Garp écrase la tête de Chinjao",
  description:"Monkey D. Garp affronte Chinjao lors d'un combat légendaire. Garp aplatit la tête en forme de foret de Chinjao, lui faisant perdre l'accès à un trésor enfoui sous le Champ de Glace des Joyaux. Chinjao jure de se venger sur la famille de Garp.",
  characters:["Garp","Chinjao"], locations:["Grand Line"], source:"Chapitre 719", tags:["Garp","Chinjao","trésor"] },

{ id:"pr005", era:"roger", type:"aventure", year_k:1494, years_before:30, approx:false,
  date_label:"An 1494 — Il y a 30 ans",
  title:"Barbe-Blanche rencontre Oden à Wano",
  description:"Les Pirates de Barbe-Blanche font naufrage à Wano. Edward Newgate rencontre Kouzuki Oden pour la première fois. Après de multiples refus, Oden rejoint l'équipage de Barbe-Blanche au prix d'une épreuve lors du départ du navire.",
  characters:["Barbe-Blanche","Oden","Toki"], locations:["Wano"], source:"Chapitre 963", tags:["Barbe-Blanche","Oden","Wano"] },

{ id:"pr006", era:"roger", type:"piraterie", year_k:1497, years_before:27, approx:false,
  date_label:"An 1497-1499 — Il y a 27-25 ans",
  title:"Roger conquiert les Quatre Mers",
  description:"Les Pirates de Roger sillonnent le monde entier, récupèrent les quatre Ponéglyphes de Route, déchiffrent l'histoire du Siècle Oublié. Oden, qui comprend les Ponéglyphes, joue un rôle crucial.",
  characters:["Roger","Oden","Rayleigh","Shanks","Buggy"], locations:["Grand Line","Nouveau Monde"], source:"Chapitre 966-968", tags:["Roger","Ponéglyphes","Oden","conquête"] },

{ id:"pr007", era:"roger", type:"mort", year_k:1500, years_before:24, approx:false,
  date_label:"An 1500 — Il y a 24 ans",
  title:"Oden exécuté à Wano",
  description:"De retour à Wano, Oden est trahi par Kanjuro. Après avoir maintenu 9 de ses retainers hors de l'eau bouillante pendant 1 heure pour leur vie, Oden est exécuté par Orochi avec l'aide de Kaidou. Son dernier geste est de propulser ses retainers hors de portée.",
  characters:["Oden","Orochi","Kaidou","Kanjuro","Toki"], locations:["Wano"], source:"Chapitre 972-973", tags:["Oden","exécution","Wano","Orochi"] },

{ id:"pr008", era:"roger", type:"politique", year_k:1500, years_before:24, approx:false,
  date_label:"An 1500 — Il y a 24 ans",
  title:"Toki envoie les retainers d'Oden 20 ans dans le futur",
  description:"Après l'exécution d'Oden, Toki utilise son Toki Toki no Mi pour envoyer Momonosuke, Kin'emon, Kiku, Kanjuro, Raizo et Kikunojo 20 ans dans le futur, au moment de la Rébellion de Wano.",
  characters:["Toki","Momonosuke","Kin'emon","Raizo"], locations:["Wano"], source:"Chapitre 973", tags:["Toki","Wano","voyage dans le temps","Kouzuki"] },

// ── PRÉ-HISTOIRE DÉTAILLÉE ────────────────────────────────
{ id:"phx001", era:"pre_histoire", type:"mort", year_k:1502, years_before:22, approx:false,
  date_label:"An 1502 — Il y a ~22 ans",
  title:"Mort de Portgas D. Rouge",
  description:"Portgas D. Rouge, mère d'Ace et amour de Roger, meurt d'épuisement peu après la naissance d'Ace. Elle avait retardé l'accouchement de 20 mois pour protéger son fils de la traque du Gouvernement.",
  characters:["Portgas D. Rouge","Ace","Garp"], locations:[], source:"Chapitre 550", tags:["Portgas D. Rouge","Ace","Roger","mort"] },

{ id:"phx002", era:"pre_histoire", type:"mort", year_k:1502, years_before:22, approx:false,
  date_label:"An 1502 — Il y a ~22 ans",
  title:"Mort de Bell-Mère",
  description:"Bell-Mère, mère adoptive de Nami et Nojiko, est tuée par Arlong qui exige qu'elle paye une taxe pour ses filles. Pour éviter qu'Arlong leur nuise, elle ne choisit de payer que pour ses filles et non pour elle-même.",
  characters:["Bell-Mère","Nami","Nojiko","Arlong"], locations:["Cocoyasi"], source:"Chapitre 77", tags:["Bell-Mère","mort","Arlong","Nami"] },

{ id:"phx003", era:"pre_histoire", type:"mort", year_k:1514, years_before:8, approx:true,
  date_label:"An ~1514 — Il y a ~8 ans",
  title:"Mort de Kuina",
  description:"Kuina, rivale et amie intime de Zoro à l'école d'escrime, meurt accidentellement en tombant dans un escalier. Son décès pousse Zoro à promettre de devenir le plus grand épéiste du monde pour leurs deux rêves.",
  characters:["Kuina","Zoro","Koshiro"], locations:["Shimotsuki Village","East Blue"], source:"Chapitre 5", tags:["Kuina","Zoro","mort","épéiste"] },

{ id:"phx004", era:"pre_histoire", type:"mort", year_k:1514, years_before:8, approx:true,
  date_label:"An ~1514 — Il y a ~8 ans",
  title:"Mort du Dr Hiriluk",
  description:"Le Dr Hiriluk, médecin charlatan adoré de Chopper, se sacrifie en ingérant une substance explosive après avoir appris que sa maladie est incurable. Il meurt pour prouver que les médecins doivent jamais abandonner.",
  characters:["Hiriluk","Chopper","Kureha"], locations:["Drum Island"], source:"Chapitre 145", tags:["Hiriluk","mort","Chopper","Drum Island"] },

{ id:"phx005", era:"pre_histoire", type:"mort", year_k:1516, years_before:6, approx:true,
  date_label:"An ~1516 — Il y a ~6 ans",
  title:"Mort d'Otohime",
  description:"Otohime, reine de l'Île des Hommes-Poissons et mère de Shirahoshi, est assassinée par un agent de Hody Jones. Elle avait consacré sa vie à obtenir la coexistence entre les Hommes-Poissons et les humains.",
  characters:["Otohime","Hody Jones","Shirahoshi","Neptune"], locations:["Île des Hommes-Poissons"], source:"Chapitre 623", tags:["Otohime","mort","Hommes-Poissons","paix"] },

{ id:"phx006", era:"pre_histoire", type:"piraterie", year_k:1519, years_before:5, approx:true,
  date_label:"An ~1519 — Il y a ~5 ans",
  title:"Portgas D. Ace — Capitaine des Pirates du Poing de Feu",
  description:"Ace fonde les Pirates du Poing de Feu à 17 ans et part en mer. Sa prime initiale est de 550 000 000 Berrys. Sa réputation grandit rapidement dans le Nouveau Monde.",
  characters:["Ace"], locations:[], source:"Chapitre 582", tags:["Ace","Pirates du Poing de Feu"] },

{ id:"phx007", era:"pre_histoire", type:"piraterie", year_k:1519, years_before:5, approx:true,
  date_label:"An ~1519 — Il y a ~5 ans",
  title:"Ace rencontre Luffy à Barb Alley",
  description:"Ace, en route pour sa première aventure, croise brièvement Luffy à Barb Alley. Ce moment renforce la résolution de Luffy de partir en mer et de rejoindre Ace.",
  characters:["Ace","Luffy"], locations:["Barb Alley","Goa"], source:"Chapitre 568", tags:["Ace","Luffy","frères"] },

{ id:"phx008", era:"pre_histoire", type:"piraterie", year_k:1521, years_before:3, approx:true,
  date_label:"An ~1521 — Il y a ~3 ans",
  title:"Shanks rencontre Barbe-Blanche — La Bouteille de Sake",
  description:"Shanks monte sur le navire de Barbe-Blanche pour discuter de Barbe-Noire et demander à Newgate de rappeler Ace. Barbe-Blanche refuse. Cette conversation préfigure la tragédie de Marineford.",
  characters:["Shanks","Barbe-Blanche","Ace"], locations:["Grand Line","Nouveau Monde"], source:"Chapitre 434", tags:["Shanks","Barbe-Blanche","Ace","Barbe-Noire"] },

// ── ÉVÉNEMENTS CLÉS DE L'HISTOIRE PRINCIPALE ────────────
{ id:"hx001", era:"histoire", type:"piraterie", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — East Blue",
  title:"Recrutement de Zoro — La Prison de la Marine",
  description:"Luffy libère Roronoa Zoro d'une prison de la Marine où il était retenu. Zoro rejoint l'équipage à condition que Luffy l'aide à devenir le plus grand épéiste.",
  characters:["Luffy","Zoro"], locations:["East Blue"], source:"Chapitre 3-5", tags:["Zoro","recrutement","Chapeau de Paille","Shells Town"] },

{ id:"hx002", era:"histoire", type:"piraterie", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — East Blue",
  title:"Première Prime de Luffy : 30 000 000 Berrys",
  description:"Après la libération du village de Cocoyasi, Luffy reçoit sa première prime de 30 000 000 Berrys — une somme inédite pour East Blue, ce qui alarme la Marine.",
  characters:["Luffy"], locations:[], source:"Chapitre 96", tags:["Luffy","prime","Marine"] },

{ id:"hx003", era:"histoire", type:"piraterie", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Grand Line",
  title:"Arc Jaya — Luffy gifle Bellamy",
  description:"À Mock Town sur Jaya, Bellamy moque le rêve de Luffy de trouver l'île d'or dans les cieux. Luffy refuse de se battre pour son amour-propre mais frappe Bellamy d'un seul coup après qu'il s'en prend à ses amis.",
  characters:["Luffy","Bellamy","Shanks"], locations:["Jaya","Mock Town"], source:"Chapitres 222-230", tags:["Jaya","Bellamy","rêves"] },

{ id:"hx004", era:"histoire", type:"piraterie", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Grand Line",
  title:"Arc Long Ring Long Land — Foxy Pirates",
  description:"L'équipage affronte Foxy le Renard Argenté dans le Davy Back Fight, une ancienne coutume de combat entre pirates. Luffy récupère Robin et Chopper après les avoir perdus.",
  characters:["Luffy","Foxy"], locations:["Long Ring Long Land"], source:"Chapitres 303-321", tags:["Foxy","Davy Back Fight"] },

{ id:"hx005", era:"histoire", type:"politique", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Enies Lobby",
  title:"Destruction du Drapeau du Gouvernement Mondial",
  description:"Luffy ordonne à Usopp de brûler le drapeau du Gouvernement Mondial devant le monde entier. Cet acte de défi total est la déclaration de guerre des Chapeaux de Paille au Gouvernement.",
  characters:["Luffy","Usopp"], locations:["Enies Lobby"], source:"Chapitre 400", tags:["Gouvernement","Enies Lobby","défi","Chapeau de Paille"] },

{ id:"hx006", era:"histoire", type:"piraterie", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Sabaody",
  title:"Luffy frappe un Dragon Céleste",
  description:"À Sabaody, Luffy frappe Saint Charloss, un Dragon Céleste, pour protéger ses amis. Cet acte déclenche l'intervention d'un Amiral et met l'équipage en danger extrême. Rayleigh intervient.",
  characters:["Luffy","Rayleigh","Saint Charloss"], locations:["Sabaody"], source:"Chapitre 503", tags:["Luffy","Dragons Célestes","Sabaody","Rayleigh"] },

{ id:"hx007", era:"histoire", type:"aventure", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Impel Down",
  title:"Infiltration d'Impel Down",
  description:"Luffy infiltre seul la pire prison du monde pour libérer Ace. Il affronte des niveaux de l'enfer, trouve Bon Clay, Jimbe, libère des prisonniers légendaires dont Crocodile, Barbe-Noire et les futurs membres de l'équipage de Barbe-Noire.",
  characters:["Luffy","Ace","Bon Clay","Jinbe","Crocodile","Barbe-Noire"], locations:["Impel Down"], source:"Chapitres 525-549", tags:["Impel Down","Luffy","Ace","Bon Clay"] },

{ id:"hx008", era:"histoire", type:"mort", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Marineford",
  title:"Barbe-Noire vole les pouvoirs de Barbe-Blanche",
  description:"Après la mort de Barbe-Blanche à Marineford, Barbe-Noire et son équipage couvrent le corps d'un manteau. Un phénomène impossible se produit : Barbe-Noire absorbe les pouvoirs du Gura Gura no Mi, devenant le seul homme à posséder deux Fruits du Démon.",
  characters:["Barbe-Noire","Barbe-Blanche"], locations:["Marineford"], source:"Chapitre 577", tags:["Barbe-Noire","Barbe-Blanche","deux Fruits","mystère"] },

{ id:"hx009", era:"histoire", type:"politique", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Post-Marineford",
  title:"Shanks arrête la Bataille de Marineford",
  description:"Shanks arrive à Marineford avec son équipage et met fin aux combats en déclarant qu'il va protéger toute personne qui risque de mourir. Sa seule présence force tout le monde à s'arrêter.",
  characters:["Shanks"], locations:["Marineford"], source:"Chapitre 579", tags:["Shanks","Marineford","fin de guerre"] },

{ id:"hx010", era:"histoire", type:"piraterie", year_k:1522, years_before:2, approx:false,
  date_label:"An 1522 — Post-Marineford",
  title:"Luffy à Marineford — Le Message 3D2Y",
  description:"Luffy retourne seul à Marineford pour sonner la cloche une fois, un message codé à ses nakama pour leur dire de se retrouver dans 2 ans (3D2Y). Rayleigh comprend et part entraîner Luffy.",
  characters:["Luffy","Rayleigh","Jinbe"], locations:["Marineford","Rusukaina"], source:"Chapitre 596-597", tags:["Luffy","3D2Y","Rayleigh","timeskip"] },

{ id:"hx011", era:"histoire", type:"politique", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Post-Timeskip",
  title:"Retour de Sabo — L'Héritier de la Volonté de Feu",
  description:"Lors du tournoi de Dressrosa, Sabo révèle qu'il est vivant. Il mange l'Ace Ace no Mi (Mera Mera no Mi) au nom d'Ace et devient l'héritier de la 'Volonté de Feu'. Luffy retrouve son frère perdu.",
  characters:["Sabo","Luffy","Ace"], locations:["Dressrosa"], source:"Chapitre 731, 756", tags:["Sabo","Dressrosa","Ace","Révolutionnaires","Mera Mera no Mi"] },

{ id:"hx012", era:"histoire", type:"politique", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Reverie",
  title:"La Reverie — Les Rois du Monde Réunis",
  description:"Les rois du monde se réunissent à Mary Geoise pour la Reverie. Im choisit une cible à 'effacer'. Cobra questionne l'histoire du Siècle Oublié et est tué. Sabo tente de sauver Vivi. Les Révolutionnaires attaquent les Celestial Dragons.",
  characters:["Cobra","Im","Vivi","Sabo","Sengoku"], locations:["Mary Geoise"], source:"Chapitres 905-908", tags:["Reverie","Im","Gouvernement","Cobra","Vivi"] },

{ id:"hx013", era:"histoire", type:"mort", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Wano",
  title:"Mort de Kaidou & Big Mom",
  description:"À Onigashima, Luffy en Gear Fifth bat Kaidou après un combat épique au sommet du Pays de Wano. Simultanément, le Supernova Law et Kid battent Big Mom dans les souterrains. Les deux Empereurs sont vaincus et tombent dans le volcan.",
  characters:["Luffy","Kaidou","Big Mom","Law","Kid"], locations:["Onigashima","Wano"], source:"Chapitre 1049, 1040", tags:["Kaidou","Big Mom","mort","Luffy","Gear Fifth","Wano"] },

{ id:"hx014", era:"histoire", type:"politique", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Post-Wano",
  title:"Le Message de Vegapunk au Monde Entier",
  description:"Depuis Egghead, Vegapunk transmet un message à toutes les personnes connectées à Den Den Mushi dans le monde. Il révèle que le monde va être englouti par les mers montantes, et lie cela à la Technologie des Armes Ancestrales et au Siècle Oublié.",
  characters:["Vegapunk"], locations:["Egghead"], source:"Chapitre 1089+", tags:["Vegapunk","Egghead","révélations","monde","Siècle Oublié"] },

{ id:"hx015", era:"histoire", type:"mort", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Egghead",
  title:"Mort de Vegapunk",
  description:"Le Dr Vegapunk est assassiné par les Cinq Doyens sur Egghead. Son message préenregistré parvient à être diffusé au monde entier malgré les efforts du Gouvernement pour l'empêcher.",
  characters:["Vegapunk","Saturn","Kizaru"], locations:["Egghead"], source:"Chapitre 1117", tags:["Vegapunk","mort","Cinq Doyens","Gouvernement"] },

// ── PRIMES NOTABLES ──────────────────────────────────────
{ id:"bp001", era:"roger", type:"piraterie", year_k:1500, years_before:24, approx:false,
  date_label:"An 1500 — Il y a 24 ans",
  title:"Prime de Gol D. Roger : 5 564 800 000 Berrys",
  description:"Gol D. Roger, Roi des Pirates, détient la plus haute prime jamais émise à l'époque. 5 564 800 000 Berrys — un chiffre que l'histoire retiendra.",
  characters:["Roger"], locations:[], source:"Chapitre 957", tags:["Roger","prime","record"] },

{ id:"bp002", era:"pre_histoire", type:"piraterie", year_k:1500, years_before:24, approx:false,
  date_label:"An ~1500 — Il y a ~24 ans",
  title:"Prime de Barbe-Blanche : 5 046 000 000 Berrys",
  description:"Edward Newgate, 'L'Homme le Plus Fort du Monde', porte une prime de plus de 5 milliards de Berrys — la seconde plus haute de l'histoire.",
  characters:["Barbe-Blanche"], locations:[], source:"Chapitre 957", tags:["Barbe-Blanche","prime"] },

{ id:"bp003", era:"histoire", type:"piraterie", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Post-Wano",
  title:"Prime de Luffy : 3 000 000 000 Berrys — 'Joyboy'",
  description:"Après la défaite de Kaidou, Luffy reçoit une prime de 3 milliards de Berrys. Il est désormais reconnu comme le 5ème Empereur des mers, sous le nom de 'Monkey D. Luffy, le Soleil'.",
  characters:["Luffy"], locations:[], source:"Chapitre 1058", tags:["Luffy","prime","Empereur","Joyboy"] },

{ id:"bp004", era:"histoire", type:"piraterie", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Post-Wano",
  title:"Primes des Chapeaux de Paille post-Wano",
  description:"Après Wano : Zoro (1,11 Md), Sanji (1,032 Md), Jinbe (1,1 Md), Robin (930 M), Usopp (500 M), Franky (394 M), Brook (383 M), Nami (366 M), Chopper (1000 Berrys — inchangé par erreur volontaire).",
  characters:["Zoro","Sanji","Jinbe","Robin","Usopp","Franky","Brook","Nami","Chopper"], locations:[], source:"Chapitre 1058", tags:["primes","Chapeau de Paille","post-Wano"] },

// ── RÉVÉLATIONS MAJEURES ─────────────────────────────────
{ id:"rv001", era:"histoire", type:"mystere", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Wano",
  title:"Révélation du Fruit Gear Fifth — Nika",
  description:"Le Gomu Gomu no Mi se révèle être le Hito Hito no Mi, Modèle : Nika — le Fruit Mythique Zoan le plus recherché du Gouvernement pendant 800 ans. Luffy s'éveille en Sun God Nika. Les Cinq Doyens révèlent que le Gouvernement a menti sur sa nature.",
  characters:["Luffy","Nika"], locations:["Onigashima"], source:"Chapitre 1044", tags:["Nika","Gear Fifth","révélation","Fruit du Démon","Gouvernement"] },

{ id:"rv002", era:"histoire", type:"mystere", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Egghead",
  title:"La Technologie du Grand Royaume",
  description:"Shaka/Vegapunk révèle que la technologie actuelle ne représente que 10% de celle du Grand Royaume d'il y a 900 ans. Le robot Géant de Fer en est la preuve. Le monde actuel est en déclin technologique depuis le Siècle Oublié.",
  characters:["Vegapunk","Shaka","Robin"], locations:["Egghead"], source:"Chapitre 1066", tags:["Egghead","Vegapunk","Grand Royaume","technologie","révélation"] },

{ id:"rv003", era:"histoire", type:"mystere", year_k:1524, years_before:0, approx:false,
  date_label:"An 1524 — Egghead",
  title:"Imu et la Destruction d'Île Lulusia",
  description:"Imu utilise une arme secrète pour effacer l'Île Lulusia de la carte, en réponse à la rébellion de la Révolution. La mer monte pour engloutir l'île. Cette démonstration de puissance révèle la nature terrifiante d'Imu.",
  characters:["Im","Vivi"], locations:["Lulusia","Mary Geoise"], source:"Chapitre 1060", tags:["Im","arme ancestrale","destruction","Gouvernement"] }


// ── NAISSANCES MANQUANTES — Ère Roger ───────────────────
,{ id:"rn001", era:"roger", type:"naissance", year_k:1479, years_before:45, approx:false,
  date_label:"An 1479 — Il y a 45 ans (5 oct.)", month_k:10, day_k:5,
  title:"Naissance de Marco",
  description:"Marco naît. Il deviendra le Commandant de la 1ère Division de Barbe-Blanche, surnommé 'Marco le Phénix' pour son Fruit Mythique Zoan qui lui permet de régénérer ses blessures en flammes bleues.",
  characters:["Marco"], locations:[], source:"Vivre Card", tags:["Marco","Barbe-Blanche","Phénix","commandant"] }

,{ id:"rn002", era:"roger", type:"naissance", year_k:1498, years_before:26, approx:false,
  date_label:"An 1498 — Il y a 26 ans (6 oct.)", month_k:10, day_k:6,
  title:"Naissance de Trafalgar D. Water Law",
  description:"Trafalgar D. Water Law naît à Flevance, dans South Blue. Membre du Clan D., il grandira dans la tragédie de la destruction de sa ville natale et deviendra le Chirurgien de la Mort, utilisateur de l'Ope Ope no Mi.",
  characters:["Law"], locations:["South Blue","Flevance"], source:"SBS Vol. 68", tags:["Law","Clan D.","Flevance","South Blue"] }

,{ id:"rn003", era:"roger", type:"naissance", year_k:1499, years_before:25, approx:false,
  date_label:"An 1499 — Il y a 25 ans", month_k:1, day_k:1,
  title:"Naissance de Kozuki Hiyori",
  description:"Kozuki Hiyori naît à Wano, fille d'Oden et Toki, sœur cadette de Momonosuke. Contrairement à son frère, elle ne voyagera pas dans le futur et vivra les 20 ans d'oppression d'Orochi, se cachant sous l'identité de Komurasaki.",
  characters:["Hiyori","Komurasaki","Oden","Toki"], locations:["Wano"], source:"Chapitre 972", tags:["Hiyori","Wano","Kouzuki","Komurasaki","Oden"] }

// ── NAISSANCES MANQUANTES — Ère Pré-Histoire ─────────────
,{ id:"ph_vivi", era:"pre_histoire", type:"naissance", year_k:1506, years_before:18, approx:false,
  date_label:"An 1506 — Il y a 18 ans (2 fév.)", month_k:2, day_k:2,
  title:"Naissance de Nefertari Vivi",
  description:"Nefertari Vivi naît à Alabasta, princesse et unique héritière du Roi Cobra. Elle grandira avec une profonde conscience de ses responsabilités envers son peuple et ses amis.",
  characters:["Vivi","Cobra"], locations:["Alabasta"], source:"SBS", tags:["Vivi","Alabasta","princesse"] }

,{ id:"ph_koby", era:"pre_histoire", type:"naissance", year_k:1505, years_before:19, approx:false,
  date_label:"An 1505 — Il y a 19 ans (13 mai)", month_k:5, day_k:13,
  title:"Naissance de Koby",
  description:"Koby naît. Timide et peureux, il sera d'abord esclave d'Alvida avant de rencontrer Luffy qui l'encouragera à rejoindre la Marine. Il deviendra l'un des Marines les plus prometteurs de sa génération.",
  characters:["Koby"], locations:[], source:"SBS", tags:["Koby","Marine","Alvida"] }

,{ id:"ph_shira", era:"pre_histoire", type:"naissance", year_k:1508, years_before:16, approx:false,
  date_label:"An 1508 — Il y a 16 ans (4 avr.)", month_k:4, day_k:4,
  title:"Naissance de Shirahoshi",
  description:"Shirahoshi naît à l'Île des Hommes-Poissons, troisième enfant du Roi Neptune. Dès sa naissance, elle se révèle être la réincarnation de l'Arme Ancestrale Poséidon — capable de commander les Rois des Mers.",
  characters:["Shirahoshi","Neptune"], locations:["Île des Hommes-Poissons"], source:"Chapitre 643", tags:["Shirahoshi","Poséidon","Armes Ancestrales","Île des Hommes-Poissons"] }

,{ id:"ph_carrot", era:"pre_histoire", type:"naissance", year_k:1508, years_before:16, approx:true,
  date_label:"An 1508 — Il y a ~16 ans", month_k:5, day_k:24,
  title:"Naissance de Carrot",
  description:"Carrot naît sur Zou parmi les Minks. Guerrière féline de la garde d'Inuarashi, elle rejoindra les Chapeaux de Paille clandestinement lors du voyage vers Whole Cake Island.",
  characters:["Carrot"], locations:["Zou"], source:"Vivre Card", tags:["Carrot","Minks","Zou","Sulong"] }

// ── BACKSTORY DE LAW — Flevance & Corazon ──────────────
,{ id:"law001", era:"pre_histoire", type:"guerre", year_k:1511, years_before:13, approx:true,
  date_label:"An 1511 — Il y a ~13 ans",
  title:"Destruction de Flevance — La Tragédie du Plomb d'Ambre",
  description:"Flevance, ville natale de Law dans South Blue, est détruite par les nations voisines qui craignent la contamination par le Plomb d'Ambre. Le Gouvernement avait caché la toxicité de ce minerai pendant des décennies. Law, 13 ans, est le seul survivant de sa famille. Il rejoint les Pirates de Doflamingo pour se venger du monde entier.",
  characters:["Law","Rosinante"], locations:["Flevance","South Blue"], source:"Chapitre 762-763", tags:["Law","Flevance","Plomb d'Ambre","tragédie","Doflamingo"] }

,{ id:"law002", era:"pre_histoire", type:"mort", year_k:1514, years_before:10, approx:true,
  date_label:"An 1514 — Il y a ~10 ans",
  title:"Sacrifice de Corazon — Rosinante sauve Law",
  description:"Donquixote Rosinante (Corazon), frère de Doflamingo et agent secret de la Marine, sacrifie sa vie pour que Law puisse s'échapper avec l'Ope Ope no Mi et se soigner de sa maladie mortelle. Sa mort brise le cœur de Law et forge sa haine de Doflamingo.",
  characters:["Law","Rosinante","Doflamingo","Sengoku"], locations:["North Blue"], source:"Chapitre 764-767", tags:["Corazon","Law","sacrifice","mort","Doflamingo","Ope Ope no Mi"] }

// ── ROGER — Voyage Final ────────────────────────────────
,{ id:"rog001", era:"roger", type:"aventure", year_k:1498, years_before:26, approx:false,
  date_label:"An 1498 — Il y a 26 ans",
  title:"Roger visite l'Île des Hommes-Poissons",
  description:"Les Pirates de Roger passent par l'Île des Hommes-Poissons lors de leur tour du monde. Roger rencontre le Roi Neptune et lit le Ponéglyphe qui décrit la promesse de Joyboy — et comprend pourquoi Joyboy n'a pu la tenir.",
  characters:["Roger","Oden","Neptune","Rayleigh"], locations:["Île des Hommes-Poissons"], source:"Chapitre 966-967", tags:["Roger","Île des Hommes-Poissons","Ponéglyphe","Joyboy"] }

,{ id:"rog002", era:"roger", type:"aventure", year_k:1499, years_before:25, approx:false,
  date_label:"An 1499 — Il y a 25 ans",
  title:"Roger arrive à Wano pour la première fois",
  description:"Les Pirates de Roger font escale à Wano. Roger rencontre Oden — qui est déjà à bord — et son équipage. C'est la seule fois que Roger visite le pays fermé. Avec Oden pour déchiffrer les Ponéglyphes, l'équipage reconstitue le chemin vers Laugh Tale.",
  characters:["Roger","Oden","Rayleigh","Shanks","Buggy"], locations:["Wano"], source:"Chapitre 966", tags:["Roger","Wano","Ponéglyphes","Oden"] }

// ── ARC ÎLE DES HOMMES-POISSONS (post-TS) ──────────────
,{ id:"hf001", era:"histoire", type:"aventure", year_k:1524, years_before:0.58, approx:false,
  date_label:"An 1524 — Janv. (7 mois apr. TS)", month_k:1,
  title:"Arc Île des Hommes-Poissons — Arrivée de l'Équipage",
  description:"L'équipage du Chapeau de Paille se retrouve enfin réuni après 2 ans de séparation, et plonge vers l'Île des Hommes-Poissons. Premier arc post-timeskip. Luffy croise Jinbe pour la deuxième fois.",
  characters:["Luffy","Jinbe","Shirahoshi","Neptune"], locations:["Île des Hommes-Poissons"], source:"Chapitre 603-640", tags:["Île des Hommes-Poissons","Jinbe","post-timeskip","réunion"] }

,{ id:"hf002", era:"histoire", type:"guerre", year_k:1524, years_before:0.55, approx:false,
  date_label:"An 1524 — Janv.", month_k:1,
  title:"Hody Jones s'empare du Palais de Neptune",
  description:"Hody Jones, Homme-Poisson nourri à la haine des humains, prend en otage la famille royale et tente de prendre le contrôle de l'Île. Il exécute Otohime (en flashback) et révèle sa vision d'un monde sans humains.",
  characters:["Hody Jones","Neptune","Shirahoshi","Luffy"], locations:["Île des Hommes-Poissons"], source:"Chapitres 630-640", tags:["Hody Jones","Neptune","Île des Hommes-Poissons","coup d'état"] }

,{ id:"hf003", era:"histoire", type:"mystere", year_k:1524, years_before:0.52, approx:false,
  date_label:"An 1524 — Janv.", month_k:1,
  title:"Shirahoshi révèle ses pouvoirs — Arme Ancestrale Poséidon",
  description:"Lors du combat contre Hody Jones, Shirahoshi appelle involontairement les Rois des Mers, confirmant qu'elle est bien la réincarnation de l'Arme Ancestrale Poséidon. Luffy détruit l'arche Noah d'un seul coup pour la sauver.",
  characters:["Luffy","Shirahoshi","Hody Jones"], locations:["Île des Hommes-Poissons"], source:"Chapitre 643-645", tags:["Shirahoshi","Poséidon","Armes Ancestrales","Noah","Rois des Mers"] }

,{ id:"hf004", era:"histoire", type:"piraterie", year_k:1524, years_before:0.50, approx:false,
  date_label:"An 1524 — Janv.", month_k:1,
  title:"Luffy déclare la guerre à Big Mom",
  description:"Luffy déclare publiquement la guerre à l'Impératrice Big Mom plutôt que de lui rendre les bonbons de sa protection. Cet acte d'une audace inouïe choque toute l'île et marque le début des hostilités officielles entre les Chapeaux de Paille et les Pirates de Big Mom.",
  characters:["Luffy","Big Mom","Jinbe","Neptune"], locations:["Île des Hommes-Poissons"], source:"Chapitre 651-652", tags:["Luffy","Big Mom","déclaration de guerre","audace"] }

// ── ARC ZOU — Détails ───────────────────────────────────
,{ id:"zou001", era:"histoire", type:"guerre", year_k:1524, years_before:0.25, approx:false,
  date_label:"An 1524 — Sep.", month_k:9,
  title:"Jack Attaque Zou — Gazage des Minks",
  description:"Jack 'la Sécheresse', l'un des All-Stars de Kaidou, attaque Zou pendant 5 jours avec du gaz Caesar pour retrouver Raizo. Malgré leur résistance héroïque, les Minks sont décimés. Inuarashi et Nekomamushi y perdent chacun un membre.",
  characters:["Jack","Inuarashi","Nekomamushi","Caesar Clown"], locations:["Zou"], source:"Chapitre 807-808", tags:["Jack","Zou","Minks","gaz","Kaidou"] }

,{ id:"zou002", era:"histoire", type:"mystere", year_k:1524, years_before:0.23, approx:false,
  date_label:"An 1524 — Oct.", month_k:10,
  title:"Révélation — Raizo est sur Zou",
  description:"Les Chapeaux de Paille découvrent que Raizo, le ninja de Wano recherché par Kaidou, se cache secrètement sous la patte de Zunisha. Les Minks avaient gardé le secret au prix de leur propre supplice.",
  characters:["Luffy","Raizo","Inuarashi","Nekomamushi"], locations:["Zou"], source:"Chapitre 817", tags:["Raizo","Zou","Minks","secret","Wano"] }

,{ id:"zou003", era:"histoire", type:"politique", year_k:1524, years_before:0.22, approx:false,
  date_label:"An 1524 — Oct.", month_k:10,
  title:"Alliance Chapeaux de Paille – Minks – Clan Kouzuki",
  description:"La grande alliance se forme à Zou : les Pirates du Chapeau de Paille, les Pirates de Heart, les Pirates du Kid, les Minks et le Clan Kouzuki s'unissent pour renverser Kaidou et ouvrir les frontières de Wano. La prophétie des 9 ombres d'Oden prend forme.",
  characters:["Luffy","Law","Momonosuke","Inuarashi","Nekomamushi"], locations:["Zou"], source:"Chapitres 818-819", tags:["alliance","Zou","Kouzuki","Minks","Wano","prophétie"] }

,{ id:"zou004", era:"histoire", type:"mystere", year_k:1524, years_before:0.21, approx:false,
  date_label:"An 1524 — Oct.", month_k:10,
  title:"Robin découvre le Road Ponéglyphe de Zou",
  description:"Nico Robin lit le Road Ponéglyphe caché sous la patte de Zunisha — l'un des quatre qui pointent vers Laugh Tale. Cette découverte confirme que la route vers l'île finale du monde est à portée.",
  characters:["Robin","Momonosuke"], locations:["Zou"], source:"Chapitre 820", tags:["Robin","Ponéglyphe","Laugh Tale","Road Ponéglyphe","Zou"] }

,{ id:"zou005", era:"histoire", type:"mystere", year_k:1524, years_before:0.20, approx:false,
  date_label:"An 1524 — Oct.", month_k:10,
  title:"Momonosuke parle à Zunisha",
  description:"Momonosuke entend la voix de Zunisha et transmet son ordre : l'éléphant géant repousse la flotte de Jack d'un seul mouvement de sa trompe, détruisant cent navires. La connexion entre Zunisha et le Clan Kouzuki est confirmée.",
  characters:["Momonosuke","Zunisha","Jack"], locations:["Zou"], source:"Chapitre 821-822", tags:["Momonosuke","Zunisha","Jack","Clan D.","Kouzuki"] }

// ── ARC WANO — Détails supplémentaires ─────────────────
,{ id:"wan001", era:"histoire", type:"mort", year_k:1524, years_before:0.19, approx:false,
  date_label:"An 1524 — Oct.", month_k:10,
  title:"Exécution de Shimotsuki Yasuie",
  description:"Yasuie, ancien Daimyo de Hakumai et grand défenseur d'Oden, est capturé puis exécuté publiquement par Orochi à la Capitale des Fleurs. Il se sacrifie en révélant que les tatouages des retainers sont un canular, protégeant ainsi le vrai plan de la Rébellion. Sa mort soulève Wano.",
  characters:["Yasuie","Orochi","Hiyori"], locations:["Wano","Capitale des Fleurs"], source:"Chapitre 942", tags:["Yasuie","mort","Orochi","sacrifice","Wano"] }

,{ id:"wan002", era:"histoire", type:"mystere", year_k:1524, years_before:0.18, approx:false,
  date_label:"An 1524 — Oct.", month_k:10,
  title:"Hiyori révèle son identité à Zoro",
  description:"Komurasaki révèle à Zoro qu'elle est en réalité Kozuki Hiyori, la fille d'Oden et sœur de Momonosuke. Elle lui remet Enma, le sabre légendaire de son père, en échange du Shusui qu'il rend aux Shandiens de Wano.",
  characters:["Hiyori","Zoro","Oden"], locations:["Wano"], source:"Chapitre 953-955", tags:["Hiyori","Zoro","Enma","Kouzuki","Wano","identité"] }

,{ id:"wan003", era:"histoire", type:"guerre", year_k:1524, years_before:0.17, approx:false,
  date_label:"An 1524 — Nov.", month_k:11,
  title:"Raid d'Onigashima — Début de la Rébellion de Wano",
  description:"L'alliance de mille guerriers prend d'assaut l'île d'Onigashima pendant la fête de Kaidou. Luffy, Zoro, les Chapeaux de Paille et leurs alliés infiltrent le repaire des Pirates des Cent Bêtes. La plus grande bataille de Wano commence.",
  characters:["Luffy","Zoro","Kaidou","Orochi","Yamato","Kin'emon"], locations:["Wano","Onigashima"], source:"Chapitre 975-978", tags:["Onigashima","Rébellion","Wano","raid","alliance"] }

,{ id:"wan004", era:"histoire", type:"guerre", year_k:1524, years_before:0.16, approx:false,
  date_label:"An 1524 — Nov.", month_k:11,
  title:"Luffy vaincu et jeté à la mer par Kaidou",
  description:"Lors de leur premier affrontement, Kaidou bat Luffy d'un seul coup de massue et le jette inconscient à la mer. Emprisonné à Udon, Luffy profite de sa captivité pour maîtriser le Haki de l'Armement Avancé en s'entraînant contre le gardien Hyougoro.",
  characters:["Luffy","Kaidou","Hyougoro"], locations:["Wano","Onigashima"], source:"Chapitre 923, 942", tags:["Luffy","Kaidou","défaite","Haki","Udon","entraînement"] }

,{ id:"wan005", era:"histoire", type:"mystere", year_k:1524, years_before:0.15, approx:false,
  date_label:"An 1524 — Nov.", month_k:11,
  title:"Yamato révèle son identité et s'allie à Luffy",
  description:"Yamato, enfant de Kaidou emprisonné depuis ses 8 ans pour son amitié avec Ace, se révèle être une femme qui s'identifie à Oden. Elle s'allie à Luffy pour libérer Wano et rejoindre les Chapeaux de Paille.",
  characters:["Yamato","Luffy","Ace","Kaidou"], locations:["Onigashima","Wano"], source:"Chapitre 983-985", tags:["Yamato","Luffy","Oden","alliance","identité","Wano"] }

,{ id:"wan006", era:"histoire", type:"mystere", year_k:1524, years_before:0.14, approx:false,
  date_label:"An 1524 — Nov.", month_k:11,
  title:"Robin lit le Road Ponéglyphe d'Onigashima",
  description:"Nico Robin parvient à lire le troisième Road Ponéglyphe, caché dans la salle du trésor de Kaidou sur Onigashima. Il ne manque plus qu'un seul ponéglyphe pour tracer la route vers Laugh Tale.",
  characters:["Robin","Kaidou"], locations:["Onigashima","Wano"], source:"Chapitre 1000", tags:["Robin","Ponéglyphe","Road Ponéglyphe","Laugh Tale","Onigashima"] }

// ── POST-WANO ────────────────────────────────────────────
,{ id:"pw001", era:"histoire", type:"politique", year_k:1524, years_before:0.12, approx:false,
  date_label:"An 1524 — Nov.", month_k:11,
  title:"Momonosuke ouvre les Frontières de Wano",
  description:"Après la victoire sur Kaidou et Orochi, Momonosuke assume son rôle de Shogun et annonce l'ouverture officielle des frontières de Wano au monde extérieur — réalisant après 800 ans le vœu de son père Oden et du Clan Kouzuki.",
  characters:["Momonosuke","Hiyori","Kin'emon","Denjiro"], locations:["Wano"], source:"Chapitre 1057", tags:["Momonosuke","Wano","frontières","Shogun","Kouzuki","histoire"] }

,{ id:"pw002", era:"histoire", type:"piraterie", year_k:1524, years_before:0.11, approx:false,
  date_label:"An 1524 — Nov.", month_k:11,
  title:"Luffy, Kid et Law — Trois Nouveaux Empereurs",
  description:"À la suite de la défaite de Kaidou et Big Mom, le journal mondial annonce que Luffy, Trafalgar Law et Eustass Kid sont désormais reconnus parmi les figures majeures du Nouveau Monde. Leurs primes dépassent toutes les 3 milliards de Berrys.",
  characters:["Luffy","Law","Kid"], locations:["Grand Line"], source:"Chapitre 1057-1058", tags:["Luffy","Law","Kid","Empereurs","prime","post-Wano"] }

// ── ARC EGGHEAD — Détails ────────────────────────────────
,{ id:"egg001", era:"histoire", type:"politique", year_k:1524, years_before:0.09, approx:false,
  date_label:"An 1524 — Jan.", month_k:1,
  title:"Les Cinq Doyens envahissent Egghead",
  description:"Tous les Cinq Doyens débarquent personnellement sur Egghead pour éliminer Vegapunk — une décision sans précédent dans l'histoire du Gouvernement. Leur présence simultanée confirme que les révélations de Vegapunk menacent les fondements mêmes du monde.",
  characters:["Saturn","Kizaru","Vegapunk"], locations:["Egghead"], source:"Chapitre 1088+", tags:["Cinq Doyens","Egghead","Gouvernement","Vegapunk","invasion"] }

,{ id:"egg002", era:"histoire", type:"politique", year_k:1524, years_before:0.08, approx:false,
  date_label:"An 1524 — Jan.", month_k:1,
  title:"Révélation sur le Clan D. — L'Ennemi naturel des Dieux",
  description:"Vegapunk révèle que le Clan D. est l'héritier naturel du Grand Royaume et l'ennemi héréditaire du Gouvernement Mondial depuis le Siècle Oublié. Le 'D' dans les noms est un signe distinctif de ceux qui porteront un jour la Volonté de Joyboy.",
  characters:["Vegapunk","Robin","Luffy","Saturn"], locations:["Egghead"], source:"Chapitre 1066, 1085", tags:["Clan D.","révélation","Siècle Oublié","Grand Royaume","Joyboy","Egghead"] }

,{ id:"egg003", era:"histoire", type:"mystere", year_k:1524, years_before:0.07, approx:false,
  date_label:"An 1524 — Jan.", month_k:1,
  title:"Le Géant de Fer s'éveille",
  description:"Sur Egghead, le robot géant construit il y a 900 ans par le Grand Royaume se réactive, apparemment répondant au son du Gear Fifth de Luffy. Ce réveil millénaire confirme le lien profond entre Luffy/Joyboy et les espoirs du passé.",
  characters:["Luffy","Vegapunk"], locations:["Egghead"], source:"Chapitre 1092", tags:["Géant de Fer","éveil","Gear Fifth","Joyboy","Egghead","mystère"] }

,{ id:"egg004", era:"histoire", type:"politique", year_k:1524, years_before:0.06, approx:false,
  date_label:"An 1524 — Jan.", month_k:1,
  title:"Im révèle sa vraie forme",
  description:"Imu révèle pour la première fois sa véritable forme monstrueuse lors de l'attaque d'Egghead — une silhouette immense et terrifiante, confirmant qu'il n'est pas humain au sens ordinaire du terme. La nature d'Imu et ses pouvoirs restent l'un des mystères les plus profonds du monde.",
  characters:["Im","Saturn"], locations:["Egghead"], source:"Chapitre 1108", tags:["Im","révélation","Egghead","Gouvernement","mystère","vrai visage"] }

  
// ── ENFANCE DE LUFFY, ACE ET SABO — Goa Kingdom ─────────
,{ id:"goa001", era:"pre_histoire", type:"aventure", year_k:1509, years_before:13, approx:true,
  date_label:"An ~1509 — Il y a ~13 ans",
  title:"Luffy, Ace et Sabo — Le Serment des Frères",
  description:"Dans la forêt de Goa, Luffy, Ace et Sabo partagent une coupe de sake et font le serment de frères. C'est l'un des moments les plus importants de l'histoire de Luffy. Ils rêvent tous les trois de partir en mer et de devenir de grands pirates.",
  characters:["Luffy","Ace","Sabo"], locations:["Goa","East Blue"],
  source:"Chapitre 585-586", tags:["Luffy","Ace","Sabo","frères","serment","Goa"] }

,{ id:"goa002", era:"pre_histoire", type:"aventure", year_k:1509, years_before:13, approx:true,
  date_label:"An ~1509 — Il y a ~13 ans",
  title:"Ace et Sabo — Pirates en herbe à Goa",
  description:"Ace et Sabo accumulent en secret un trésor pour s'acheter un bateau et partir en mer. Ils vivent dans la forêt de Goa pour fuir les nobles de Gray Terminal. Leur rencontre avec Luffy bouleverse leurs plans.",
  characters:["Ace","Sabo","Luffy"], locations:["Goa"],
  source:"Chapitre 582-585", tags:["Ace","Sabo","Goa","enfance","trésor","pirates"] }

,{ id:"goa003", era:"pre_histoire", type:"politique", year_k:1510, years_before:12, approx:true,
  date_label:"An ~1510 — Il y a ~12 ans",
  title:"Incendie de Gray Terminal — La Noblesse de Goa",
  description:"Les nobles de Goa ordonnent l'incendie de Gray Terminal, le bidonville à l'entrée de la capitale, pour nettoyer la ville en prévision de la visite d'un Dragon Céleste. Des milliers de pauvres y périssent ou fuient. Sabo tente de s'échapper en bateau mais est canonné par un Dragon Céleste.",
  characters:["Sabo","Luffy","Ace","Dragon"], locations:["Goa"],
  source:"Chapitre 587-590", tags:["Goa","Gray Terminal","Dragon Céleste","incendie","Sabo"] }

,{ id:"goa004", era:"pre_histoire", type:"aventure", year_k:1510, years_before:12, approx:true,
  date_label:"An ~1510 — Il y a ~12 ans",
  title:"Sabo recueilli par Dragon le Révolutionnaire",
  description:"Présumé mort après l'attaque du Dragon Céleste, Sabo est en réalité recueilli inconscient par Monkey D. Dragon. Souffrant d'amnésie, il grandit au sein de l'Armée Révolutionnaire et devient progressivement l'un de ses officiers les plus doués.",
  characters:["Sabo","Dragon"], locations:["Goa"],
  source:"Chapitre 731, 794", tags:["Sabo","Dragon","Révolutionnaires","amnésie","survivant"] }

,{ id:"goa005", era:"pre_histoire", type:"aventure", year_k:1516, years_before:6, approx:true,
  date_label:"An ~1516 — Il y a ~6 ans",
  title:"Ace quitte Foosha — Ses adieux à Luffy",
  description:"Portgas D. Ace, 17 ans, quitte le village de Foosha pour partir en mer. Il dit au revoir à Luffy et lui promet de ne jamais mourir de honte. C'est leur dernière rencontre avant de longues années. Ace fonde ensuite les Pirates du Poing de Feu.",
  characters:["Ace","Luffy","Makino","Dadan"], locations:["Foosha","East Blue"],
  source:"Chapitre 582, Chapitre 0", tags:["Ace","Luffy","adieux","Foosha","départ"] }

// ── EAST BLUE — Détails supplémentaires ─────────────────
,{ id:"eb001", era:"histoire", year_k:1522, years_before:2.40, approx:false,
  date_label:"An 1522 — Fév.", month_k:2, type:"aventure",
  title:"Rencontre avec Koby — Luffy libère le futur Marine",
  description:"Luffy rencontre Koby, esclave de la pirate Alvida depuis 2 ans. En une nuit, Luffy le convainc de suivre son rêve de devenir Marine. Ils s'allient brièvement pour libérer Zoro d'une prison de la Marine. C'est la toute première équipe de Luffy.",
  characters:["Luffy","Koby","Alvida","Zoro","Helmeppo"], locations:["East Blue"],
  source:"Chapitres 1-6", tags:["Koby","Alvida","Luffy","Zoro","débuts","East Blue"] }

,{ id:"eb002", era:"histoire", year_k:1522, years_before:2.30, approx:false,
  date_label:"An 1522 — Mar.", month_k:3, type:"aventure",
  title:"Usopp et le Village de Syrup — Les Pirates Aux Chapeaux de Fourrure",
  description:"L'équipage fait escale au village de Syrup où vit Usopp, fils du tireur d'élite Yasopp. La garçon mythomane cache la vérité à sa mère malade. L'équipage affronte Kuro et ses Pirates aux Chapeaux de Fourrure pour défendre le village. Usopp rejoint l'équipage.",
  characters:["Luffy","Usopp","Nami","Zoro","Kuro"], locations:["Syrup Village","East Blue"],
  source:"Chapitres 22-41", tags:["Usopp","Syrup Village","Kuro","recrutement","East Blue"] }

,{ id:"eb003", era:"histoire", year_k:1522, years_before:2.22, approx:false,
  date_label:"An 1522 — Avr.", month_k:4, type:"aventure",
  title:"Zoro affronte Mihawk — La Promesse à Kuina",
  description:"Au Baratie, Dracule Mihawk, le plus grand épéiste du monde, défie Zoro sur invitation de Krieg. Zoro est vaincu de façon écrasante malgré ses trois sabres. Mihawk, respectant sa détermination, lui laisse la vie. Zoro jure de ne plus jamais perdre — pour Luffy et pour Kuina.",
  characters:["Zoro","Mihawk","Luffy","Sanji"], locations:["Baratie","East Blue"],
  source:"Chapitres 49-51", tags:["Zoro","Mihawk","épéiste","défaite","promesse","Kuina"] }

,{ id:"eb004", era:"histoire", year_k:1522, years_before:2.10, approx:false,
  date_label:"An 1522 — Avr.", month_k:4, type:"guerre",
  title:"Libération de Nami — La Destruction d'Arlong Park",
  description:"Luffy détruit à lui seul le bureau d'Arlong, dans lequel Nami avait accumulé des années de dessins pour racheter son village. En voyant ses cartes détruites, Nami craque et demande à Luffy de l'aide pour la première fois. C'est le moment fondateur de leur amitié.",
  characters:["Luffy","Nami","Arlong","Zoro","Sanji","Usopp"], locations:["Arlong Park","Cocoyasi","East Blue"],
  source:"Chapitres 81-95", tags:["Nami","Arlong","libération","Cocoyasi","larmes","Luffy"] }

,{ id:"eb005", era:"histoire", year_k:1522, years_before:2.0, approx:false,
  date_label:"An 1522 — Avr.", month_k:4, type:"piraterie",
  title:"À Loguetown — Smoker et Dragon s'affrontent",
  description:"À Loguetown, Luffy est capturé par Buggy sur l'échafaud de Roger, à deux doigts d'être exécuté au même endroit que le Roi des Pirates. Un coup de foudre providentiel le sauve. Smoker le pourchasse jusqu'au port où Dragon le révolutionnaire intervient mystérieusement pour lui permettre de s'échapper.",
  characters:["Luffy","Smoker","Dragon","Buggy","Alvida"], locations:["Loguetown","East Blue"],
  source:"Chapitres 96-100", tags:["Loguetown","Smoker","Dragon","Buggy","échafaud","Roger"] }

// ── REVERIE — Détails complets ───────────────────────────
,{ id:"rev001", era:"histoire", year_k:1524, years_before:0.44, approx:false,
  date_label:"An 1524 — Mai", month_k:5, type:"politique",
  title:"Reverie — Arrivée des Rois à Mary Geoise",
  description:"Les rois et représentants de cinquante royaumes se réunissent à Mary Geoise pour la Reverie quadriennale. Vivi et Cobra y représentent Alabasta pour la première fois depuis 8 ans. L'équipage de Neptune — Neptune, Shirahoshi et ses fils — fait sa première apparition publique.",
  characters:["Vivi","Cobra","Neptune","Shirahoshi","Fujitora","Garp"], locations:["Mary Geoise"],
  source:"Chapitres 905-908", tags:["Reverie","Mary Geoise","rois","Vivi","Neptune","politique"] }

,{ id:"rev002", era:"histoire", year_k:1524, years_before:0.43, approx:false,
  date_label:"An 1522 — Mai", month_k:5, type:"politique",
  title:"Reverie — Fujitora demande la dissolution des Corsaires",
  description:"L'Amiral Fujitora demande officiellement devant tous les rois réunis la dissolution des Sept Grands Corsaires, citant leur inefficacité et les dommages causés à Dressrosa. Cette motion marque un tournant dans la politique du Gouvernement Mondial.",
  characters:["Fujitora","Sengoku","Riku"], locations:["Mary Geoise"],
  source:"Chapitre 905", tags:["Fujitora","Corsaires","dissolution","Reverie","Gouvernement"] }

,{ id:"rev003", era:"histoire", year_k:1524, years_before:0.42, approx:false,
  date_label:"An 1524 — Mai", month_k:5, type:"mystere",
  title:"Reverie — Im siège sur le Trône Vide",
  description:"Dans les profondeurs de Pangée, les Cinq Doyens s'inclinent devant une silhouette assise sur le Trône Vide — Im, le véritable souverain du monde. Im tient des photos de Luffy, Barbe-Noire, Vivi et Shirahoshi, désignant une 'lumière à éteindre'.",
  characters:["Im","Cinq Doyens","Vivi"], locations:["Mary Geoise","Pangée"],
  source:"Chapitre 906-908", tags:["Im","Trône Vide","révélation","mystère","Cinq Doyens","lumière à éteindre"] }

,{ id:"rev004", era:"histoire", year_k:1524, years_before:0.41, approx:false,
  date_label:"An 1524 — Mai", month_k:5, type:"mort",
  title:"Reverie — Cobra interroge les Cinq Doyens et est tué",
  description:"Le Roi Cobra d'Alabasta demande aux Cinq Doyens des éclaircissements sur la lettre de Lily et le Siècle Oublié. Il révèle porter le D. dans son nom (Nefertari D. Cobra). Im l'exécute en personne. Sa mort est dissimulée, Sabo étant accusé du meurtre — ce qui déclenche la fureur de l'Armée Révolutionnaire.",
  characters:["Cobra","Im","Sabo","Vivi","Cinq Doyens"], locations:["Mary Geoise","Pangée"],
  source:"Chapitres 1084-1086", tags:["Cobra","mort","Im","Clan D.","Reverie","Sabo accusé","Lily"] }

,{ id:"rev005", era:"histoire", year_k:1524, years_before:0.40, approx:false,
  date_label:"An 1524 — Mai", month_k:5, type:"politique",
  title:"Reverie — Les Révolutionnaires attaquent les Dragons Célestes",
  description:"Sabo mène une attaque des commandants de l'Armée Révolutionnaire (Lindbergh, Karasu, Morley, Belo Betty) directement sur Mary Geoise pour libérer Kuma, maintenu en esclavage comme gardien du Trône Vide. L'attaque est un succès partiel.",
  characters:["Sabo","Dragon","Ivankov","Kuma","Belo Betty","Morley"], locations:["Mary Geoise"],
  source:"Chapitres 905, 1054", tags:["Révolutionnaires","Sabo","Kuma","esclavage","attaque","Dragons Célestes"] }

,{ id:"rev006", era:"histoire", year_k:1524, years_before:0.39, approx:false,
  date_label:"An 1524 — Mai", month_k:5, type:"mystere",
  title:"Disparition de Vivi après la Reverie",
  description:"À l'issue de la Reverie, Vivi disparaît mystérieusement de Mary Geoise. Le monde croit qu'elle a été assassinée par Sabo avec son père. En réalité, elle est vivante et se retrouve à bord du navire du Gouvernement Mondial avec Im — dont elle a peut-être vu le visage.",
  characters:["Vivi","Im","Cobra"], locations:["Mary Geoise"],
  source:"Chapitres 1085, 1090", tags:["Vivi","disparition","Im","mystère","Reverie","après"] }

// ── BACKSTORY ACE — Séquence Barbe-Blanche ───────────────
,{ id:"ace001", era:"pre_histoire", type:"piraterie", year_k:1518, years_before:6, approx:true,
  date_label:"An ~1518 — Il y a ~6 ans",
  title:"Ace défie Barbe-Blanche trois fois",
  description:"Portgas D. Ace, cherchant à prouver sa valeur, défie Barbe-Blanche à trois reprises. À chaque fois, il est vaincu et s'endort d'épuisement avant la fin du combat. Barbe-Blanche finit par le prendre sous son aile, le considérant comme son fils.",
  characters:["Ace","Barbe-Blanche","Marco"], locations:["Grand Line","Moby Dick"],
  source:"Chapitre 552, 568", tags:["Ace","Barbe-Blanche","défi","Marco","famille","Moby Dick"] }

,{ id:"ace002", era:"pre_histoire", type:"piraterie", year_k:1520, years_before:4, approx:true,
  date_label:"An ~1520 — Il y a ~4 ans",
  title:"Ace rencontre Luffy — Retrouvailles à Alabasta",
  description:"Ace retrouve Luffy et son équipage à Alabasta, juste après leur victoire sur Crocodile. C'est leur première retrouvaille depuis qu'ils ont quitté East Blue. Ace leur annonce qu'il traque Barbe-Noire, qui a tué Thatch pour lui voler son Fruit du Démon.",
  characters:["Ace","Luffy","Nami","Zoro"], locations:["Alabasta"],
  source:"Chapitre 217-219", tags:["Ace","Luffy","retrouvailles","Alabasta","Barbe-Noire","Thatch"] }

,{ id:"ace003", era:"pre_histoire", type:"piraterie", year_k:1521, years_before:3, approx:true,
  date_label:"An ~1521 — Il y a ~3 ans",
  title:"Ace et Luffy à Sabaody — Dernière rencontre avant Marineford",
  description:"Ace et Luffy se croisent brièvement à Sabaody. C'est la dernière fois qu'ils se voient avant la tragédie de Marineford. Ace est fier du parcours de son petit frère et de sa prime grandissante.",
  characters:["Ace","Luffy"], locations:["Sabaody"],
  source:"Chapitre 498 (mention)", tags:["Ace","Luffy","Sabaody","dernière rencontre","avant Marineford"] }

// ── GRAND LINE — Arcs intermédiaires ─────────────────────
,{ id:"gl001", era:"histoire", year_k:1522, years_before:1.70, approx:false,
  date_label:"An 1522 — Juin", month_k:6, type:"mystere",
  title:"Arc Whisky Peak — Les Chasseurs de Pirates",
  description:"L'équipage accoste à Whisky Peak où les habitants semblent fêter leur arrivée. En réalité, ce sont des agents de Baroque Works qui endorment les pirates pour les capturer. Zoro découvre le pot aux roses et combat seul contre cent agents.",
  characters:["Luffy","Zoro","Nami","Vivi","Igaram"], locations:["Whisky Peak","Grand Line"],
  source:"Chapitres 106-114", tags:["Whisky Peak","Baroque Works","Vivi","Zoro","piège"] }

,{ id:"gl002", era:"histoire", year_k:1522, years_before:1.60, approx:false,
  date_label:"An 1522 — Juil.", month_k:7, type:"aventure",
  title:"Arc Little Garden — Les Géants Dorry et Brogy",
  description:"Sur Little Garden, île préhistorique, l'équipage rencontre les deux géants légendaires Dorry et Brogy, en duel depuis 100 ans pour un point d'honneur. Baroque Works tente de les manipuler. L'équipage comprend l'absurdité et la noblesse de leur combat.",
  characters:["Luffy","Zoro","Nami","Usopp","Vivi","Dorry","Brogy"], locations:["Little Garden","Grand Line"],
  source:"Chapitres 115-129", tags:["Little Garden","Dorry","Brogy","géants","honneur","100 ans"] }

,{ id:"gl003", era:"histoire", year_k:1522, years_before:1.45, approx:false,
  date_label:"An 1522 — Juil.", month_k:7, type:"aventure",
  title:"Arc Skypiea — La Cloche de Shandora retentit",
  description:"Luffy atteint enfin la cloche d'or de Shandora et la fait sonner depuis les nuages — son son atteignant la mer. Ce carillon, que Noland avait promis de faire entendre à Kalgara, résonne pour la première fois depuis 400 ans, accomplissant la promesse millénaire entre les deux amis.",
  characters:["Luffy","Zoro","Usopp","Nami","Chopper","Robin","Énel","Gan Fall"], locations:["Skypiea","Shandora"],
  source:"Chapitre 302", tags:["Skypiea","cloche","Shandora","Noland","Kalgara","promesse","400 ans"] }

,{ id:"gl004", era:"histoire", year_k:1522, years_before:1.25, approx:false,
  date_label:"An 1522 — Aoû.", month_k:8, type:"aventure",
  title:"Arc Water 7 — La Vérité sur Robin",
  description:"Robin se sacrifie et se rend au CP9 pour protéger l'équipage, croyant n'avoir aucun droit d'exister. Luffy crie au monde entier que Robin est son amie et que l'équipage veut qu'elle vive. Ce moment change Robin à jamais.",
  characters:["Robin","Luffy","Lucci","Spandam"], locations:["Water 7","Enies Lobby"],
  source:"Chapitre 398-399", tags:["Robin","Water 7","Enies Lobby","existence","amitié","Luffy"] }

,{ id:"gl005", era:"histoire", year_k:1522, years_before:1.1, approx:false,
  date_label:"An 1522 — Sep.", month_k:9, type:"aventure",
  title:"Arc Thriller Bark — Zoro absorbe la douleur de Luffy",
  description:"À la fin de Thriller Bark, Kuma oblige Zoro à absorber toute la douleur et la fatigue de Luffy pour épargner l'équipage. Zoro accepte seul, sans en parler à personne. Sanji le retrouve debout, couvert de sang. 'Rien ne s'est passé.'",
  characters:["Zoro","Kuma","Luffy","Sanji"], locations:["Thriller Bark"],
  source:"Chapitre 483", tags:["Zoro","Kuma","sacrifice","douleur","Thriller Bark","rien s'est passé"] }

  
// ══════════════════════════════════════════════════════════
//  NAISSANCES MANQUANTES
// ══════════════════════════════════════════════════════════

// ── Chapeaux de Paille (manquants) ──────────────────────
,{ id:"b_usopp", era:"pre_histoire", type:"naissance", year_k:1504, years_before:20, approx:false,
  date_label:"An 1504 — Il y a 20 ans (1er avr.)", month_k:4, day_k:1,
  title:"Naissance d'Usopp",
  description:"Usopp naît à Syrup Village dans East Blue, fils du tireur d'élite Yasopp des Pirates de Shanks. Abandonné par son père parti en mer, il invente chaque jour un mensonge pour faire croire à sa mère mourante que Yasopp revient. Son rêve : devenir un grand guerrier des mers.",
  characters:["Usopp","Yasopp"], locations:["Syrup Village","East Blue"],
  source:"SBS", tags:["Usopp","Chapeau de Paille","Yasopp","Syrup Village"] }

// ── Marines ──────────────────────────────────────────────
,{ id:"b_tashigi", era:"pre_histoire", type:"naissance", year_k:1502, years_before:22, approx:false,
  date_label:"An 1502 — Il y a 22 ans (6 oct.)", month_k:10, day_k:6,
  title:"Naissance de Tashigi",
  description:"Tashigi naît. Elle rejoindra la Marine et deviendra l'adjudante de Smoker, avec qui elle forme un duo emblématique. Passionnée par les sabres légendaires, elle rêve de les soustraire aux mains des criminels.",
  characters:["Tashigi","Smoker"], locations:[],
  source:"SBS Vol. 27", tags:["Tashigi","Marine","Smoker","sabres"] }

,{ id:"b_helmeppo", era:"pre_histoire", type:"naissance", year_k:1503, years_before:21, approx:false,
  date_label:"An 1503 — Il y a 21 ans (16 oct.)", month_k:10, day_k:16,
  title:"Naissance de Helmeppo",
  description:"Helmeppo naît, fils du Capitaine Morgan. D'abord lâche et arrogant, sa rencontre avec Koby le transforme. Il deviendra un Marine fiable et fidèle ami de Koby, tous deux protégés de Garp.",
  characters:["Helmeppo","Morgan","Koby","Garp"], locations:[],
  source:"SBS Vol. 27", tags:["Helmeppo","Marine","Koby","Morgan","Garp"] }

,{ id:"b_hina", era:"pre_histoire", type:"naissance", year_k:1490, years_before:34, approx:false,
  date_label:"An 1490 — Il y a 34 ans (3 mar.)", month_k:3, day_k:3,
  title:"Naissance de Hina",
  description:"Hina naît. Surnommée 'la Noire', cette Vice-Amirale de la Marine est une ancienne camarade de promotion de Smoker. Elle utilise le Ori Ori no Mi qui lui permet d'entraver ses ennemis.",
  characters:["Hina","Smoker"], locations:[],
  source:"SBS Vol. 27", tags:["Hina","Marine","Vice-Amirale","Smoker"] }

// ── Supernovas / Grands Pirates ──────────────────────────
,{ id:"b_kid", era:"pre_histoire", type:"naissance", year_k:1502, years_before:22, approx:false,
  date_label:"An 1502 — Il y a 22 ans (10 jan.)", month_k:1, day_k:10,
  title:"Naissance d'Eustass Kid",
  description:"Eustass Kid naît. Supernova au tempérament volcanique, il utilise le Jiki Jiki no Mi (Magnétisme). Sa prime avant d'entrer dans le Nouveau Monde dépasse même celle de Luffy. À Wano, il s'allie à Law pour vaincre Big Mom.",
  characters:["Kid","Killer"], locations:[],
  source:"SBS Vol. 68", tags:["Kid","Supernovas","Jiki Jiki","Wano","Big Mom"] }

,{ id:"b_bonney", era:"pre_histoire", type:"naissance", year_k:1502, years_before:22, approx:false,
  date_label:"An 1502 — Il y a 22 ans (9 sep.)", month_k:9, day_k:9,
  title:"Naissance de Jewelry Bonney",
  description:"Jewelry Bonney naît. Supernova de South Blue, elle peut modifier l'âge des êtres vivants grâce au Toshi Toshi no Mi. Fille de Kuma, elle cherche à le libérer de sa transformation en Pacifista. Sa gourmandise légendaire la rend reconnaissable entre tous.",
  characters:["Bonney","Kuma"], locations:["South Blue"],
  source:"SBS Vol. 68", tags:["Bonney","Supernovas","Kuma","âge","Egghead"] }

,{ id:"b_perona", era:"pre_histoire", type:"naissance", year_k:1502, years_before:22, approx:false,
  date_label:"An 1502 — Il y a 22 ans (8 fév.)", month_k:2, day_k:8,
  title:"Naissance de Perona",
  description:"Perona naît. Officier de Moria dans Thriller Bark, elle utilise le Horo Horo no Mi pour créer des fantômes négatifs. Après Thriller Bark, Kuma la téléporte sur l'île de Mihawk, où elle prend soin de Zoro pendant le timeskip.",
  characters:["Perona","Moria","Mihawk","Zoro"], locations:[],
  source:"SBS Vol. 50", tags:["Perona","Thriller Bark","Moria","Zoro","fantômes"] }

,{ id:"b_monet", era:"pre_histoire", type:"naissance", year_k:1494, years_before:30, approx:false,
  date_label:"An 1494 — Il y a 30 ans (27 aoû.)", month_k:8, day_k:27,
  title:"Naissance de Monet",
  description:"Monet naît et grandit dans un milieu difficile. Elle et sa sœur Sugar seront recueillies par Doflamingo. Espionne de Doflamingo infiltrée chez Caesar sur Punk Hazard, elle utilise le Yuki Yuki no Mi (Neige). Elle se sacrifie en tentant de faire exploser la base de Caesar.",
  characters:["Monet","Sugar","Doflamingo","Caesar Clown"], locations:["Punk Hazard"],
  source:"SBS Vol. 75", tags:["Monet","Punk Hazard","Doflamingo","César","sacrifice","mort"] }

,{ id:"b_sugar", era:"pre_histoire", type:"naissance", year_k:1506, years_before:18, approx:false,
  date_label:"An 1506 — Il y a 18 ans (16 aoû.)", month_k:8, day_k:16,
  title:"Naissance de Sugar",
  description:"Sugar naît, sœur de Monet, recueillie enfant par Doflamingo. Son Hobi Hobi no Mi lui permet de transformer les gens en jouets, effaçant leur existence de la mémoire de tous. Elle gère ainsi des milliers d'esclaves-jouets à Dressrosa — dont l'ancien roi Kyros.",
  characters:["Sugar","Monet","Doflamingo","Kyros"], locations:["Dressrosa"],
  source:"SBS Vol. 75", tags:["Sugar","Dressrosa","jouets","Hobi Hobi","esclaves","Kyros"] }

,{ id:"b_cavendish", era:"pre_histoire", type:"naissance", year_k:1498, years_before:26, approx:false,
  date_label:"An 1498 — Il y a 26 ans (31 aoû.)", month_k:8, day_k:31,
  title:"Naissance de Cavendish",
  description:"Cavendish naît. Ancien prince adoré devenu pirate, il développe un alter-ego endormi sanguinaire : Hakuba. À Dressrosa, il devient chef de la Flotte Grand des Chapeaux de Paille après avoir été sauvé par Luffy.",
  characters:["Cavendish"], locations:[],
  source:"SBS Vol. 83", tags:["Cavendish","Hakuba","Dressrosa","Grand Fleet","Chapeau de Paille"] }

,{ id:"b_bartolomeo", era:"pre_histoire", type:"naissance", year_k:1500, years_before:24, approx:false,
  date_label:"An 1500 — Il y a 24 ans (6 oct.)", month_k:10, day_k:6,
  title:"Naissance de Bartolomeo",
  description:"Bartolomeo naît. Fan inconditionnel de Luffy depuis Loguetown, il assiste à la scène où Dragon sauve Luffy et en devient obsédé. À Dressrosa, il protège Luffy en tant que capitaine des Pirates Cannibal et rejoint la Flotte Grand.",
  characters:["Bartolomeo","Luffy"], locations:[],
  source:"SBS Vol. 83", tags:["Bartolomeo","Luffy","fan","Dressrosa","Grand Fleet","Barrière"] }

// ══════════════════════════════════════════════════════════
//  ARC PUNK HAZARD — Détails
// ══════════════════════════════════════════════════════════
,{ id:"ph_v001", era:"histoire", type:"politique", year_k:1524, years_before:0.68, approx:false,
  date_label:"An 1524 — Jan.", month_k:1,
  title:"Punk Hazard — L'Alliance Law-Luffy",
  description:"Trafalgar Law propose une alliance à Luffy pour renverser l'un des Quatre Empereurs. Son plan : priver Kaidou de l'approvisionnement en SMILE de Caesar Clown. Luffy accepte intuitivement. C'est la première grande alliance de l'ère post-timeskip.",
  characters:["Luffy","Law","Caesar Clown","Smoker"], locations:["Punk Hazard"],
  source:"Chapitre 668-670", tags:["Law","Luffy","alliance","Kaidou","SMILE","Punk Hazard"] }

,{ id:"ph_v002", era:"histoire", type:"mort", year_k:1524, years_before:0.66, approx:false,
  date_label:"An 1524 — Jan.", month_k:1,
  title:"Punk Hazard — Vergo et Monet se sacrifient",
  description:"Vergo, agent de Doflamingo infiltré dans la Marine depuis des années, est vaincu par Law dans le sous-sol de Punk Hazard. Monet tente de faire exploser la base pour éliminer tout le monde, mais Caesar, croyant tenir le cœur de Monet, perce en réalité le sien. Punk Hazard est détruite.",
  characters:["Law","Vergo","Monet","Caesar Clown","Doflamingo"], locations:["Punk Hazard"],
  source:"Chapitres 694-696", tags:["Vergo","Monet","mort","Punk Hazard","Caesar","Doflamingo"] }

// ══════════════════════════════════════════════════════════
//  ARC DRESSROSA — Détails
// ══════════════════════════════════════════════════════════
,{ id:"dr001", era:"histoire", type:"mystere", year_k:1524, years_before:0.54, approx:false,
  date_label:"An 1524 — Mar.", month_k:3,
  title:"Dressrosa — Le Secret des Jouets de Sugar",
  description:"Robin et Usopp découvrent le terrible secret de Dressrosa : Sugar, l'agent de Doflamingo, transforme les gens en jouets en les touchant, effaçant leur existence de la mémoire de tous. Des milliers de personnes, dont d'anciens pirates et soldats, sont esclaves sous cette forme.",
  characters:["Robin","Usopp","Sugar","Doflamingo","Kyros"], locations:["Dressrosa"],
  source:"Chapitres 711-720", tags:["Sugar","jouets","Hobi Hobi","Dressrosa","esclaves","mémoire effacée"] }

,{ id:"dr002", era:"histoire", type:"aventure", year_k:1524, years_before:0.53, approx:false,
  date_label:"An 1524 — Mar.", month_k:3,
  title:"Dressrosa — Usopp libère tous les jouets",
  description:"Usopp, depuis les hauteurs, utilise son Pop Green pour terroriser Sugar qui perd connaissance. Instantanément, tous les jouets de Dressrosa reprennent forme humaine — dont Kyros, père de Rebecca. La vérité sur Doflamingo éclate au grand jour devant toute la ville.",
  characters:["Usopp","Sugar","Kyros","Rebecca","Robin"], locations:["Dressrosa"],
  source:"Chapitre 742", tags:["Usopp","Sugar","libération","jouets","Kyros","Dressrosa","révélation"] }

,{ id:"dr003", era:"histoire", type:"politique", year_k:1524, years_before:0.52, approx:false,
  date_label:"An 1524 — Mar.", month_k:3,
  title:"Dressrosa — Corazon & la Vérité sur Law (Flashback)",
  description:"Law révèle à Doflamingo la vérité sur Rosinante — Corazon — qui était un agent de la Marine infiltré dans ses rangs. Le flashback complet montre comment Corazon a sacrifié sa vie pour que Law survive avec l'Ope Ope no Mi.",
  characters:["Law","Doflamingo","Rosinante","Sengoku"], locations:["Dressrosa"],
  source:"Chapitres 762-767", tags:["Corazon","Law","Doflamingo","Sengoku","sacrifice","vérité","flashback"] }

,{ id:"dr004", era:"histoire", type:"guerre", year_k:1524, years_before:0.51, approx:false,
  date_label:"An 1524 — Mar.", month_k:3,
  title:"Dressrosa — Luffy Gear Fourth vs Doflamingo",
  description:"Luffy utilise pour la première fois le Gear Fourth — Boundman — pour affronter Doflamingo. La puissance déployée est sans précédent mais limitée dans le temps. Luffy bat Doflamingo d'un coup de King Kong Gun, mettant fin à 10 ans de règne sur Dressrosa.",
  characters:["Luffy","Doflamingo","Law","Cavendish"], locations:["Dressrosa"],
  source:"Chapitres 784-790", tags:["Luffy","Gear Fourth","Doflamingo","Dressrosa","King Kong Gun","victoire"] }

,{ id:"dr005", era:"histoire", type:"politique", year_k:1524, years_before:0.50, approx:false,
  date_label:"An 1524 — Avr.", month_k:4,
  title:"Formation de la Flotte Grand des Chapeaux de Paille",
  description:"À l'issue de Dressrosa, sept équipages (Bartolomeo, Cavendish, Sai, Ideo, Leo, Hajrudin, Orlumbus) prêtent allégeance à Luffy sans qu'il le demande. Naît ainsi la Flotte Grand du Chapeau de Paille — plus de 5 000 hommes — l'une des plus puissantes de l'histoire.",
  characters:["Luffy","Bartolomeo","Cavendish","Sai","Fujitora"], locations:["Dressrosa"],
  source:"Chapitre 800", tags:["Flotte Grand","Dressrosa","allégeance","5000 hommes","Bartolomeo","Cavendish"] }

// ══════════════════════════════════════════════════════════
//  ARC WHOLE CAKE ISLAND — Détails
// ══════════════════════════════════════════════════════════
,{ id:"wci001", era:"histoire", type:"politique", year_k:1524, years_before:0.34, approx:false,
  date_label:"An 1524 — Juil.", month_k:7,
  title:"Whole Cake Island — Révélation sur les Vinsmoke",
  description:"Sanji découvre que son père Judge a modifié génétiquement ses frères pour en faire des soldats sans émotions — mais pas lui, qui est né 'raté' avec ses sentiments intacts. Big Mom et les Vinsmoke ont comploté pour éliminer toute la famille lors du mariage.",
  characters:["Sanji","Vinsmoke Judge","Reiju","Ichiji"], locations:["Whole Cake Island"],
  source:"Chapitres 840, 856-857", tags:["Sanji","Vinsmoke","génétique","Big Mom","trahison","mariage"] }

,{ id:"wci002", era:"histoire", type:"aventure", year_k:1524, years_before:0.33, approx:false,
  date_label:"An 1524 — Juil.", month_k:7,
  title:"Whole Cake Island — Luffy bat Katakuri",
  description:"Luffy et Katakuri s'affrontent dans le Miroir-Monde pendant des heures. Luffy développe son propre Haki de l'Observation du futur pour égaler Katakuri. La victoire finale — Luffy épuisé debout, Katakuri à terre — est le fruit d'une bataille de respect mutuel.",
  characters:["Luffy","Katakuri"], locations:["Whole Cake Island"],
  source:"Chapitres 880-883", tags:["Luffy","Katakuri","Haki Observation","Miroir-Monde","victoire","respect"] }

,{ id:"wci003", era:"histoire", type:"piraterie", year_k:1524, years_before:0.32, approx:false,
  date_label:"An 1524 — Juil.", month_k:7,
  title:"Whole Cake Island — Jinbe quitte l'équipage de Big Mom",
  description:"Jinbe annonce officiellement à Big Mom qu'il quitte ses Pirates pour rejoindre Luffy. Big Mom lui propose de tirer une loterie — perdre de l'espérance de vie contre sa liberté. Jinbe et ses hommes acceptent sans peur, ce qui décontenancera Big Mom.",
  characters:["Jinbe","Big Mom","Luffy"], locations:["Whole Cake Island"],
  source:"Chapitre 860, 901", tags:["Jinbe","Big Mom","démission","liberté","courage","Chapeau de Paille"] }

,{ id:"wci004", era:"histoire", type:"piraterie", year_k:1524, years_before:0.31, approx:false,
  date_label:"An 1524 — Juil.", month_k:7,
  title:"Whole Cake Island — La Destruction du Miroir-Monde",
  description:"Nami, Carrot, Chopper et Brook affrontent les forces de Big Mom pendant que l'équipage fuit. Brook détruit le portrait de Mère Caramel, déclenchant une crise de rage de Big Mom. L'équipage s'échappe de Totto Land grâce aux préparatifs de Jinbe.",
  characters:["Luffy","Sanji","Jinbe","Nami","Carrot","Brook","Big Mom"], locations:["Whole Cake Island"],
  source:"Chapitres 898-902", tags:["Whole Cake","fuite","Brook","Mère Caramel","Big Mom","crise"] }

// ══════════════════════════════════════════════════════════
//  FLASHBACKS MANQUANTS
// ══════════════════════════════════════════════════════════
,{ id:"fl001", era:"pre_histoire", type:"aventure", year_k:1515, years_before:9, approx:true,
  date_label:"An ~1515 — Il y a ~9 ans",
  title:"Flashback de Koby — Esclave d'Alvida",
  description:"Koby, rêvant de devenir Marine, monte par erreur sur le bateau de la pirate Alvida et se retrouve forcé de travailler pour elle pendant deux ans. Sa rencontre avec Luffy changera sa vie à jamais.",
  characters:["Koby","Alvida","Luffy"], locations:["East Blue"],
  source:"Chapitre 2", tags:["Koby","Alvida","esclave","Marine","Luffy","East Blue"] }

,{ id:"fl002", era:"pre_histoire", type:"aventure", year_k:1510, years_before:14, approx:true,
  date_label:"An ~1510 — Il y a ~14 ans",
  title:"Flashback de Jinbe — La Mort de Fisher Tiger",
  description:"Jinbe accompagne Fisher Tiger lors de sa dernière bataille. Blessé mortellement après une embuscade de la Marine, Tiger refuse une transfusion de sang humain. En mourant, il confie à Jinbe de protéger l'Alliance Solaire et de ne pas laisser la haine consumer les Hommes-Poissons.",
  characters:["Jinbe","Fisher Tiger","Arlong"], locations:["Île des Hommes-Poissons"],
  source:"Chapitre 622-624", tags:["Jinbe","Fisher Tiger","mort","Alliance Solaire","haine","Hommes-Poissons"] }

,{ id:"fl003", era:"pre_histoire", type:"aventure", year_k:1516, years_before:8, approx:true,
  date_label:"An ~1516 — Il y a ~8 ans",
  title:"Flashback de Nami — La Carte du Monde",
  description:"Nami dessine des cartes depuis son plus jeune âge, nourrie par son rêve de cartographier le monde entier. Sous la coupe d'Arlong, elle est forcée de faire des cartes pour lui pendant des années en échange de la promesse de racheter son village.",
  characters:["Nami","Arlong","Bell-Mère","Nojiko"], locations:["Cocoyasi","East Blue"],
  source:"Chapitres 77-78", tags:["Nami","cartes","Arlong","Bell-Mère","rêve","East Blue"] }

  ]// end events

  ,characters: [
// ── CHAPEAUX DE PAILLE ───────────────────────────────────
{id:"c_luffy",   name:"Monkey D. Luffy",    aliases:["Chapeau de Paille","Joyboy","Soleil","Mugiwara"],
 cat:"pirate", status:"vivant", birth_yb:22, death_yb:null,
 affiliation:["Équipage du Chapeau de Paille"], role:"Capitaine",
 bounty:"3 000 000 000", fruit:"Hito Hito no Mi, Modèle : Nika (Gomu Gomu no Mi)",
 description:"Fils de Dragon le Révolutionnaire et petit-fils de Garp, Luffy a mangé le Hito Hito no Mi Modèle Nika — le fruit le plus redouté du Gouvernement pendant 800 ans. Porteur du Chapeau de Paille de Shanks, il aspire à devenir Roi des Pirates. Son Gear Fifth le transforme en l'incarnation du Dieu du Soleil Nika.",
 tags:["Clan D.","Roi des Pirates","Gear Fifth","Nika","Chapeau de Paille"]},

{id:"c_zoro",    name:"Roronoa Zoro",        aliases:["Pourfendeur de Démons","Roi des Épéistes"],
 cat:"pirate", status:"vivant", birth_yb:23, death_yb:null,
 affiliation:["Équipage du Chapeau de Paille"], role:"Premier Officier / Coq",
 bounty:"1 110 000 000", fruit:null,
 description:"Ancienne gloire des tournois d'épée, Zoro a promis à Kuina de devenir le plus grand épéiste. Disciple du style Santoryu (trois sabres), il porte désormais Enma, le légendaire sabre d'Oden. Sa capacité à absorber la douleur des autres est sans égal.",
 tags:["épéiste","Santoryu","Enma","Wado Ichimonji","Kuina"]},

{id:"c_nami",    name:"Nami",                aliases:["La Chatte","Navigatrice du Diable"],
 cat:"pirate", status:"vivant", birth_yb:21, death_yb:null,
 affiliation:["Équipage du Chapeau de Paille"], role:"Navigatrice",
 bounty:"366 000 000", fruit:null,
 description:"Orpheline recueillie par Bell-Mère à Cocoyasi, Nami rêve de cartographier toute la Grand Line. Son Bâton de Temps lui permet de contrôler la météo. Considérée comme la meilleure navigatrice du monde.",
 tags:["cartographie","météo","Bell-Mère","Arlong","Bâton de Temps"]},

{id:"c_usopp",   name:"Usopp",               aliases:["Sogeking","Le Roi des Tireurs","Sniper King"],
 cat:"pirate", status:"vivant", birth_yb:20, death_yb:null,
 affiliation:["Équipage du Chapeau de Paille"], role:"Tireur d'Élite",
 bounty:"500 000 000", fruit:null,
 description:"Fils du tireur d'élite Yasopp des Pirates de Shanks, Usopp est le menteur génial de l'équipage. Malgré ses couardises apparentes, il a accompli des exploits impossibles. À Dressrosa, il a tiré sur une cible à plus de 4 km.",
 tags:["tireur","Yasopp","Syrup Village","mensonges","Sogeking"]},

{id:"c_sanji",   name:"Sanji",               aliases:["Jambe Noire","Prince du Germa","Cuisinier du Diable"],
 cat:"pirate", status:"vivant", birth_yb:21, death_yb:null,
 affiliation:["Équipage du Chapeau de Paille","Germa 66"], role:"Cuisinier",
 bounty:"1 032 000 000", fruit:null,
 description:"Troisième fils du roi du Germa Vinsmoke Judge, Sanji a fui sa famille pour travailler au Baratie sous Zeff. Son style de combat 'Black Leg' n'utilise jamais les mains. Il possède des exosquelettes génétiques activés par le Raid Suit et maîtrise l'Ifrit Jambe.",
 tags:["Baratie","Germa","cuisine","Black Leg","Ifrit Jambe","Vinsmoke"]},

{id:"c_chopper", name:"Tony Tony Chopper",   aliases:["Cotton Candy Lover","Docteur Coton"],
 cat:"pirate", status:"vivant", birth_yb:17, death_yb:null,
 affiliation:["Équipage du Chapeau de Paille"], role:"Médecin",
 bounty:"1 000", fruit:"Hito Hito no Mi (Humain)",
 description:"Renne ayant mangé le Hito Hito no Mi sur l'Île de Drum, Chopper peut transformer son corps en sept points de rupture. Formé par Hiriluk puis Kureha, il rêve de trouver un remède universel à toutes les maladies du monde.",
 tags:["Drum Island","Hiriluk","Kureha","médecin","renne","Rumble Ball"]},

{id:"c_robin",   name:"Nico Robin",          aliases:["L'Enfant Diable","Femme Fleur","L'Archéologue"],
 cat:"pirate", status:"vivant", birth_yb:30, death_yb:null,
 affiliation:["Équipage du Chapeau de Paille"], role:"Archéologue",
 bounty:"930 000 000", fruit:"Hana Hana no Mi (Fleur)",
 description:"Seule survivante de la destruction d'Ohara, Robin a vécu 20 ans comme fugitive. Elle est la seule personne au monde capable de lire les Ponéglyphes. Ses pouvoirs lui permettent de faire fleurir des membres sur n'importe quelle surface.",
 tags:["Ohara","Ponéglyphes","Siècle Oublié","Hana Hana","Buster Call"]},

{id:"c_franky",  name:"Franky",              aliases:["Iron Man","Cutty Flam"],
 cat:"pirate", status:"vivant", birth_yb:36, death_yb:null,
 affiliation:["Équipage du Chapeau de Paille"], role:"Charpentier",
 bounty:"394 000 000", fruit:null,
 description:"Né Cutty Flam, abandonné à Water 7 par ses parents pirates, recueilli par le maître charpentier Tom. Après un accident, il s'est reconstruit lui-même en cyborg alimenté au cola. Il a construit le Thousand Sunny.",
 tags:["cyborg","Water 7","Tom","Thousand Sunny","cola","charpentier"]},

{id:"c_brook",   name:"Brook",               aliases:["Soul King","Squelette Musicien"],
 cat:"pirate", status:"vivant", birth_yb:90, death_yb:null,
 affiliation:["Équipage du Chapeau de Paille","Pirates de Rumbar"], role:"Musicien",
 bounty:"383 000 000", fruit:"Yomi Yomi no Mi (Revenir à la Vie)",
 description:"Ancien capitaine des Pirates de Rumbar, Brook est mort dans le Triangle de Florian mais a été ramené à la vie par son Yomi Yomi no Mi — trop tard pour retrouver son corps avant qu'il ne soit squelettisé. Il a passé 50 ans seul sur son navire. Maîtrise le Soul Solid.",
 tags:["squelette","Yomi Yomi","Rumbar","Florian","Soul King","musique"]},

{id:"c_jinbe",   name:"Jinbe",               aliases:["Chevalier de la Mer","Homme-Poisson Karaté"],
 cat:"pirate", status:"vivant", birth_yb:46, death_yb:null,
 affiliation:["Équipage du Chapeau de Paille","Alliance Solaire"], role:"Barreur",
 bounty:"1 100 000 000", fruit:null,
 description:"Ancien capitaine des Hommes-Poissons et Corsaire, Jinbe a navigué sous les ordres de Barbe-Blanche avant de rejoindre Luffy. Maître de l'Homme-Poisson Karaté, il peut contrôler l'eau. C'est lui qui a tenu Luffy à flots lors de la bataille de Marineford.",
 tags:["Homme-Poisson","Alliance Solaire","Karaté","Corsaire","Barbe-Blanche"]},

// ── ALLIÉS / PROCHES ─────────────────────────────────────
{id:"c_ace",     name:"Portgas D. Ace",      aliases:["Poing de Feu","Frère de Luffy"],
 cat:"pirate", status:"mort", birth_yb:22, death_yb:2,
 affiliation:["Pirates de Barbe-Blanche","Pirates du Poing de Feu"], role:"Commandant 2e Division",
 bounty:"550 000 000", fruit:"Mera Mera no Mi (Feu)",
 description:"Fils de Gol D. Roger et de Portgas D. Rouge, élevé par Garp avec Luffy. Commandant de la 2e Division de Barbe-Blanche. Livré au Gouvernement par Barbe-Noire, il est exécuté à Marineford, protégeant Luffy d'un poing de magma d'Akainu. Sa mort brise Luffy.",
 tags:["Roger","Barbe-Blanche","Poing de Feu","Marineford","mort","Mera Mera"]},

{id:"c_sabo",    name:"Sabo",                aliases:["Frère Juré de Luffy","Bras Droit de Dragon","Héritier de la Volonté de Feu"],
 cat:"revolutionnaire", status:"vivant", birth_yb:24, death_yb:null,
 affiliation:["Armée Révolutionnaire"], role:"Chef de Cabinet",
 bounty:"602 000 000", fruit:"Mera Mera no Mi (Feu)",
 description:"Né dans une famille noble de Goa, Sabo a fui son milieu pour vivre avec Luffy et Ace. Présumé mort à 10 ans, il est en réalité recueilli par Dragon. Il hérite du Mera Mera no Mi lors du tournoi de Dressrosa, en hommage à Ace.",
 tags:["Révolutionnaires","Dragon","Mera Mera","Dressrosa","Goa","frères"]},

{id:"c_shanks",  name:"Shanks",              aliases:["Le Roux","Shanks au Bras Rouge"],
 cat:"pirate", status:"vivant", birth_yb:39, death_yb:null,
 affiliation:["Pirates de Shanks"], role:"Capitaine / Empereur",
 bounty:"4 048 900 000", fruit:null,
 description:"Né Dragon Céleste de la famille Fegarland, trouvé enfant par Roger à God Valley. Ancien marin apprenti sur le navire de Roger aux côtés de Buggy. Il donne son Chapeau de Paille à Luffy en échange de sa promesse. L'un des rares non-utilisateurs de Fruit du Démon à être Empereur.",
 tags:["Chapeau de Paille","Roger","Empereur","God Valley","Fegarland","Haki"]},

{id:"c_law",     name:"Trafalgar D. Water Law", aliases:["Le Chirurgien de la Mort"],
 cat:"pirate", status:"vivant", birth_yb:26, death_yb:null,
 affiliation:["Pirates de Heart"], role:"Capitaine / Corsaire (ex)",
 bounty:"3 000 000 000", fruit:"Ope Ope no Mi (Opération)",
 description:"Originaire de Flevance, ville détruite par l'empoisonnement au Plomb d'Ambre, Law a été sauvé par Corazon/Rosinante. Chirurgien légendaire, son Ope Ope no Mi lui permet de créer une 'salle d'opération' en forme de dôme où il peut manipuler tout ce qui s'y trouve.",
 tags:["Flevance","Corazon","Dressrosa","Clan D.","Punk Hazard","Wano"]},

// ── EMPEREURS ────────────────────────────────────────────
{id:"c_roger",   name:"Gol D. Roger",        aliases:["Roi des Pirates","Or Rogers"],
 cat:"historique", status:"mort", birth_yb:77, death_yb:24,
 affiliation:["Pirates de Roger"], role:"Capitaine",
 bounty:"5 564 800 000", fruit:null,
 description:"Le seul homme à avoir conquis la Grand Line, trouvé Laugh Tale et l'One Piece. Atteint d'une maladie incurable, il se rend à la Marine pour être exécuté à Loguetown. Ses derniers mots déclenchent la Grande Ère de la Piraterie. Père d'Ace.",
 tags:["Roi des Pirates","Laugh Tale","One Piece","exécution","Clan D.","Grand Line"]},

{id:"c_wb",      name:"Edward Newgate",       aliases:["Barbe-Blanche","L'Homme le Plus Fort","Papa"],
 cat:"pirate", status:"mort", birth_yb:74, death_yb:2,
 affiliation:["Pirates de Barbe-Blanche"], role:"Capitaine / Empereur",
 bounty:"5 046 000 000", fruit:"Gura Gura no Mi (Tremblement)",
 description:"Considéré comme l'Homme le Plus Fort du Monde. Orphelin de Sphinx, il cherchait une famille — son équipage était sa famille. Mort à Marineford après 267 coups de lame, 152 balles et 46 boulets. Il ne recula jamais. Dernier mot : 'One Piece est réel.'",
 tags:["Barbe-Blanche","Marineford","Gura Gura","Sphinx","Famille","mort"]},

{id:"c_bigmom",  name:"Charlotte Linlin",    aliases:["Big Mom","Impératrice","Reine de Toto Land"],
 cat:"pirate", status:"inconnu", birth_yb:68, death_yb:null,
 affiliation:["Pirates de Big Mom"], role:"Capitaine / Impératrice",
 bounty:"4 388 000 000", fruit:"Soru Soru no Mi (Âme)",
 description:"Abandonnée à Elbaf à 6 ans, Linlin a absorbé le fruit de Mère Caramel lors de son anniversaire. Mère de 85 enfants issus de 43 maris. Ses crises de boulimie la rendent incontrôlable. Vaincue par Law et Kid à Wano.",
 tags:["Elbaf","Mère Caramel","Soru Soru","Whole Cake Island","Big Mom Pirates"]},

{id:"c_kaido",   name:"Kaidou",              aliases:["Roi des Bêtes","La Créature","L'Indestructible"],
 cat:"pirate", status:"inconnu", birth_yb:59, death_yb:null,
 affiliation:["Pirates des Cent Bêtes"], role:"Capitaine / Empereur",
 bounty:"4 611 100 000", fruit:"Uo Uo no Mi, Modèle : Seiryuu (Dragon Azur Céleste)",
 description:"Réputé indestructible, Kaidou a survécu à 40 captures et 7 exécutions. Ancien membre des Pirates de Rocks. À Wano, il règne sur le pays en alliance avec Orochi. Vaincu par Luffy en Gear Fifth. Tombé dans le volcan de Wano.",
 tags:["Onigashima","Wano","Rocks","God Valley","indestructible","Cent Bêtes"]},

{id:"c_bb",      name:"Marshall D. Teach",   aliases:["Barbe-Noire","Blackbeard"],
 cat:"pirate", status:"vivant", birth_yb:40, death_yb:null,
 affiliation:["Pirates de Barbe-Noire"], role:"Capitaine / Empereur",
 bounty:"3 996 000 000", fruit:"Yami Yami no Mi (Ténèbres) + Gura Gura no Mi (Tremblement)",
 description:"Seul être connu à posséder deux Fruits du Démon. Ancien membre des Pirates de Barbe-Blanche, il a attendu des décennies pour voler le Yami Yami no Mi sur Thatch. Il a livré Ace au Gouvernement, déclenchant Marineford, puis volé les pouvoirs de Barbe-Blanche mort.",
 tags:["deux Fruits","Barbe-Blanche","Ace","Marineford","Rocks","Clan D."]},

// ── ÉQUIPAGE DE ROGER / HISTORIQUES ──────────────────────
{id:"c_rayleigh", name:"Silvers Rayleigh",   aliases:["Le Roi des Ténèbres","Premier Officier de Roger"],
 cat:"historique", status:"vivant", birth_yb:78, death_yb:null,
 affiliation:["Pirates de Roger","Sabaody (retraite)"], role:"Premier Officier",
 bounty:"inconnu", fruit:null,
 description:"Surnommé 'Le Roi des Ténèbres', Rayleigh est l'ancien premier officier de Roger. Maître du Haki sous toutes ses formes, il a entraîné Luffy pendant les 2 ans du timeskip sur l'île de Rusukaina. Gérant désormais une salle de revêtement à Sabaody.",
 tags:["Roger","Timeskip","Haki","Rusukaina","Sabaody","Retraite"]},

{id:"c_oden",    name:"Kouzuki Oden",        aliases:["Le Shogun de la Liberté","Seigneur de Kuri"],
 cat:"historique", status:"mort", birth_yb:59, death_yb:24,
 affiliation:["Pirates de Barbe-Blanche","Pirates de Roger","Clan Kouzuki"], role:"Daimyo de Kuri",
 bounty:null, fruit:null,
 description:"Fils du Shogun de Wano, indomptable depuis sa naissance. Il a voyagé avec Barbe-Blanche puis Roger, atteignant Laugh Tale et apprenant la vérité du monde. Trahi par Kanjuro et exécuté bouillant par Orochi et Kaidou. Ses retainers ont juré de réaliser son rêve : ouvrir les frontières de Wano.",
 tags:["Wano","Kouzuki","Roger","Barbe-Blanche","exécution","Enma","Laugh Tale"]},

{id:"c_buggy",   name:"Buggy",               aliases:["Le Clown","Buggy le Star"],
 cat:"pirate", status:"vivant", birth_yb:39, death_yb:null,
 affiliation:["Pirates de Buggy","Pirates de Roger","Buggy's Delivery"], role:"Capitaine / Corsaire / Yonko",
 bounty:"3 189 000 000", fruit:"Bara Bara no Mi (Découpe)",
 description:"Ancien marin apprenti sur le navire de Roger avec Shanks. Capitaine des Pirates du Clown. Par une suite de malentendus, il est devenu successivement Corsaire puis Empereur des mers — bien malgré lui. Sa prime astronomique ne reflète pas ses véritables capacités.",
 tags:["Roger","Shanks","Loguetown","Corsaire","Empereur","malentendu"]},

// ── MARINES ──────────────────────────────────────────────
{id:"c_garp",    name:"Monkey D. Garp",      aliases:["Garp le Poing","Héros de la Marine"],
 cat:"marine", status:"vivant", birth_yb:78, death_yb:null,
 affiliation:["Marine"], role:"Vice-Amiral / Légende",
 bounty:null, fruit:null,
 description:"Légendaire Vice-Amiral de la Marine, grand-père de Luffy et père de Dragon. Il a collaboré avec Roger lors de l'Incident de God Valley contre les Pirates de Rocks, ce qui lui a valu le titre de 'Héros'. A refusé plusieurs fois le grade d'Amiral. A élevé Luffy et Ace.",
 tags:["Luffy","Dragon","God Valley","Rocks","héros","Marine","Clan D."]},

{id:"c_sengoku", name:"Sengoku",             aliases:["Sengoku le Bouddha","Ancien Maréchal en Chef"],
 cat:"marine", status:"vivant", birth_yb:79, death_yb:null,
 affiliation:["Marine"], role:"Maréchal en Chef (ex)",
 bounty:null, fruit:"Hito Hito no Mi, Modèle : Bouddha",
 description:"Ancien Maréchal en Chef de la Marine, commandant suprême lors de la bataille de Marineford. Il a démissionné après la débâcle de Marineford. Maître stratège et utilisateur du Hito Hito no Mi Modèle Bouddha.",
 tags:["Marine","Marineford","Bouddha","Maréchal","Garp","retraite"]},

{id:"c_akainu",  name:"Sakazuki",            aliases:["Akainu","Chien Rouge","Maréchal en Chef"],
 cat:"marine", status:"vivant", birth_yb:55, death_yb:null,
 affiliation:["Marine"], role:"Maréchal en Chef",
 bounty:null, fruit:"Magu Magu no Mi (Magma)",
 description:"L'homme qui a tué Ace d'un poing de magma à Marineford. Sa philosophie de 'Justice Absolue' — éliminer toute menace, amis compris — le distingue des autres Amiraux. A battu Aokiji dans un duel de 10 jours sur Punk Hazard pour devenir Maréchal en Chef.",
 tags:["Magma","Marineford","Ace","Justice Absolue","Maréchal en Chef","Punk Hazard"]},

{id:"c_aokiji",  name:"Kuzan",               aliases:["Aokiji","Faisan Bleu","Ancien Amiral"],
 cat:"marine", status:"vivant", birth_yb:49, death_yb:null,
 affiliation:["Marine (ex)","Pirates de Barbe-Noire"], role:"Amiral (ex)",
 bounty:null, fruit:"Hie Hie no Mi (Glace)",
 description:"Ancien Amiral réputé pour sa nonchalance et sa philosophie de 'Justice Paresseuse'. Vaincu par Akainu sur Punk Hazard dans un duel de 10 jours, il a quitté la Marine. A rejoint mystérieusement les Pirates de Barbe-Noire.",
 tags:["Glace","Punk Hazard","Akainu","Justice Paresseuse","Barbe-Noire","démission"]},

{id:"c_kizaru",  name:"Borsalino",           aliases:["Kizaru","Faisan Jaune"],
 cat:"marine", status:"vivant", birth_yb:58, death_yb:null,
 affiliation:["Marine"], role:"Amiral",
 bounty:null, fruit:"Pika Pika no Mi (Lumière)",
 description:"Amiral nonchalant se déplaçant à la vitesse de la lumière. Sa puissance destructrice est terrifiante malgré son comportement détendu. Envoyé à Egghead pour supprimer Vegapunk, il se retrouve face à ses contradictions devant Sentomaru.",
 tags:["Lumière","Sabaody","Egghead","Amiral","vitesse","nonchalance"]},

{id:"c_fujitora", name:"Issho",              aliases:["Fujitora","Faisan Violet"],
 cat:"marine", status:"vivant", birth_yb:54, death_yb:null,
 affiliation:["Marine"], role:"Amiral",
 bounty:null, fruit:"Zushi Zushi no Mi (Gravité)",
 description:"Aveugle volontaire, Issho a choisi de ne plus voir la laideur du monde. Sa philosophie de 'Justice Douteuse' le place en opposition avec Akainu. À Dressrosa, il a décidé de documenter et révéler au monde les activités des Corsaires plutôt que de les étouffer.",
 tags:["Gravité","aveugle","Dressrosa","Justice Douteuse","Corsaires","réforme"]},

// ── CORSAIRES ────────────────────────────────────────────
{id:"c_hancock", name:"Boa Hancock",         aliases:["L'Impératrice Serpent","La Plus Belle du Monde"],
 cat:"corsaire", status:"vivant", birth_yb:31, death_yb:null,
 affiliation:["Pirates de Kuja","Armée de Kuja"], role:"Impératrice d'Amazon Lily / Corsaire",
 bounty:"inconnu", fruit:"Mero Mero no Mi (Amour)",
 description:"Impératrice d'Amazon Lily, élue la plus belle femme du monde. Ancienne esclave des Dragons Célestes avec ses sœurs, libérée par Fisher Tiger. Amoureuse de Luffy, elle a risqué son statut de Corsaire et son île pour l'aider à s'infiltrer dans Impel Down.",
 tags:["Amazon Lily","esclave","Fisher Tiger","Mero Mero","Kuja","amour"]},

{id:"c_croco",   name:"Crocodile",           aliases:["Sir Crocodile","Monsieur 0"],
 cat:"corsaire", status:"vivant", birth_yb:46, death_yb:null,
 affiliation:["Baroque Works","Impel Down évadés"], role:"Directeur de Baroque Works",
 bounty:"1 965 000 000", fruit:"Suna Suna no Mi (Sable)",
 description:"Ancien Corsaire et chef de Baroque Works. A tenté de s'emparer d'Alabasta et de son arme légendaire. Vaincu trois fois par Luffy, il a perdu son crochet à chaque bataille. A finalement combattu aux côtés de Luffy à Marineford.",
 tags:["Sable","Baroque Works","Alabasta","Corsaire","Marineford","Impel Down"]},

{id:"c_dofla",   name:"Donquixote Doflamingo", aliases:["Le Seigneur des Cordes","Joker","Flamingo"],
 cat:"corsaire", status:"vivant", birth_yb:41, death_yb:null,
 affiliation:["Pirates de Doflamingo","Famille Donquixote"], role:"Capitaine / Roi de Dressrosa (ex)",
 bounty:"340 000 000", fruit:"Ito Ito no Mi (Cordes)",
 description:"Ancien Dragon Céleste devenu pirate après que son père a renoncé à leur statut. A régné sur Dressrosa comme roi fantoche. Fabricant du SMILE et bras droit de Kaidou dans le commerce d'armes. Vaincu par Luffy en Gear Fourth. En prison à Impel Down.",
 tags:["Dressrosa","Ito Ito","Dragon Céleste","SMILE","Kaidou","emprisonné"]},

{id:"c_kuma",    name:"Bartholomew Kuma",    aliases:["L'Automate Tyran"],
 cat:"corsaire", status:"vivant", birth_yb:47, death_yb:null,
 affiliation:["Armée Révolutionnaire","Marine (ex-allié)"], role:"Corsaire / Pacifista PX-0",
 bounty:"296 000 000", fruit:"Nikyu Nikyu no Mi (Patte)",
 description:"Fils d'un Buccaneer, esclave à Mary Geoise enfant. Ancien révolutionnaire devenu Corsaire, il a accepté que le Gouvernement le transforme en Pacifista total — effaçant sa personnalité — pour protéger Bonney. A sauvé l'équipage du Chapeau de Paille à Thriller Bark et Sabaody.",
 tags:["Buccaneers","Pacifista","Nikyu Nikyu","Bonney","Révolutionnaires","esclave"]},

// ── RÉVOLUTIONNAIRES ─────────────────────────────────────
{id:"c_dragon",  name:"Monkey D. Dragon",    aliases:["Dragon le Révolutionnaire","L'Homme le Plus Recherché"],
 cat:"revolutionnaire", status:"vivant", birth_yb:55, death_yb:null,
 affiliation:["Armée Révolutionnaire"], role:"Chef Suprême",
 bounty:"inconnu (le plus élevé du monde)", fruit:"inconnu (présumé Vent)",
 description:"Fils de Garp et père de Luffy, Dragon est le chef de l'Armée Révolutionnaire qui combat le Gouvernement Mondial. Il est l'homme le plus recherché du monde. Sa nature de fruit du démon reste mystérieuse — il semble contrôler le vent. Son objectif est de renverser le Gouvernement.",
 tags:["Révolutionnaires","Garp","Luffy","le plus recherché","Clan D.","vent"]},

// ── WANO ─────────────────────────────────────────────────
{id:"c_momo",    name:"Kouzuki Momonosuke",  aliases:["Shogun de Wano","Héritier de la Flamme"],
 cat:"historique", status:"vivant", birth_yb:28, death_yb:null,
 affiliation:["Clan Kouzuki","Équipage du Chapeau de Paille (allié)"], role:"Shogun de Wano",
 bounty:"inconnu", fruit:"Uo Uo no Mi, Modèle : Seiryuu (version artificielle)",
 description:"Fils d'Oden et Toki, envoyé 20 ans dans le futur par sa mère. Il a la capacité de communiquer avec Zunisha. Son fruit artificiel lui permet de se transformer en dragon, comme Kaidou. À la fin de l'Arc Wano, il rouvre officiellement les frontières du pays.",
 tags:["Wano","Kouzuki","Oden","Toki","Zunisha","Shogun","frontières"]},

{id:"c_toki",    name:"Amatsuki Toki",       aliases:["Princesse du Temps"],
 cat:"historique", status:"mort", birth_yb:856, death_yb:24,
 affiliation:["Pirates de Barbe-Blanche","Clan Kouzuki"], role:"Épouse d'Oden",
 bounty:null, fruit:"Toki Toki no Mi (Temps)",
 description:"Née pendant le Siècle Oublié il y a 856 ans, Toki a utilisé son Toki Toki no Mi pour voyager dans le futur. Épouse d'Oden, elle a envoyé Momonosuke et les retainers 20 ans en avant avant d'être tuée par Orochi. Sa prophétie des 'Neuf Ombres' s'est réalisée.",
 tags:["Siècle Oublié","voyage dans le temps","Oden","Wano","prophétie","mort"]},

// ── HISTORIQUES / MYTHIQUES ──────────────────────────────
{id:"c_joyboy",  name:"Joyboy",              aliases:["Le Guerrier de la Libération","Sun God","Le Premier Nika"],
 cat:"historique", status:"mort", birth_yb:870, death_yb:824,
 affiliation:["Grand Royaume"], role:"Utilisateur du Fruit Nika",
 bounty:null, fruit:"Hito Hito no Mi, Modèle : Nika",
 description:"Figure légendaire du Siècle Oublié, Joyboy a fait une promesse aux habitants de l'Île des Hommes-Poissons qu'il n'a pu tenir. Il a laissé une lettre d'excuses gravée sur un Ponéglyphe. Sa réincarnation était attendue depuis 800 ans — qui s'est avérée être Luffy.",
 tags:["Siècle Oublié","Nika","Grand Royaume","promesse","Île des Hommes-Poissons","mythe"]},

{id:"c_rocks",   name:"Rocks D. Xebec",      aliases:["Rocks","Le Premier Ennemi du Monde"],
 cat:"historique", status:"mort", birth_yb:62, death_yb:38,
 affiliation:["Pirates de Rocks"], role:"Capitaine",
 bounty:"inconnu", fruit:"inconnu",
 description:"Le pirate le plus puissant avant Roger. Son équipage comptait Barbe-Blanche, Big Mom, Kaidou et Shiki. Son ambition était de devenir 'Roi du Monde' — une ambition si dangereuse que le Gouvernement a effacé toute trace de lui. Tué lors de l'Incident de God Valley par Garp et Roger.",
 tags:["Rocks","God Valley","Barbe-Blanche","Big Mom","Kaidou","Roi du Monde","effacé"]},

{id:"c_fisher",  name:"Fisher Tiger",        aliases:["L'Homme qui a attaqué Mary Geoise"],
 cat:"historique", status:"mort", birth_yb:60, death_yb:16,
 affiliation:["Alliance Solaire"], role:"Capitaine / Fondateur",
 bounty:"230 000 000", fruit:null,
 description:"Homme-Poisson légendaire qui a escaladé seul le Dos-du-Monde pour libérer les esclaves de Mary Geoise. Fondateur de l'Alliance Solaire avec Jinbe. Blessé mortellement lors d'une embuscade marine, il refuse une transfusion humaine et meurt. Sa mort hante la communauté des Hommes-Poissons.",
 tags:["Mary Geoise","esclave","Alliance Solaire","Jinbe","mort","Hommes-Poissons"]},

{id:"c_noland",  name:"Mont Blanc Noland",   aliases:["Noland le Menteur"],
 cat:"historique", status:"mort", birth_yb:435, death_yb:396,
 affiliation:["Royaume de Lvneel"], role:"Explorateur",
 bounty:null, fruit:null,
 description:"Explorateur légendaire du Nord Blue qui a découvert Shandora et noué une amitié indéfectible avec le guerrier Kalgara. Exécuté pour avoir menti sur la Cité d'Or — la moitié de Jaya s'étant envolée dans les cieux entre ses deux visites. Son descendant Mont Blanc Cricket cherchera à réhabiliter son nom.",
 tags:["Jaya","Shandora","Kalgara","Lvneel","exécution","Cité d'Or","North Blue"]},

{id:"c_imu",     name:"Im",                  aliases:["Imu","Le Roi Fantôme","Le Diable"],
 cat:"historique", status:"vivant", birth_yb:900, death_yb:null,
 affiliation:["Gouvernement Mondial"], role:"Roi du Monde (secret)",
 bounty:null, fruit:"Ope Ope no Mi (présumé, immortalité)",
 description:"L'ombre au pouvoir absolu derrière le Gouvernement Mondial. Roi depuis la fin du Siècle Oublié — il y a 800 ans — grâce à une immortalité présumée obtenue via l'Ope Ope no Mi. Siège sur le Trône Vide que les 19 rois avaient juré de ne jamais occuper. Sa seule apparition publique : effacer Lulusia de la carte.",
 tags:["Gouvernement","Trône Vide","immortalité","Siècle Oublié","Lulusia","mystère"]},

{id:"c_vegapunk", name:"Dr Vegapunk",         aliases:["Le Génie Absolu","Le Savant du Futur"],
 cat:"autre", status:"mort", birth_yb:58, death_yb:0,
 affiliation:["Gouvernement Mondial (ex)","MADS (ex)"], role:"Scientifique en Chef",
 bounty:"inconnu", fruit:"Nomi Nomi no Mi (Savoir)",
 description:"Le plus grand génie scientifique du monde. Co-fondateur de MADS. A créé les Pacifistas, cloné des personnages historiques (MADS Clone 01 : Stussy), développé l'Atlas. À Egghead, il révèle au monde entier la vérité sur la montée des eaux et le Siècle Oublié avant d'être assassiné par les Cinq Doyens.",
 tags:["MADS","Pacifista","Egghead","révélations","génie","mort","Cinq Doyens"]}

// ── ANTAGONISTES NOUVEAUX ──────────────────────────────
,{id:"c_marco",    name:"Marco",               aliases:["Marco le Phénix","Premier Commandant de Barbe-Blanche"],
 cat:"pirate", status:"vivant", birth_yb:45, death_yb:null,
 affiliation:["Pirates de Barbe-Blanche"], role:"Commandant 1ère Division",
 bounty:"inconnu", fruit:"Tori Tori no Mi, Modèle : Phénix",
 description:"Bras droit d'Edward Newgate, Marco est le Commandant de la 1ère Division. Son Fruit Mythique Zoan lui permet de se transformer en phénix et de régénérer instantanément ses blessures en flammes bleues. Après Marineford, il prend soin de l'île natale de Barbe-Blanche.",
 tags:["Barbe-Blanche","Phénix","1ère Division","Marineford","Sphinx"]}

,{id:"c_jack",     name:"Jack",                aliases:["Jack la Sécheresse","Catastrophe Jack"],
 cat:"pirate", status:"vivant", birth_yb:28, death_yb:null,
 affiliation:["Pirates des Cent Bêtes"], role:"All-Star / Calamité",
 bounty:"1 000 000 000", fruit:"Zou Zou no Mi, Modèle : Mammouth",
 description:"L'une des trois Calamités de Kaidou, Jack est un Homme-Poisson d'une force monstrueuse. Il a attaqué et dévasté Zou à la recherche de Raizo, gazant les Minks pendant 5 jours. Sa prime d'un milliard avant le Nouveau Monde en faisait déjà une légende.",
 tags:["Kaidou","Calamité","Zou","Minks","Mammouth","Cent Bêtes"]}

,{id:"c_queen",    name:"Queen",               aliases:["Queen la Peste","Calamité de la Maladie"],
 cat:"pirate", status:"vivant", birth_yb:56, death_yb:null,
 affiliation:["Pirates des Cent Bêtes","MADS (ex)"], role:"All-Star / Calamité",
 bounty:"1 320 000 000", fruit:"Ryu Ryu no Mi, Modèle : Brachiosaurus",
 description:"Ancienne membre de MADS aux côtés de Vegapunk, Queen est un scientifique génial et sadique. Deuxième Calamité de Kaidou, il dirige la prison d'Udon à Wano. Spécialiste des armes biologiques et des modifications cybernétiques.",
 tags:["Kaidou","Calamité","MADS","Udon","cybernétique","science","Wano"]}

,{id:"c_king",     name:"King",                aliases:["King le Fléau","Alber","Le Dernier Lunaria"],
 cat:"pirate", status:"vivant", birth_yb:47, death_yb:null,
 affiliation:["Pirates des Cent Bêtes"], role:"All-Star / Calamité",
 bounty:"1 390 000 000", fruit:"Ryu Ryu no Mi, Modèle : Ptéranodon",
 description:"Première Calamité de Kaidou, King est le dernier survivant connu de la race Lunaria — les êtres qui vivaient jadis au sommet du Dos-du-Monde dans le Pays des Dieux. Sa race était croyait invincible : ils pouvaient générer des flammes tout en résistant à tout dommage.",
 tags:["Kaidou","Calamité","Lunaria","Pays des Dieux","dernier survivant","Wano"]}

,{id:"c_caesar",   name:"Caesar Clown",        aliases:["Master","Dr. Clown","Le Pire Scientifique du Monde"],
 cat:"autre", status:"vivant", birth_yb:55, death_yb:null,
 affiliation:["MADS (ex)","Doflamingo (ex)","Gouvernement (ex)"], role:"Scientifique",
 bounty:"300 000 000", fruit:"Gasu Gasu no Mi (Gaz)",
 description:"Ancien collègue de Vegapunk au sein de MADS, Caesar est renvoyé pour ses expériences illégales sur des humains. Il devient le fournisseur de SMILE pour Kaidou via Doflamingo, opérant depuis Punk Hazard. Capturé par Law et Luffy, il sera contraint de servir malgré lui.",
 tags:["MADS","Vegapunk","Punk Hazard","SMILE","gaz","scientifique","Law"]}

,{id:"c_corazon",  name:"Donquixote Rosinante", aliases:["Corazon","Cora-san"],
 cat:"marine", status:"mort", birth_yb:39, death_yb:10,
 affiliation:["Marine (secret)","Pirates de Doflamingo (couverture)"], role:"Agent CP0 / Commandant",
 bounty:null, fruit:"Nagi Nagi no Mi (Silence)",
 description:"Frère cadet de Doflamingo, adopté par Sengoku après le meurtre de son père. Agent secret de la Marine infiltré dans les Pirates de Doflamingo, il tombe amoureux de Law et sacrifie sa vie pour lui permettre de s'échapper avec l'Ope Ope no Mi. Sa mort est le moteur de la vengeance de Law.",
 tags:["Doflamingo","Law","Sengoku","sacrifice","mort","Marine","secret"]}

,{id:"c_katakuri", name:"Charlotte Katakuri",  aliases:["Le Perfection","L'Homme Sans Défauts"],
 cat:"pirate", status:"vivant", birth_yb:48, death_yb:null,
 affiliation:["Pirates de Big Mom"], role:"Commandant de la Flotte / Sweet Commander",
 bounty:"1 057 000 000", fruit:"Mochi Mochi no Mi (Mochi — Logia spéciale)",
 description:"Deuxième fils de Big Mom, Katakuri est le plus puissant Sweet Commander. Son Haki de l'Observation du futur lui permet d'anticiper tous les mouvements ennemis, le rendant presque imbattable. Vaincu par Luffy à Whole Cake Island lors d'un combat épique, il finit par respecter son adversaire.",
 tags:["Big Mom","Sweet Commander","Mochi Mochi","Haki de l'Observation","invaincu","Whole Cake"]}

,{id:"c_smoothie", name:"Charlotte Smoothie",  aliases:["Sweet Commander","Jus de Géante"],
 cat:"pirate", status:"vivant", birth_yb:35, death_yb:null,
 affiliation:["Pirates de Big Mom"], role:"Sweet Commander",
 bounty:"932 000 000", fruit:"Shibo Shibo no Mi (Essorage)",
 description:"Treizième fille de Big Mom et Sweet Commander, Smoothie peut essorer n'importe quel être vivant comme un linge pour en extraire ses fluides et augmenter sa taille. Elle commande la flotte de Big Mom.",
 tags:["Big Mom","Sweet Commander","Shibo Shibo","Whole Cake"]}

,{id:"c_vivi",     name:"Nefertari Vivi",      aliases:["Miss Wednesday","Princesse d'Alabasta"],
 cat:"autre", status:"vivant", birth_yb:18, death_yb:null,
 affiliation:["Royaume d'Alabasta","Baroque Works (ex-infiltrée)"], role:"Princesse",
 bounty:"inconnu", fruit:null,
 description:"Princesse d'Alabasta, fille du Roi Cobra. Infiltrée dans Baroque Works pour découvrir les plans de Crocodile, elle se lie d'amitié profonde avec les Chapeaux de Paille. Elle choisit de rester à Alabasta plutôt que de rejoindre l'équipage. À la Reverie, elle disparaît mystérieusement.",
 tags:["Alabasta","Baroque Works","Crocodile","Cobra","Reverie","disparition"]}

,{id:"c_shirahoshi", name:"Shirahoshi",         aliases:["Poséidon","Princesse Sirène","La Géante Sirène"],
 cat:"autre", status:"vivant", birth_yb:16, death_yb:null,
 affiliation:["Royaume de Ryuuguu"], role:"Princesse / Arme Ancestrale",
 bounty:null, fruit:null,
 description:"Troisième enfant du Roi Neptune, Shirahoshi est la plus grande sirène du monde. Elle est la réincarnation de l'Arme Ancestrale Poséidon — capable d'appeler et de contrôler les Rois des Mers. Elle a passé 10 ans enfermée dans sa tour, terrorisée par les lettres de mort de Vander Decken.",
 tags:["Poséidon","Armes Ancestrales","Rois des Mers","Île des Hommes-Poissons","Neptune"]}

,{id:"c_hiyori",   name:"Kozuki Hiyori",       aliases:["Komurasaki","La plus belle courtisane de Wano"],
 cat:"historique", status:"vivant", birth_yb:25, death_yb:null,
 affiliation:["Clan Kouzuki"], role:"Fille d'Oden / Princesse de Wano",
 bounty:null, fruit:null,
 description:"Fille cadette de Kouzuki Oden, Hiyori ne fut pas envoyée dans le futur comme son frère Momonosuke. Elle vécut sous le nom de Komurasaki, courtisane légendaire de Wano, cachant son identité pendant 20 ans pour survivre et attendre la Rébellion promise par sa mère Toki.",
 tags:["Wano","Kouzuki","Oden","Komurasaki","identité secrète","Toki","Zoro","Enma"]}

,{id:"c_carrot",   name:"Carrot",              aliases:["La Lapin Mink","Sulong Carrot"],
 cat:"pirate", status:"vivant", birth_yb:16, death_yb:null,
 affiliation:["Minks de Zou"], role:"Guerrière / Alliée des Chapeaux de Paille",
 bounty:"inconnu", fruit:null,
 description:"Jeune Mink lapin de Zou, guerrière de la garde d'Inuarashi. Elle se cache à bord du Thousand Sunny et accompagne les Chapeaux de Paille jusqu'à Whole Cake Island. En forme Sulong (transformation sous la pleine lune), elle décime à elle seule une flotte entière.",
 tags:["Minks","Zou","Sulong","Whole Cake Island","Luffy","Inuarashi"]}

,{id:"c_koby",     name:"Koby",                aliases:["Le Héros de Marineford (futur)"],
 cat:"marine", status:"vivant", birth_yb:19, death_yb:null,
 affiliation:["Marine"], role:"Capitaine / SWORD",
 bounty:null, fruit:null,
 description:"Ancien esclave d'Alvida, Koby fut encouragé par Luffy à rejoindre la Marine. Protégé de Garp, il monte en grade rapidement grâce à sa détermination. À Marineford, son cri arrête brièvement les combats. Membre présumé de SWORD, l'unité secrète de la Marine.",
 tags:["Marine","Garp","Alvida","Luffy","Marineford","SWORD","ami de Luffy"]}

,{id:"c_rebecca",  name:"Rebecca",             aliases:["La Gladiatrice","Princesse de Dressrosa"],
 cat:"autre", status:"vivant", birth_yb:16, death_yb:null,
 affiliation:["Royaume de Dressrosa"], role:"Princesse / Gladiatrice",
 bounty:null, fruit:null,
 description:"Fille de Kyros et petite-fille du Roi Riku, Rebecca combattit dans les arènes de Dressrosa sous l'identité de gladiatrice pour survivre après que Doflamingo eut transformé son père en jouet. Elle est délivrée par Luffy lors de la révolution de Dressrosa.",
 tags:["Dressrosa","Kyros","Riku","Luffy","gladiatrice","princesse"]}

,{id:"c_cobra",    name:"Nefertari Cobra",     aliases:["Roi d'Alabasta"],
 cat:"historique", status:"mort", birth_yb:50, death_yb:0,
 affiliation:["Royaume d'Alabasta"], role:"Roi / Clan D. (secret)",
 bounty:null, fruit:null,
 description:"Roi d'Alabasta, père de Vivi et membre secret du Clan D. (Nefertari D.). À la Reverie, il questionne Im sur le Siècle Oublié et la disparition ancestrale de Lily. Il est assassiné par Im peu après, et sa mort est dissimulée par le Gouvernement. Sabo est accusé du meurtre.",
 tags:["Alabasta","Vivi","Reverie","Clan D.","Im","mort","Siècle Oublié","Lily"]}

,{id:"c_killer",   name:"Killer",              aliases:["Massacre Soldier","Le Démon aux Masques"],
 cat:"pirate", status:"vivant", birth_yb:27, death_yb:null,
 affiliation:["Pirates du Kid"], role:"Commandant / Bras Droit",
 bounty:"200 000 000", fruit:null,
 description:"Bras droit d'Eustass Kid et seul membre de l'équipage à ne jamais manger un Fruit du Démon. Après avoir mangé de force un SMILE raté à Wano, il fut contraint de rire en permanence. Libéré après la défaite de Kaidou, il combat aux côtés de Kid contre Big Mom.",
 tags:["Kid","Supernovas","SMILE","Wano","Big Mom","Killer"]}

,{id:"c_neptune",  name:"Neptune",             aliases:["Roi des Mers","Le Grand Neptune"],
 cat:"autre", status:"vivant", birth_yb:70, death_yb:null,
 affiliation:["Royaume de Ryuuguu"], role:"Roi de l'Île des Hommes-Poissons",
 bounty:null, fruit:null,
 description:"Roi de l'Île des Hommes-Poissons, père de Shirahoshi et gardien de l'arche Noah depuis des générations. Il attend depuis des siècles la venue d'un nouveau Joyboy qui pourra tenir la promesse faite à ses ancêtres. La Reverie marque son retour sur la scène mondiale.",
 tags:["Île des Hommes-Poissons","Shirahoshi","Joyboy","Promesse","Noah","Reverie"]}


// ── Personnages supplémentaires ─────────────────────────
,{id:"c_tashigi",    name:"Tashigi",              aliases:["Souhait de la Marine"],
 cat:"marine", status:"vivant", birth_yb:22, death_yb:null,
 affiliation:["Marine"], role:"Capitaine / Adjudante de Smoker",
 bounty:null, fruit:null,
 description:"Adjointe de Smoker et passionnée de sabres légendaires, Tashigi ressemble étrangement à Kuina — l'amie d'enfance défunte de Zoro. Cette ressemblance trouble profondément Zoro. À Punk Hazard, elle prend en charge les enfants libérés de César.",
 tags:["Marine","Smoker","sabres","Zoro","Kuina","Punk Hazard"]}

,{id:"c_helmeppo",   name:"Helmeppo",             aliases:["Fils de Morgan"],
 cat:"marine", status:"vivant", birth_yb:21, death_yb:null,
 affiliation:["Marine"], role:"Lieutenant-Commandant",
 bounty:null, fruit:null,
 description:"Fils du Capitaine Morgan, Helmeppo était un lâche arrogant. Sa rencontre avec Koby et la tutelle de Garp le transforment profondément. Il devient un Marine compétent et fidèle ami de Koby.",
 tags:["Marine","Koby","Morgan","Garp","transformation"]}

,{id:"c_perona",     name:"Perona",               aliases:["Princess Perona","Ghost Princess"],
 cat:"pirate", status:"vivant", birth_yb:22, death_yb:null,
 affiliation:["Pirates de Moria (ex)"], role:"Officière de Thriller Bark",
 bounty:"383 000 000", fruit:"Horo Horo no Mi (Fantôme)",
 description:"Ancienne officière de Moria, Perona crée des fantômes négatifs. Après Thriller Bark, Kuma la téléporte chez Mihawk où elle prend soin de Zoro pendant le timeskip. Leur relation d'ennemis-alliés est l'une des plus drôles de la série.",
 tags:["Moria","Thriller Bark","Zoro","Mihawk","fantômes","timeskip"]}

,{id:"c_kid",        name:"Eustass Kid",          aliases:["Le Tueur"],
 cat:"pirate", status:"vivant", birth_yb:22, death_yb:null,
 affiliation:["Pirates du Kid"], role:"Capitaine",
 bounty:"3 000 000 000", fruit:"Jiki Jiki no Mi (Magnétisme)",
 description:"Supernova au tempérament explosif, rival de Luffy. Sa prime dépassait celle de Luffy avant le Nouveau Monde. À Wano, il s'allie à Law pour vaincre Big Mom. Sa prime atteint 3 milliards après Wano.",
 tags:["Supernovas","Killer","Wano","Big Mom","Jiki Jiki","rival"]}

,{id:"c_bonney",     name:"Jewelry Bonney",       aliases:["La Grande Gourmande","Pirate de l'Âge"],
 cat:"pirate", status:"vivant", birth_yb:22, death_yb:null,
 affiliation:["Pirates de Bonney"], role:"Capitaine",
 bounty:"inconnu", fruit:"Toshi Toshi no Mi (Âge)",
 description:"Supernova dont les pouvoirs modifient l'âge. Fille secrète de Kuma, elle cherche à le libérer de sa transformation. À Egghead, Vegapunk lui révèle la vérité sur son père.",
 tags:["Supernovas","Kuma","Egghead","âge","Vegapunk","Toshi Toshi"]}

,{id:"c_sugar",      name:"Sugar",                aliases:["L'Enfant aux Jouets"],
 cat:"corsaire", status:"vivant", birth_yb:18, death_yb:null,
 affiliation:["Famille Donquixote"], role:"Agent / Tréfle",
 bounty:null, fruit:"Hobi Hobi no Mi (Jouet)",
 description:"Agent de Doflamingo maintenant des milliers d'esclaves-jouets à Dressrosa. Son Hobi Hobi no Mi efface les souvenirs. Son point faible — la terreur — sera exploité brillamment par Usopp.",
 tags:["Doflamingo","jouets","Hobi Hobi","Dressrosa","Monet","esclaves"]}

,{id:"c_cavendish",  name:"Cavendish",            aliases:["Le Beau Pirate","Hakuba"],
 cat:"pirate", status:"vivant", birth_yb:26, death_yb:null,
 affiliation:["Grande Flotte du Chapeau de Paille"], role:"Capitaine",
 bounty:"330 000 000", fruit:null,
 description:"Ancien prince jaloux des Supernovas cachant l'alter-ego Hakuba. À Dressrosa, il choisit de protéger Luffy et rejoint la Grande Flotte par admiration sincère.",
 tags:["Dressrosa","Hakuba","Grande Flotte","beauté","jalousie"]}

,{id:"c_bartolomeo", name:"Bartolomeo",           aliases:["Le Cannibale","Le Plus Grand Fan de Luffy"],
 cat:"pirate", status:"vivant", birth_yb:24, death_yb:null,
 affiliation:["Grande Flotte du Chapeau de Paille"], role:"Capitaine",
 bounty:"200 000 000", fruit:"Bari Bari no Mi (Barrière)",
 description:"Fan absolu de Luffy depuis Loguetown. Son Bari Bari no Mi crée des barrières indestructibles. Sa dévotion comique cache une vraie puissance. Rejoint la Grande Flotte à Dressrosa.",
 tags:["Luffy","fan","Grande Flotte","Dressrosa","Bari Bari","barrière"]}

  ]// end characters
};