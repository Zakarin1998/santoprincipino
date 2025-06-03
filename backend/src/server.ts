import express from 'express';
import cors from 'cors';

const app = express();
// Utilizziamo la porta 3030 che dovrebbe essere libera
const PORT = 3030;
// Middleware
app.use(cors());
app.use(express.json());

// Mock Data

// Dati di Chiara per il profilo kawaii
const chiaraData = {
  profile: {
    name: 'Chiara',
    title: 'Chiara\'s Art World',
    tagline: 'Kawaii & Cute Illustrations ✨ Commission Open ✨',
    bio: 'Ciao! I\'m Chiara, a digital artist specializing in cute, kawaii-style illustrations. I love creating adorable characters and bringing smiles with my colorful artworks!',
    bioDetails: [
      'My art style is influenced by Japanese kawaii culture, cartoon aesthetics, and my love for all things cute and pastel-colored.',
      'When I\'m not drawing, I enjoy watching anime, collecting plushies, and drinking way too much bubble tea! ✨🧋✨'
    ],
    avatarImage: 'https://i.ibb.co/PssMw2w/home-4.jpg',
    subtitle: 'Artist • Illustrator • Dreamer',
    socialLinks: {
      instagram: 'https://instagram.com/santoprincipino',
      twitter: 'https://twitter.com/santoprincipino',
      discord: 'santoprincipino#1234'
    }
  },
  gallery: [
      {
        "id": 1,
        "title": "Fairy Guardian of the Forest",
        "image": "https://i.ibb.co/b5VB1Vz/saint-principino-001.jpg",
        "description": "A magical fairy with emerald wings who protects the ancient forest.",
        "category": "fairies"
      },
      {
        "id": 2,
        "title": "Moonlight Fairy",
        "image": "https://i.ibb.co/FLRTqcH/saint-principino-002.jpg",
        "description": "A celestial fairy who draws her power from the moon's glow.",
        "category": "fairies"
      },
      {
        "id": 3,
        "title": "Twilight Fairy Princess",
        "image": "https://i.ibb.co/FLRTqcH/saint-principino-002-b.jpg",
        "description": "The princess of the twilight realm, where day meets night.",
        "category": "fairies"
      },
      {
        "id": 4,
        "title": "Crystal Fairy",
        "image": "https://i.ibb.co/xtPTTSb/saint-principino-003.jpg",
        "description": "A fairy born from the purest crystal, her wings shimmer with rainbow light.",
        "category": "fairies"
      },
      {
        "id": 5,
        "title": "Spring Blossom Fairy",
        "image": "https://i.ibb.co/HLKD9KK/saint-principino-004.jpg",
        "description": "The harbinger of spring who brings flowers to bloom with her touch.",
        "category": "fairies"
      },
  ],
  commissions: {
    status: "open",
    waitTime: "1-2 weeks",
    types: [
      {
        type: "Character Design",
        price: "$40-60",
        description: "Full character design with color and simple background"
      },
      {
        type: "Illustrations",
        price: "$70-120",
        description: "Detailed illustration with background and multiple characters"
      },
      {
        type: "Emotes & Stickers",
        price: "$15-25 each",
        description: "Cute emotes and stickers for Discord, Twitch, etc."
      },
      {
        type: "Custom Art",
        price: "Contact me",
        description: "For special requests or commercial work"
      }
    ],
    notes: [
      "All commissions require a 50% deposit upfront",
      "Turnaround time is usually 1-2 weeks depending on complexity",
      "I reserve the right to decline any commission request",
      "I'll provide sketches for approval before finalizing",
      "Contact me via Discord for fastest response!"
    ]
  },
  testimonials: [
    {
      name: "Luna",
      avatar: "https://i.ibb.co/PssMw2w/home-4.jpg",
      comment: "Chiara's art is so adorable! I commissioned a character design and couldn't be happier with the result. Fast and professional service!",
      rating: 5
    },
    {
      name: "Mark",
      avatar: "https://i.ibb.co/PssMw2w/home-4.jpg",
      comment: "The emotes Chiara made for my Twitch channel are perfect! My viewers love them and they perfectly capture the cute style I was looking for.",
      rating: 5
    },
    {
      name: "Sophia",
      avatar: "https://i.ibb.co/PssMw2w/home-4.jpg",
      comment: "Working with Chiara was a dream! She was responsive, took my feedback well, and delivered an illustration that exceeded my expectations.",
      rating: 5
    }
  ]
};

// Fairy collection separate endpoint
const fairyCollection = [
  {
    "id": 1,
    "title": "Fairy Guardian of the Forest",
    "image": "https://i.ibb.co/b5VB1Vz/saint-principino-001.jpg",
    "description": "A magical fairy with emerald wings who protects the ancient forest.",
    "details": "This fairy guardian has lived for centuries, watching over the oldest trees in the enchanted forest. Her wings change color with the seasons, and she can communicate with all woodland creatures.",
    "powers": ["Nature magic", "Animal communication", "Healing touch"],
    "category": "fairies"
  },
  {
    "id": 2,
    "title": "Moonlight Fairy",
    "image": "https://i.ibb.co/FLRTqcH/saint-principino-002.jpg",
    "description": "A celestial fairy who draws her power from the moon's glow.",
    "details": "Born during a lunar eclipse, this fairy's silvery wings reflect moonlight even in complete darkness. She guides lost travelers by night and brings peaceful dreams to children.",
    "powers": ["Illumination", "Dream weaving", "Night vision"],
    "category": "fairies"
  },
  {
    "id": 3,
    "title": "Twilight Fairy Princess",
    "image": "https://i.ibb.co/FLRTqcH/saint-principino-002-b.jpg",
    "description": "The princess of the twilight realm, where day meets night.",
    "details": "As ruler of the twilight hours, this fairy princess maintains the delicate balance between day and night. Her crown is made from the first rays of dawn and the last light of dusk.",
    "powers": ["Time manipulation", "Twilight portals", "Shadow weaving"],
    "category": "fairies"
  },
  {
    "id": 4,
    "title": "Crystal Fairy",
    "image": "https://i.ibb.co/xtPTTSb/saint-principino-003.jpg",
    "description": "A fairy born from the purest crystal, her wings shimmer with rainbow light.",
    "details": "This fairy emerged from a rare crystal formed deep within the earth over thousands of years. Her touch can turn ordinary stones into precious gems, and her laughter sounds like wind chimes.",
    "powers": ["Crystallomancy", "Light refraction", "Gemstone creation"],
    "category": "fairies"
  },
  {
    "id": 5,
    "title": "Spring Blossom Fairy",
    "image": "https://i.ibb.co/HLKD9KK/saint-principino-004.jpg",
    "description": "The harbinger of spring who brings flowers to bloom with her touch.",
    "details": "This fairy awakens each year when the snow begins to melt. Her gossamer wings carry the scent of fresh blossoms, and wherever she dances, flowers burst into bloom regardless of season.",
    "powers": ["Flora acceleration", "Pollen control", "Seasonal awakening"],
    "category": "fairies"
  }
];

// API Routes
app.get('/api/chiara/profile', (req, res) => {
  res.json(chiaraData.profile);
});

app.get('/api/chiara/gallery', (req, res) => {
  const { category } = req.query;

  if (category && category !== 'all') {
    const filteredGallery = chiaraData.gallery.filter(item => item.category === category);
    res.json(filteredGallery);
  } else {
    res.json(chiaraData.gallery);
  }
});

app.get('/api/chiara/commissions', (req, res) => {
  res.json(chiaraData.commissions);
});

app.get('/api/chiara/testimonials', (req, res) => {
  res.json(chiaraData.testimonials);
});

app.get('/api/chiara', (req, res) => {
  res.json(chiaraData);
});

// New endpoint for fairy collection
app.get('/api/fairies', (req, res) => {
  res.json(fairyCollection);
});

// Get a specific fairy by ID
app.get('/api/fairies/:id', (req, res) => {
  const fairyId = parseInt(req.params.id);
  const fairy = fairyCollection.find(f => f.id === fairyId);

  if (fairy) {
    res.json(fairy);
  } else {
    res.status(404).json({ message: "Fairy not found" });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running properly' });
});

// Semplice avvio del server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

