// ============================================================
// ÉCOLE DE PENSÉE AKH 313 — CIVILIZATION DATA
// 50+ civilizations mapped across space and time
// ============================================================

// TRADITION TYPES with colors and glow intensities
export const TYPES = {
  civilization:  { color: 0xd4a574, label: 'Civilisation',         glow: 0.4 },
  religion:      { color: 0x4ecdc4, label: 'Religion',             glow: 0.6 },
  philosophy:    { color: 0xa78bfa, label: 'Philosophie',          glow: 0.5 },
  mysticism:     { color: 0xf472b6, label: 'Mysticisme',          glow: 0.7 },
  science:       { color: 0x60a5fa, label: 'Science',             glow: 0.4 },
  esotericism:   { color: 0xfbbf24, label: 'Ésotérisme',          glow: 0.8 },
  school:        { color: 0x34d399, label: 'École de Pensée',     glow: 0.6 },
  sovereignty:   { color: 0xf97316, label: 'Souveraineté',        glow: 0.9 },
};

// GEOGRAPHIC SECTORS (angular position on the disc in degrees)
export const REGIONS = {
  africa:        { angle: 0,   label: 'Afrique',       span: 50 },
  middle_east:   { angle: 55,  label: 'Moyen-Orient',  span: 60 },
  central_asia:  { angle: 120, label: 'Asie Centrale',  span: 40 },
  south_asia:    { angle: 165, label: 'Asie du Sud',    span: 40 },
  east_asia:     { angle: 210, label: 'Asie de l\'Est', span: 40 },
  europe:        { angle: 255, label: 'Europe',         span: 55 },
  americas:      { angle: 315, label: 'Amériques',      span: 40 },
};

// CIVILIZATIONS — each entry has:
// id, name, startYear (negative = BCE), endYear, region, type,
// description, books (curriculum references), subtraditions
export const CIVILIZATIONS = [
  // ─── PRE-HISTORIC & ANCIENT ───
  {
    id: 'gobekli',
    name: 'Göbekli Tepe',
    startYear: -9600,
    endYear: -8000,
    region: 'middle_east',
    type: 'civilization',
    description: 'Le plus ancien complexe monumental connu. Piliers en T sculptés de symboles astronomiques et animaux, suggérant un culte organisé ~7000 ans avant l\'écriture.',
    books: [],
  },
  {
    id: 'sumer',
    name: 'Sumer',
    startYear: -4500,
    endYear: -1900,
    region: 'middle_east',
    type: 'civilization',
    description: 'Première civilisation urbaine. Invention de l\'écriture cunéiforme, du système sexagésimal, de l\'astronomie calendaire. Les tablettes décrivent l\'Anunnaki et le déluge.',
    books: [],
  },
  {
    id: 'kemet',
    name: 'Kemet (Égypte ancienne)',
    startYear: -3100,
    endYear: -30,
    region: 'africa',
    type: 'civilization',
    description: 'Civilisation du Nil. Pyramides, Livre des Morts, Duat (monde intermédiaire). Source de l\'hermétisme via Thoth/Hermès Trismégiste.',
    books: ['Corpus Hermeticum'],
  },
  {
    id: 'indus',
    name: 'Civilisation de l\'Indus',
    startYear: -3300,
    endYear: -1300,
    region: 'south_asia',
    type: 'civilization',
    description: 'Harappa et Mohenjo-daro. Urbanisme avancé, sceaux proto-Shiva, possible berceau du yoga et des premières pratiques méditatives.',
    books: [],
  },
  {
    id: 'vedas',
    name: 'Tradition Védique',
    startYear: -1500,
    endYear: -500,
    region: 'south_asia',
    type: 'religion',
    description: 'Les Védas (Rig, Sama, Yajur, Atharva), Upanishads. Doctrine des yugas, karma, dharma, moksha. Fondement de la cosmologie cyclique hindoue.',
    books: ['Bhagavad-Gîtâ', 'Upanishads'],
  },
  {
    id: 'zoroastre',
    name: 'Zoroastrisme',
    startYear: -1200,
    endYear: 651,
    region: 'middle_east',
    type: 'religion',
    description: 'Zarathoustra. Dualisme Ahura Mazda / Ahriman, eschatologie du Frashokereti, résurrection, jugement final. Influence majeure sur le judaïsme, christianisme et islam.',
    books: ['Avesta (Gathas)'],
  },
  {
    id: 'judaism',
    name: 'Judaïsme',
    startYear: -1200,
    endYear: 2026,
    region: 'middle_east',
    type: 'religion',
    description: 'Torah, tradition prophétique, monothéisme abrahamique. Donne naissance à la Kabbale mystique et au messianisme.',
    books: ['Zohar (Pritzker Ed.)', 'Sefer Yetzirah'],
  },
  {
    id: 'taoism',
    name: 'Taoïsme',
    startYear: -600,
    endYear: 2026,
    region: 'east_asia',
    type: 'philosophy',
    description: 'Laozi, Zhuangzi. Le Tao comme principe d\'unité non-duelle. Wu wei, yin-yang, Yi Jing. Alchimie intérieure (neidan) et cosmologie cyclique.',
    books: ['Tao Te King', 'Zhuangzi'],
  },
  {
    id: 'buddhism',
    name: 'Bouddhisme',
    startYear: -500,
    endYear: 2026,
    region: 'south_asia',
    type: 'religion',
    description: 'Siddhartha Gautama. Noble Vérité, vacuité, interdépendance. Le Bardo Thödol (Livre des Morts tibétain) décrit les états intermédiaires.',
    books: ['Bardo Thödol'],
  },
  {
    id: 'pythagore',
    name: 'Pythagorisme',
    startYear: -570,
    endYear: -300,
    region: 'europe',
    type: 'philosophy',
    description: 'Harmonie des sphères, mathématiques sacrées, métempsycose. Pont entre l\'Égypte, Babylone et la Grèce. Influence directe sur Platon.',
    books: [],
  },
  {
    id: 'platon',
    name: 'Platonisme',
    startYear: -427,
    endYear: -347,
    region: 'europe',
    type: 'philosophy',
    description: 'Théorie des Formes/Idées, allégorie de la caverne, le Bien au-delà de l\'être. Fondement du néoplatonisme et de toute la métaphysique occidentale.',
    books: [],
  },
  {
    id: 'aristote',
    name: 'Aristotélisme',
    startYear: -384,
    endYear: -322,
    region: 'europe',
    type: 'philosophy',
    description: 'Logique formelle, métaphysique de l\'acte et puissance, quatre causes. Transmis aux arabes via Bagdad, devient le vocabulaire de la falsafa.',
    books: [],
  },
  // ─── HELLENISTIC & LATE ANTIQUE ───
  {
    id: 'neoplatonism',
    name: 'Néoplatonisme',
    startYear: 204,
    endYear: 529,
    region: 'middle_east',
    type: 'philosophy',
    description: 'Plotin, Proclus. L\'Un au-delà de l\'être, émanation, retour. Structure reprise par Ibn Arabi, Suhrawardi, la Kabbale. Le pont entre Athènes et Jérusalem.',
    books: ['Plotin — Ennéades'],
  },
  {
    id: 'hermeticism',
    name: 'Hermétisme',
    startYear: -300,
    endYear: 300,
    region: 'africa',
    type: 'esotericism',
    description: 'Thoth/Hermès Trismégiste. Corpus Hermeticum, Tabula Smaragdina. « Ce qui est en haut est comme ce qui est en bas. » Via universalis de Fowden.',
    books: ['Corpus Hermeticum', 'Fowden — Egyptian Hermes'],
  },
  {
    id: 'gnosticism',
    name: 'Gnosticisme',
    startYear: -100,
    endYear: 400,
    region: 'middle_east',
    type: 'mysticism',
    description: 'Gnose directe, Démiurge, étincelle divine captive. Textes de Nag Hammadi. Le plus ancien combat contre le matérialisme spirituel.',
    books: ['Bibliothèque Nag Hammadi', 'Jonas — The Gnostic Religion'],
  },
  {
    id: 'christianity',
    name: 'Christianisme',
    startYear: 30,
    endYear: 2026,
    region: 'middle_east',
    type: 'religion',
    description: 'Jésus (Issa AS). Incarnation, rédemption, amour universel. Tradition mystique : Maître Eckhart, Jean de la Croix, Origène.',
    books: [],
  },
  {
    id: 'mandeism',
    name: 'Mandéisme / Sabéens',
    startYear: -100,
    endYear: 2026,
    region: 'middle_east',
    type: 'religion',
    description: 'Les Sabéens de Harran. Vénération de Jean-Baptiste, astronomie sacrée. Rôle clé dans la transmission du savoir grec vers l\'islam.',
    books: [],
  },
  // ─── ISLAMIC GOLDEN AGE ───
  {
    id: 'islam',
    name: 'Islam',
    startYear: 610,
    endYear: 2026,
    region: 'middle_east',
    type: 'religion',
    description: 'Le Prophète Muhammad (SAWS). Coran, synthèse abrahamique la plus récente. Ouvre à la falsafa, au soufisme, à l\'irfan chiite.',
    books: ['Coran'],
  },
  {
    id: 'kalam',
    name: 'Kalâm (Théologie islamique)',
    startYear: 700,
    endYear: 1200,
    region: 'middle_east',
    type: 'philosophy',
    description: 'Mu\'tazilites, Ash\'arites. Débats sur le libre-arbitre, la nature du Coran, les attributs divins. Rationalisme théologique.',
    books: [],
  },
  {
    id: 'sufism',
    name: 'Soufisme',
    startYear: 750,
    endYear: 2026,
    region: 'middle_east',
    type: 'mysticism',
    description: 'Rumi, Hallaj, Rabia. Voie de l\'amour divin, fana (annihilation du moi), dhikr. Le cœur de l\'islam ésotérique.',
    books: ['Mathnawi de Rumi'],
  },
  {
    id: 'falsafa',
    name: 'Falsafa (Philosophie islamique)',
    startYear: 800,
    endYear: 1200,
    region: 'middle_east',
    type: 'philosophy',
    description: 'Al-Kindi, Al-Farabi, Ibn Sina (Avicenne), Ibn Rushd (Averroès). Synthèse Aristote-Plotin-Coran. L\'Intellect Agent comme pont vers Dieu.',
    books: [],
  },
  {
    id: 'suhrawardi',
    name: 'Ishrâq (Illuminationnisme)',
    startYear: 1154,
    endYear: 1191,
    region: 'middle_east',
    type: 'philosophy',
    description: 'Suhrawardi. Hikmat al-Ishrâq. Connaissance par présence (ilm huzuri), lumières orientales, résurrection de la sagesse perse. Exécuté à 36 ans.',
    books: ['Suhrawardi — Hikmat al-Ishrâq', 'Walbridge — Leaven of the Ancients'],
  },
  {
    id: 'ibn_arabi',
    name: 'Ibn Arabi — Wahdat al-Wujûd',
    startYear: 1165,
    endYear: 1240,
    region: 'middle_east',
    type: 'mysticism',
    description: 'Le plus grand maître (al-Shaykh al-Akbar). Unité de l\'Être, Imagination créatrice, Homme Parfait. Les Futûhât et Fusûs.',
    books: ['Chittick — Sufi Path of Knowledge', 'Fusûs al-Hikam'],
  },
  {
    id: 'kabbalah',
    name: 'Kabbale',
    startYear: 1200,
    endYear: 2026,
    region: 'europe',
    type: 'mysticism',
    description: 'Zohar, sefirot, Ein Sof, tzimtzum. L\'arbre de vie comme carte du divin. Parallèles directs avec l\'émanation néoplatonicienne et les noms divins islamiques.',
    books: ['Zohar (Pritzker Ed.)', 'Sefer Yetzirah', 'Matt — Essential Kabbalah'],
  },
  {
    id: 'mulla_sadra',
    name: 'Mulla Sadra — Hikmat Muta\'âliya',
    startYear: 1572,
    endYear: 1640,
    region: 'middle_east',
    type: 'philosophy',
    description: 'Philosophie transcendante. Mouvement substantiel (harakat jawhariyya), unité de l\'intellect et de l\'intelligible. Synthèse Avicenne-Suhrawardi-Ibn Arabi.',
    books: ['Rizvi — Mulla Sadra and Metaphysics', 'Asfar (Les Quatre Voyages)'],
  },
  {
    id: 'corbin',
    name: 'Henry Corbin',
    startYear: 1903,
    endYear: 1978,
    region: 'europe',
    type: 'philosophy',
    description: 'L\'homme qui a révélé Suhrawardi et l\'Iran spirituel à l\'Occident. Mundus imaginalis, angélologie, la philosophie comme « prière ». Le pont Heidegger-Islam.',
    books: ['Corbin — En Islam iranien (4 vol.)', 'Corbin — L\'Homme de Lumière'],
  },
  // ─── THE KANT BRIDGE ───
  {
    id: 'kant',
    name: 'Emmanuel Kant',
    startYear: 1724,
    endYear: 1804,
    region: 'europe',
    type: 'philosophy',
    description: 'Critique de la Raison Pure. Les limites de la raison ouvrent l\'espace pour la foi. Porte d\'entrée épistémologique de l\'école AKH 313.',
    books: ['Critique de la Raison Pure', 'Critique de la Raison Pratique'],
  },
  {
    id: 'larijani',
    name: 'Ali Larijani',
    startYear: 1957,
    endYear: 2026,
    region: 'middle_east',
    type: 'philosophy',
    description: 'Pont Kant → philosophie islamique. Critique des limitations kantiennes via la philosophie islamique, ouvrant la voie à la connaissance présencielle.',
    books: ['Larijani — œuvres philosophiques'],
  },
  {
    id: 'hairi_yazdi',
    name: 'Mehdi Ha\'iri Yazdi',
    startYear: 1923,
    endYear: 1999,
    region: 'middle_east',
    type: 'philosophy',
    description: 'The Principles of Epistemology in Islamic Philosophy. Pont analytique entre épistémologie occidentale et ilm huzuri (connaissance par présence).',
    books: ['Ha\'iri Yazdi — Principles of Epistemology'],
  },
  // ─── AFRICAN TRADITIONS ───
  {
    id: 'kongo',
    name: 'Cosmologie Kongo',
    startYear: -1000,
    endYear: 2026,
    region: 'africa',
    type: 'philosophy',
    description: 'Dikenga dia Kongo (cosmogramme). Kalunga (ligne de séparation vivants/ancêtres). Cycle vie-mort-renaissance. Fu-Kiau comme interprète contemporain.',
    books: ['Fu-Kiau — African Cosmology of the Bantu-Kongo'],
  },
  {
    id: 'yoruba',
    name: 'Tradition Yoruba / Ifá',
    startYear: -500,
    endYear: 2026,
    region: 'africa',
    type: 'religion',
    description: 'Orishas, divination Ifá, Odu. Système cosmologique complet avec 256 configurations du destin. Olodumare comme Être suprême.',
    books: [],
  },
  {
    id: 'kamite',
    name: 'Philosophie Kamite (Afrocentrique)',
    startYear: -3000,
    endYear: 2026,
    region: 'africa',
    type: 'philosophy',
    description: 'Cheikh Anta Diop, Théophile Obenga. L\'Afrique comme berceau de la philosophie. Maât comme premier concept éthique universel.',
    books: ['Diop — Nations nègres et culture'],
  },
  // ─── MESOAMERICAN ───
  {
    id: 'maya',
    name: 'Civilisation Maya',
    startYear: -2000,
    endYear: 1500,
    region: 'americas',
    type: 'civilization',
    description: 'Calendrier long, astronomie de précision, Popol Vuh. Les Cinq Soleils, Xibalba (monde intermédiaire), les Jumeaux Héros.',
    books: ['Popol Vuh'],
  },
  {
    id: 'aztec',
    name: 'Civilisation Aztèque',
    startYear: 1300,
    endYear: 1521,
    region: 'americas',
    type: 'civilization',
    description: 'Tlamatimine (sages). Teotl comme force cosmique unique. Fleur et Chant (in xochitl in cuicatl) comme voie de connaissance.',
    books: ['León-Portilla — Aztec Thought and Culture'],
  },
  // ─── TIBETAN ───
  {
    id: 'tibet',
    name: 'Bouddhisme Tibétain',
    startYear: 700,
    endYear: 2026,
    region: 'east_asia',
    type: 'religion',
    description: 'Vajrayana, Kalachakra, prophétie de Shambhala. Le Bardo Thödol comme manuel de navigation du monde intermédiaire.',
    books: ['Bardo Thödol', 'Evans-Wentz — Tibetan Book of the Dead'],
  },
  // ─── PICATRIX & ASTRAL ───
  {
    id: 'picatrix',
    name: 'Picatrix (Ghâyat al-Hakîm)',
    startYear: 1000,
    endYear: 1200,
    region: 'middle_east',
    type: 'esotericism',
    description: 'Le « but du sage ». Magie astrale, talismans planétaires, théurgie. Synthèse hermétique-sabéenne-islamique. Influence majeure sur la Renaissance.',
    books: ['Picatrix (Ghâyat al-Hakîm)'],
  },
  // ─── RENAISSANCE & EARLY MODERN ───
  {
    id: 'renaissance_hermeticism',
    name: 'Hermétisme Renaissance',
    startYear: 1460,
    endYear: 1600,
    region: 'europe',
    type: 'esotericism',
    description: 'Ficin traduit le Corpus Hermeticum. Pic de la Mirandole, Giordano Bruno. La magie comme technologie de l\'âme.',
    books: ['Corpus Hermeticum'],
  },
  {
    id: 'rosicrucian',
    name: 'Rosicrucianisme',
    startYear: 1614,
    endYear: 1700,
    region: 'europe',
    type: 'esotericism',
    description: 'Fama Fraternitatis, Confessio. Christian Rosenkreutz. Alchimie spirituelle, réforme du savoir. Proto-maçonnerie.',
    books: [],
  },
  // ─── PERENNIALISM ───
  {
    id: 'guenon',
    name: 'René Guénon',
    startYear: 1886,
    endYear: 1951,
    region: 'europe',
    type: 'philosophy',
    description: 'La Crise du monde moderne, Le Roi du Monde. Tradition primordiale, critique de la modernité. Converti à l\'Islam soufi.',
    books: ['Guénon — La Crise du monde moderne'],
  },
  {
    id: 'schuon',
    name: 'Frithjof Schuon',
    startYear: 1907,
    endYear: 1998,
    region: 'europe',
    type: 'philosophy',
    description: 'L\'Unité transcendante des religions. Pérennialisme : toutes les traditions partagent un noyau ésotérique commun.',
    books: ['Schuon — L\'Unité transcendante des religions'],
  },
  // ─── MODERN BRIDGES ───
  {
    id: 'nasr',
    name: 'Seyyed Hossein Nasr',
    startYear: 1933,
    endYear: 2026,
    region: 'middle_east',
    type: 'philosophy',
    description: 'Science et civilisation en Islam. Philosophie pérenne dans le contexte islamique. Pont entre tradition et monde moderne.',
    books: ['Nasr — Knowledge and the Sacred'],
  },
  {
    id: 'dugin',
    name: 'Alexandre Douguine',
    startYear: 1962,
    endYear: 2026,
    region: 'europe',
    type: 'philosophy',
    description: 'Noomakhia, Quatrième Théorie Politique. Multipolarité, archétypes civilisationnels. Critique radicale du libéralisme.',
    books: ['Dugin — Noomakhia'],
  },
  // ─── AKH 313 ───
  {
    id: 'akh313',
    name: 'École AKH 313',
    startYear: 2025,
    endYear: 2026,
    region: 'europe',
    type: 'sovereignty',
    description: 'Synthèse de 24 écoles, 48 livres. Finance, Code, BJJ comme pratiques spirituelles. DAO décentralisée. Ère du Verseau.',
    books: ['Document fondateur AKH 313'],
  },
  // ─── PRACTICAL SOVEREIGNTY ───
  {
    id: 'bjj',
    name: 'Jiu-Jitsu Brésilien',
    startYear: 1920,
    endYear: 2026,
    region: 'americas',
    type: 'sovereignty',
    description: 'Hélio et Carlos Gracie. L\'art doux. Le tapis comme miroir — pas de mensonge possible. Souveraineté du corps.',
    books: [],
  },
  {
    id: 'bitcoin',
    name: 'Bitcoin & Crypto',
    startYear: 2009,
    endYear: 2026,
    region: 'europe',
    type: 'sovereignty',
    description: 'Satoshi Nakamoto. Décentralisation financière. Souveraineté monétaire. Le trading comme discipline spirituelle.',
    books: [],
  },
  {
    id: 'open_source',
    name: 'Mouvement Open Source',
    startYear: 1983,
    endYear: 2026,
    region: 'americas',
    type: 'sovereignty',
    description: 'Stallman, Torvalds. Le code libre comme acte politique. Souveraineté technologique. « Le savoir partagé est le savoir multiplié. »',
    books: [],
  },
];

// ─── CONNECTIONS ───
// Transmission chains between traditions
export const CONNECTIONS = [
  // Kemet → Hermétisme
  { from: 'kemet', to: 'hermeticism', label: 'Thoth → Hermès' },
  // Kemet → Gnosticisme
  { from: 'kemet', to: 'gnosticism', label: 'Gnose alexandrine' },
  // Hermétisme → Renaissance
  { from: 'hermeticism', to: 'renaissance_hermeticism', label: 'Corpus Hermeticum' },
  // Zoroastre → Judaism
  { from: 'zoroastre', to: 'judaism', label: 'Eschatologie, anges' },
  // Zoroastre → Islam
  { from: 'zoroastre', to: 'islam', label: 'Sagesse perse (hikmat khusrawani)' },
  // Platon → Néoplatonisme
  { from: 'platon', to: 'neoplatonism', label: 'L\'Un au-delà de l\'être' },
  // Néoplatonisme → Suhrawardi
  { from: 'neoplatonism', to: 'suhrawardi', label: 'Lumière des lumières' },
  // Néoplatonisme → Kabbale
  { from: 'neoplatonism', to: 'kabbalah', label: 'Émanation → Sefirot' },
  // Aristote → Falsafa
  { from: 'aristote', to: 'falsafa', label: 'Traductions de Bagdad' },
  // Falsafa → Suhrawardi
  { from: 'falsafa', to: 'suhrawardi', label: 'Critique de l\'aristotélisme pur' },
  // Suhrawardi → Mulla Sadra
  { from: 'suhrawardi', to: 'mulla_sadra', label: 'Hikmat al-Ishrâq → Muta\'âliya' },
  // Ibn Arabi → Mulla Sadra
  { from: 'ibn_arabi', to: 'mulla_sadra', label: 'Wahdat al-wujûd' },
  // Sufism → Ibn Arabi
  { from: 'sufism', to: 'ibn_arabi', label: 'Voie ésotérique' },
  // Mulla Sadra → Corbin
  { from: 'mulla_sadra', to: 'corbin', label: 'Iran spirituel' },
  // Suhrawardi → Corbin
  { from: 'suhrawardi', to: 'corbin', label: 'Redécouverte par Corbin' },
  // Corbin → AKH 313
  { from: 'corbin', to: 'akh313', label: 'Mundus imaginalis' },
  // Kant → Larijani
  { from: 'kant', to: 'larijani', label: 'Critique → pont islamique' },
  // Kant → Ha'iri Yazdi
  { from: 'kant', to: 'hairi_yazdi', label: 'Épistémologie analytique' },
  // Larijani → AKH 313
  { from: 'larijani', to: 'akh313', label: 'Pont Est-Ouest' },
  // Ha'iri Yazdi → AKH 313
  { from: 'hairi_yazdi', to: 'akh313', label: 'Ilm huzuri' },
  // Guénon → Schuon
  { from: 'guenon', to: 'schuon', label: 'Tradition primordiale' },
  // Schuon → AKH 313
  { from: 'schuon', to: 'akh313', label: 'Unité transcendante' },
  // Gnosticism → Sufism
  { from: 'gnosticism', to: 'sufism', label: 'Gnose directe → Irfan' },
  // Vedas → Buddhism
  { from: 'vedas', to: 'buddhism', label: 'Réforme/continuation' },
  // Buddhism → Tibet
  { from: 'buddhism', to: 'tibet', label: 'Vajrayana' },
  // Islam → Kalam
  { from: 'islam', to: 'kalam', label: 'Théologie rationnelle' },
  // Islam → Sufism
  { from: 'islam', to: 'sufism', label: 'Dimension intérieure' },
  // Picatrix → Renaissance
  { from: 'picatrix', to: 'renaissance_hermeticism', label: 'Magie astrale' },
  // Hermeticism → Picatrix
  { from: 'hermeticism', to: 'picatrix', label: 'Tradition sabéenne' },
  // BJJ → AKH 313
  { from: 'bjj', to: 'akh313', label: 'Souveraineté du corps' },
  // Bitcoin → AKH 313
  { from: 'bitcoin', to: 'akh313', label: 'Souveraineté financière' },
  // Open Source → AKH 313
  { from: 'open_source', to: 'akh313', label: 'Souveraineté technologique' },
  // Christianity → Islam
  { from: 'christianity', to: 'islam', label: 'Continuité abrahamique' },
  // Judaism → Christianity
  { from: 'judaism', to: 'christianity', label: 'Racine prophétique' },
  // Judaism → Islam
  { from: 'judaism', to: 'islam', label: 'Héritage abrahamique' },
  // Kongo → AKH 313
  { from: 'kongo', to: 'akh313', label: 'Cosmogramme africain' },
  // Maya → AKH 313
  { from: 'maya', to: 'akh313', label: 'Cycles cosmiques' },
];
