import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

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
    avatarImage: 'https://i.ibb.co/PssMw2wQ/home-4.jpg',
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
        "title": "Kawaii Bunny",
        "image": "https://www.freepik.com/free-vector/cute-rabbit-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_13888817.htm",
        "description": "A cute bunny character in pastel colors",
        "category": "characters"
      },
      {
        "id": 2,
        "title": "Forest Friends",
        "image": "https://www.freepik.com/free-vector/watercolor-forest-animals-element-collection_10646925.htm",
        "description": "A collection of adorable forest animals",
        "category": "characters"
      },
      {
        "id": 3,
        "title": "Magic Unicorn",
        "image": "https://www.freepik.com/free-vector/unicorn-cartoon-character-with-dream-little-dream-font-banner_13888819.htm",
        "description": "A sparkly unicorn with rainbow mane",
        "category": "characters"
      },
      {
        "id": 4,
        "title": "Sweet Treats",
        "image": "https://www.freepik.com/free-vector/hand-drawn-kawaii-food-illustration_13888820.htm",
        "description": "Cute dessert characters with smiling faces",
        "category": "food"
      },
      {
        "id": 5,
        "title": "Pastel Landscape",
        "image": "https://www.freepik.com/free-vector/hand-painted-mountains-background_13888821.htm",
        "description": "Dreamy pastel landscape with cute elements",
        "category": "backgrounds"
      },
      {
        "id": 6,
        "title": "Kitty Dreams",
        "image": "https://www.vecteezy.com/vector-art/13888822-sleeping-cat-cartoon-vector-illustration",
        "description": "A sleepy kitten dreaming of yarn balls",
        "category": "characters"
      },
      {
        "id": 7,
        "title": "Cupcake Party",
        "image": "https://www.freepik.com/free-vector/flat-kawaii-food-collection_13888823.htm",
        "description": "Adorable cupcakes with happy faces celebrating",
        "category": "food"
      },
      {
        "id": 8,
        "title": "Space Adventure",
        "image": "https://www.freepik.com/free-vector/alien-spaceship-stars_13888824.htm",
        "description": "Cute characters exploring the cosmos",
        "category": "backgrounds"
      }
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
      avatar: "https://i.ibb.co/PssMw2wQ/home-4.jpg",
      comment: "Chiara's art is so adorable! I commissioned a character design and couldn't be happier with the result. Fast and professional service!",
      rating: 5
    },
    {
      name: "Mark",
      avatar: "https://i.ibb.co/PssMw2wQ/home-4.jpg",
      comment: "The emotes Chiara made for my Twitch channel are perfect! My viewers love them and they perfectly capture the cute style I was looking for.",
      rating: 5
    },
    {
      name: "Sophia",
      avatar: "https://i.ibb.co/PssMw2wQ/home-4.jpg",
      comment: "Working with Chiara was a dream! She was responsive, took my feedback well, and delivered an illustration that exceeded my expectations.",
      rating: 5
    }
  ]
};

// Nuove rotte per i dati di Chiara
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

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

