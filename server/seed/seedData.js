export const categoriesData = [
  {
    name: 'Indoor Plants',
    slug: 'indoor-plants',
    description: 'Lush, air-purifying foliage suited for low, medium, and indirect light interiors.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
    icon: 'Home',
    itemCount: 12,
    featured: true
  },
  {
    name: 'Outdoor Plants',
    slug: 'outdoor-plants',
    description: 'Sun-loving shrubs, perennials, and resilient ornamental beauties for balconies and gardens.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    icon: 'Sun',
    itemCount: 6,
    featured: true
  },
  {
    name: 'Flowering Plants',
    slug: 'flowering-plants',
    description: 'Vibrant blooms that infuse aroma, radiance, and seasonal color into your living space.',
    image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80',
    icon: 'Flower2',
    itemCount: 5,
    featured: true
  },
  {
    name: 'Air Purifying',
    slug: 'air-purifying',
    description: 'NASA-certified natural air purifiers proven to absorb VOCs, toxins, and stale indoor air.',
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=800&q=80',
    icon: 'Wind',
    itemCount: 8,
    featured: true
  },
  {
    name: 'Succulents & Cacti',
    slug: 'succulents-cacti',
    description: 'Drought-tolerant architectural wonders needing minimal care and maximum elegance.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80',
    icon: 'Sparkles',
    itemCount: 6,
    featured: true
  },
  {
    name: 'Bonsai',
    slug: 'bonsai',
    description: 'Ancient art of living miniature trees cultivated with patience and artistic precision.',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80',
    icon: 'TreePine',
    itemCount: 4,
    featured: true
  },
  {
    name: 'Seeds',
    slug: 'seeds',
    description: 'Non-GMO heirloom herbs, culinary vegetables, and fragrant wildflower seeds.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80',
    icon: 'Sprout',
    itemCount: 5,
    featured: false
  },
  {
    name: 'Pots & Planters',
    slug: 'pots-planters',
    description: 'Artisan terracotta, ceramic glazed, and minimalist geometric self-watering vessels.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    icon: 'Container',
    itemCount: 4,
    featured: true
  },
  {
    name: 'Soil & Fertilizers',
    slug: 'soil-fertilizers',
    description: 'Microbe-rich organic potting blends, vermicompost, and botanical growth boosters.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    icon: 'Layers',
    itemCount: 3,
    featured: false
  },
  {
    name: 'Garden Tools',
    slug: 'garden-tools',
    description: 'Precision brass misters, ergonomic forged pruners, and moisture sensors.',
    image: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?auto=format&fit=crop&w=800&q=80',
    icon: 'Wrench',
    itemCount: 3,
    featured: false
  },
  {
    name: 'Garden Decor',
    slug: 'garden-decor',
    description: 'Handmade plant stands, crystal terrariums, and botanical ambient accents.',
    image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=800&q=80',
    icon: 'Palette',
    itemCount: 2,
    featured: false
  },
  {
    name: 'Plant Combos',
    slug: 'plant-combos',
    description: 'Curated value bundles pairing complementary plants with coordinating planters.',
    image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80',
    icon: 'PackagePlus',
    itemCount: 4,
    featured: true
  }
];

export const productsData = [
  // 1. Monstera Deliciosa
  {
    name: 'Monstera Deliciosa (Swiss Cheese Plant)',
    botanicalName: 'Monstera deliciosa Liebm.',
    slug: 'monstera-deliciosa',
    categorySlug: 'indoor-plants',
    description: 'Iconic split-leaf tropical climbing masterpiece. Famous for its bold fenestrated leaves that bring instant jungle grandeur into living rooms and sunlit studios. Highly resilient, adaptable, and naturally air-purifying.',
    shortDescription: 'The quintessential tropical icon with sculptural split leaves.',
    price: 549,
    originalPrice: 899,
    discount: 39,
    images: [
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 148,
    stock: 35,
    tags: ['Tropical', 'Air Purifying', 'Statement Plant', 'Fast Growing'],
    spaces: ['Living Room', 'Office', 'Balcony'],
    care: {
      light: 'Bright Indirect Light (Tolerates medium)',
      water: 'Water when top 2 inches dry out (every 7-9 days)',
      temperature: '18°C – 32°C',
      humidity: '60% – 80% (misting appreciated)',
      petFriendly: false,
      height: '60 – 120 cm (Mature)',
      difficulty: 'Easy',
      feeding: 'Balanced liquid organic fertilizer monthly during summer',
      repotting: 'Every 18 months in spring'
    },
    sizes: [
      { name: 'Small (4" Nursery Pot)', price: 349, originalPrice: 499, inStock: true },
      { name: 'Medium (6" Nursery Pot)', price: 549, originalPrice: 899, inStock: true },
      { name: 'Large (10" Ceramic Planter)', price: 1199, originalPrice: 1699, inStock: true }
    ],
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: 'Bestseller'
  },

  // 2. Fiddle Leaf Fig
  {
    name: 'Fiddle Leaf Fig (Ficus Lyrata)',
    botanicalName: 'Ficus lyrata Warb.',
    slug: 'fiddle-leaf-fig',
    categorySlug: 'indoor-plants',
    description: 'The crowning jewel of interior architectural design. Boasts giant, violin-shaped glossy green leaves that command attention in corners, entryways, and airy living rooms.',
    shortDescription: 'Dramatic architectural tree with large violin-shaped leaves.',
    price: 799,
    originalPrice: 1299,
    discount: 38,
    images: [
      'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 92,
    stock: 20,
    tags: ['Architectural', 'Statement', 'Interior Favorite'],
    spaces: ['Living Room', 'Entrance', 'Office'],
    care: {
      light: 'Abundant Bright Filtered Light',
      water: 'Water thoroughly when top 2-3 inches feel dry (every 8-10 days)',
      temperature: '18°C – 28°C',
      humidity: '50% – 70%',
      petFriendly: false,
      height: '90 – 180 cm',
      difficulty: 'Moderate',
      feeding: 'Foliage boost organic feed once every 4 weeks',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'Standard (6" Pot)', price: 799, originalPrice: 1299, inStock: true },
      { name: 'XL Specimen (10" Pot)', price: 1699, originalPrice: 2499, inStock: true }
    ],
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: 'Editor’s Choice'
  },

  // 3. Snake Plant Laurentii
  {
    name: 'Snake Plant Laurentii (Sansevieria)',
    botanicalName: 'Dracaena trifasciata (Prain) Mabb.',
    slug: 'snake-plant-laurentii',
    categorySlug: 'air-purifying',
    description: 'Virtually indestructible and one of the highest rated NASA air-purifiers. Releases oxygen at night, making it the supreme bedroom companion. Displays striking golden-yellow striped margins.',
    shortDescription: 'Indestructible nighttime oxygen generator with golden margins.',
    price: 349,
    originalPrice: 599,
    discount: 41,
    images: [
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 230,
    stock: 60,
    tags: ['Low Light', 'Bedroom Plant', 'Night Oxygen', 'Unkillable'],
    spaces: ['Bedroom', 'Office', 'Living Room', 'Balcony'],
    care: {
      light: 'Any light level: Deep shade to bright direct sunlight',
      water: 'Sparse: Every 2 to 3 weeks. Allow soil to dry completely.',
      temperature: '15°C – 35°C',
      humidity: 'Tolerates low humidity',
      petFriendly: false,
      height: '40 – 80 cm',
      difficulty: 'Easy',
      feeding: 'Twice a year with vermicompost',
      repotting: 'Every 3 years'
    },
    sizes: [
      { name: 'Compact (4" Pot)', price: 249, originalPrice: 399, inStock: true },
      { name: 'Standard (6" Pot)', price: 349, originalPrice: 599, inStock: true },
      { name: 'Tall Floor (8" Pot)', price: 699, originalPrice: 999, inStock: true }
    ],
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: 'NASA Air Purifier'
  },

  // 4. Peace Lily Spathiphyllum
  {
    name: 'Peace Lily (Spathiphyllum Pearl)',
    botanicalName: 'Spathiphyllum wallisii',
    slug: 'peace-lily-spathiphyllum',
    categorySlug: 'flowering-plants',
    description: 'Serene porcelain-white blooms contrasting against rich emerald leaves. It visibly droops when thirsty and perks right back up within hours of watering, teaching plant owners how to care intuitively.',
    shortDescription: 'Pure white blooms and expressive glossy foliage.',
    price: 399,
    originalPrice: 650,
    discount: 38,
    images: [
      'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.7,
    reviewCount: 115,
    stock: 45,
    tags: ['Flowering', 'Air Purifying', 'Low Light', 'Expressive'],
    spaces: ['Living Room', 'Bedroom', 'Office'],
    care: {
      light: 'Low to Medium Indirect Light (Keeps blooms longer)',
      water: 'Keep soil evenly moist. Water every 5-7 days.',
      temperature: '18°C – 28°C',
      humidity: '60% or higher',
      petFriendly: false,
      height: '35 – 60 cm',
      difficulty: 'Easy',
      feeding: 'Diluted organic bloom fertilizer bi-weekly in spring',
      repotting: 'Once every year'
    },
    sizes: [
      { name: 'Standard (5" Pot)', price: 399, originalPrice: 650, inStock: true },
      { name: 'Bushy (7" Pot)', price: 649, originalPrice: 899, inStock: true }
    ],
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: 'Bestseller'
  },

  // 5. ZZ Plant Raven & Green
  {
    name: 'ZZ Plant (Zamioculcas Zamiifolia)',
    botanicalName: 'Zamioculcas zamiifolia (Lodd.) Engl.',
    slug: 'zz-plant-zamiifolia',
    categorySlug: 'indoor-plants',
    description: 'Naturally glossy, waxy feather-like leaflets that look polished with zero leaf shine. Stores moisture in underground potato-like rhizomes, thriving through neglect and low light corners.',
    shortDescription: 'High-gloss waxy foliage that thrives on total neglect.',
    price: 449,
    originalPrice: 699,
    discount: 35,
    images: [
      'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 88,
    stock: 40,
    tags: ['Low Light', 'Drought Resistant', 'Desk Plant', 'Modern'],
    spaces: ['Office', 'Bedroom', 'Living Room', 'Entrance'],
    care: {
      light: 'Thrives in low light to bright indirect light',
      water: 'Very dry: Water once every 12-18 days',
      temperature: '16°C – 32°C',
      humidity: 'Average room humidity',
      petFriendly: false,
      height: '40 – 70 cm',
      difficulty: 'Easy',
      feeding: 'Once every 2 months during summer',
      repotting: 'Every 2-3 years'
    },
    sizes: [
      { name: 'Tabletop (5" Pot)', price: 449, originalPrice: 699, inStock: true },
      { name: 'Floor Stand (8" Pot)', price: 899, originalPrice: 1299, inStock: true }
    ],
    featured: false,
    bestseller: true,
    newArrival: false,
    badge: 'Beginner Friendly'
  },

  // 6. Areca Palm Luxury
  {
    name: 'Areca Palm (Chrysalidocarpus Lutescens)',
    botanicalName: 'Dypsis lutescens (H.Wendl.) Beentje & J.Dransf.',
    slug: 'areca-palm-luxury',
    categorySlug: 'indoor-plants',
    description: 'Graceful arching golden canes and feathery tropical fronds. Transforms balconies, lounges, and corporate spaces into serene tropical resorts while acting as a powerhouse natural humidifier.',
    shortDescription: 'Feathery tropical fronds that naturally humidify room air.',
    price: 599,
    originalPrice: 999,
    discount: 40,
    images: [
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 164,
    stock: 28,
    tags: ['Pet Friendly', 'Humidifier', 'Tropical', 'Balcony'],
    spaces: ['Living Room', 'Balcony', 'Terrace', 'Office'],
    care: {
      light: 'Bright Filtered Sunlight / Morning Sun',
      water: 'Water when top 1 inch is dry (every 4-6 days)',
      temperature: '20°C – 35°C',
      humidity: '65%+',
      petFriendly: true,
      height: '90 – 150 cm',
      difficulty: 'Easy',
      feeding: 'Monthly organic compost top dress',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'Medium (6" Pot)', price: 599, originalPrice: 999, inStock: true },
      { name: 'Large Lush (10" Pot)', price: 1299, originalPrice: 1899, inStock: true }
    ],
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: 'Pet Friendly'
  },

  // 7. Jade Plant Good Luck
  {
    name: 'Jade Plant (Crassula Ovata - Money Tree)',
    botanicalName: 'Crassula ovata (Mill.) Druce',
    slug: 'jade-plant-crassula',
    categorySlug: 'succulents-cacti',
    description: 'Renowned in Feng Shui and Vastu as the harbinger of prosperity, joy, and vitality. Thick jade-green teardrop succulent leaves on sturdy woody bonsai-like stems that can live for generations.',
    shortDescription: 'Sacred succulent of good fortune and longevity.',
    price: 299,
    originalPrice: 499,
    discount: 40,
    images: [
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 210,
    stock: 55,
    tags: ['Good Luck', 'Vastu', 'Succulent', 'Desk Plant'],
    spaces: ['Office', 'Living Room', 'Entrance', 'Balcony'],
    care: {
      light: 'Direct or bright indirect morning sunlight (4-5 hours)',
      water: 'Sparse: Water thoroughly when leaves feel slightly soft (every 10-14 days)',
      temperature: '15°C – 35°C',
      humidity: 'Low to moderate',
      petFriendly: false,
      height: '20 – 40 cm',
      difficulty: 'Easy',
      feeding: 'Cactus fertilizer every 2 months in growing season',
      repotting: 'Every 2-3 years'
    },
    sizes: [
      { name: 'Mini Desk (3.5" Pot)', price: 299, originalPrice: 499, inStock: true },
      { name: 'Mature Specimen (6" Pot)', price: 599, originalPrice: 899, inStock: true }
    ],
    featured: false,
    bestseller: true,
    newArrival: false,
    badge: 'Good Luck'
  },

  // 8. Anthurium Red Luxury
  {
    name: 'Anthurium Red Flamingo Flower',
    botanicalName: 'Anthurium andraeanum Linden ex André',
    slug: 'anthurium-red-flamingo',
    categorySlug: 'flowering-plants',
    description: 'Exquisite lacquered crimson heart-shaped spathes with a golden center spadix. Flowers persist continuously for up to 8 weeks, giving your room a luxury boutique hotel feel.',
    shortDescription: 'Lacquered ruby blooms that last for months.',
    price: 649,
    originalPrice: 999,
    discount: 35,
    images: [
      'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 77,
    stock: 30,
    tags: ['Exotic', 'Long Flowering', 'Luxury', 'Air Purifying'],
    spaces: ['Living Room', 'Bedroom', 'Office'],
    care: {
      light: 'Bright Filtered Indirect Light',
      water: 'Water when top 1 inch is dry (every 5-7 days)',
      temperature: '18°C – 30°C',
      humidity: '65% – 85%',
      petFriendly: false,
      height: '35 – 55 cm',
      difficulty: 'Moderate',
      feeding: 'High-phosphorus organic liquid food once monthly',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'Standard Pot (5.5")', price: 649, originalPrice: 999, inStock: true },
      { name: 'Ceramic Planter Edition (7")', price: 1099, originalPrice: 1499, inStock: true }
    ],
    featured: true,
    bestseller: false,
    newArrival: true,
    badge: 'Exotic Bloom'
  },

  // 9. Calathea Orbifolia Peacock
  {
    name: 'Calathea Orbifolia (Giant Prayer Plant)',
    botanicalName: 'Goeppertia orbifolia (Linden) Borchs. & S.Suárez',
    slug: 'calathea-orbifolia',
    categorySlug: 'indoor-plants',
    description: 'One of the largest and most breathtaking prayer plants in the world. Displays broad round leaves decorated with metallic silver brushstroke stripes that dance and fold upward every evening.',
    shortDescription: 'Mesmerizing silver-striped oversized prayer leaves.',
    price: 699,
    originalPrice: 1099,
    discount: 36,
    images: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.7,
    reviewCount: 53,
    stock: 18,
    tags: ['Pet Friendly', 'Silver Foliage', 'Prayer Plant', 'Rare'],
    spaces: ['Living Room', 'Bedroom'],
    care: {
      light: 'Medium to Bright Indirect Light (No direct sun)',
      water: 'Keep consistently moist, use filtered or RO water (every 5-6 days)',
      temperature: '18°C – 26°C',
      humidity: 'High (60%+)',
      petFriendly: true,
      height: '40 – 70 cm',
      difficulty: 'Moderate',
      feeding: 'Gentle organic foliar spray monthly',
      repotting: 'Every spring'
    },
    sizes: [
      { name: 'Standard (6" Pot)', price: 699, originalPrice: 1099, inStock: true }
    ],
    featured: true,
    bestseller: false,
    newArrival: true,
    badge: 'Pet Friendly'
  },

  // 10. Ficus Ginseng Microcarpa Bonsai
  {
    name: 'Ficus Ginseng Microcarpa Bonsai (8 Years Old)',
    botanicalName: 'Ficus microcarpa L.f.',
    slug: 'ficus-ginseng-bonsai',
    categorySlug: 'bonsai',
    description: 'Masterfully cultivated 8-year-old miniature tree with exposed sculptural aerial banyan roots and a dense crown of deep green oval leaves. A living sculpture of patience, mindfulness, and timeless Zen.',
    shortDescription: '8-year-old living art with exposed banyan roots.',
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    images: [
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 68,
    stock: 15,
    tags: ['Zen', 'Bonsai', 'Living Sculpture', 'Masterpiece'],
    spaces: ['Living Room', 'Office', 'Entrance'],
    care: {
      light: 'Bright indirect to partial morning sunshine',
      water: 'Water when topsoil feels slightly dry; never let it sit waterlogged (every 5-7 days)',
      temperature: '18°C – 32°C',
      humidity: '50% – 70%',
      petFriendly: false,
      height: '35 – 50 cm',
      difficulty: 'Moderate',
      feeding: 'Specialized organic Bonsai feed monthly during spring/summer',
      repotting: 'Every 2-3 years with root pruning'
    },
    sizes: [
      { name: 'Ceramic Bonsai Tray (8" Oval)', price: 1299, originalPrice: 1999, inStock: true },
      { name: 'Heritage 12-Year Edition', price: 2499, originalPrice: 3499, inStock: true }
    ],
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: 'Artisan Bonsai'
  },

  // 11. Bird of Paradise Strelitzia
  {
    name: 'Bird of Paradise (Strelitzia Nicolai XL)',
    botanicalName: 'Strelitzia nicolai Regel & Körn.',
    slug: 'bird-of-paradise-xl',
    categorySlug: 'indoor-plants',
    description: 'Regal, banana-like paddle leaves that fan outward dramatically. Brings modern architectural scale and lush resort energy to double-height living rooms and bright sunny atriums.',
    shortDescription: 'Majestic tropical giant with massive architectural leaves.',
    price: 1199,
    originalPrice: 1899,
    discount: 37,
    images: [
      'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 44,
    stock: 12,
    tags: ['Giant Foliage', 'Architectural', 'Resort Vibe'],
    spaces: ['Living Room', 'Balcony', 'Terrace'],
    care: {
      light: 'Full Sun to Bright Direct/Indirect Light',
      water: 'Water deeply when top 50% of soil dries out (every 7-10 days)',
      temperature: '18°C – 35°C',
      humidity: '55%+',
      petFriendly: false,
      height: '100 – 160 cm',
      difficulty: 'Easy',
      feeding: 'Balanced organic fertilizer monthly in summer',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'XL Specimen (10" Pot)', price: 1199, originalPrice: 1899, inStock: true }
    ],
    featured: true,
    bestseller: false,
    newArrival: true,
    badge: 'Statement Tree'
  },

  // 12. Golden Pothos Devil's Ivy
  {
    name: 'Golden Pothos Cascading Vine',
    botanicalName: 'Epipremnum aureum (Linden & André) G.S.Bunting',
    slug: 'golden-pothos-cascading',
    categorySlug: 'indoor-plants',
    description: 'Lush heart-shaped leaves flecked with golden-yellow marbling. Trails gracefully from bookshelves and hanging baskets or climbs up moss poles with vigor. Highly tolerant of low light and missed waterings.',
    shortDescription: 'Effortless trailing golden vine that purifies indoor air.',
    price: 249,
    originalPrice: 399,
    discount: 38,
    images: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 310,
    stock: 70,
    tags: ['Hanging Plant', 'Unkillable', 'Trailing', 'Air Purifying'],
    spaces: ['Bedroom', 'Living Room', 'Office', 'Balcony'],
    care: {
      light: 'Low, Medium, or Bright Indirect Light',
      water: 'Water when top 2 inches feel dry (every 6-9 days)',
      temperature: '15°C – 32°C',
      humidity: 'Adapts to any humidity',
      petFriendly: false,
      height: 'Trails up to 2 meters',
      difficulty: 'Easy',
      feeding: 'Quarter-strength liquid feed every 6 weeks',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'Hanging Planter (6")', price: 349, originalPrice: 499, inStock: true },
      { name: 'Tabletop Pot (4")', price: 249, originalPrice: 399, inStock: true }
    ],
    featured: false,
    bestseller: true,
    newArrival: false,
    badge: 'Best For Beginners'
  },

  // 13. Spider Plant Chlorophytum
  {
    name: 'Spider Plant Ocean Variegated',
    botanicalName: 'Chlorophytum comosum (Thunb.) Jacques',
    slug: 'spider-plant-ocean',
    categorySlug: 'air-purifying',
    description: 'Arching ribbon-like leaves with creamy white central stripes. Produces dainty white star blossoms and dangling baby spider plantlets (spiderettes) that you can easily propagate. 100% pet-friendly.',
    shortDescription: 'Pet-safe air filter that sprouts playful baby plantlets.',
    price: 279,
    originalPrice: 449,
    discount: 38,
    images: [
      'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 95,
    stock: 50,
    tags: ['Pet Friendly', 'Air Purifier', 'Propagates Easily', 'Hanging'],
    spaces: ['Bedroom', 'Living Room', 'Balcony', 'Office'],
    care: {
      light: 'Bright Indirect to Medium Light',
      water: 'Keep moderately moist in summer; allow top inch to dry between waterings (every 5-7 days)',
      temperature: '16°C – 28°C',
      humidity: 'Moderate',
      petFriendly: true,
      height: '30 – 45 cm',
      difficulty: 'Easy',
      feeding: 'Balanced all-purpose feed twice a year',
      repotting: 'Once every year'
    },
    sizes: [
      { name: 'Standard (5" Pot)', price: 279, originalPrice: 449, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Pet Safe'
  },

  // 14. String of Pearls Succulent
  {
    name: 'String of Pearls (Senecio Rowleyanus)',
    botanicalName: 'Curio rowleyanus (H.Jacobsen) P.V.Heath',
    slug: 'string-of-pearls',
    categorySlug: 'succulents-cacti',
    description: 'Whimsical trailing succulent with spherical bead-like pea foliage that cascades like emerald jewelry over the sides of hanging planters. Loves sunny windowsills.',
    shortDescription: 'Cascading emerald beads resembling living green pearls.',
    price: 399,
    originalPrice: 650,
    discount: 39,
    images: [
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.7,
    reviewCount: 82,
    stock: 32,
    tags: ['Succulent', 'Trailing', 'Window Plant', 'Unique'],
    spaces: ['Living Room', 'Balcony', 'Office'],
    care: {
      light: 'Direct morning sunlight or very bright indirect sun',
      water: 'Bottom water only when pearls start to pucker (every 10-14 days)',
      temperature: '18°C – 30°C',
      humidity: 'Low dry air',
      petFriendly: false,
      height: 'Trails 40 – 90 cm',
      difficulty: 'Moderate',
      feeding: 'Dilute cactus feed in summer',
      repotting: 'Every 2 years in shallow cactus soil'
    },
    sizes: [
      { name: 'Hanging Sphere Pot (4.5")', price: 399, originalPrice: 650, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: true,
    badge: 'Collector’s Gem'
  },

  // 15. Bougainvillea Royal Magenta
  {
    name: 'Bougainvillea Royal Magenta (Flowering Shrub)',
    botanicalName: 'Bougainvillea spectabilis Willd.',
    slug: 'bougainvillea-royal-magenta',
    categorySlug: 'outdoor-plants',
    description: 'Explosion of incandescent magenta-purple papery bracts that thrive under full Indian sunlight. Drought-hardy, heat-tolerant, and perfect for balconies, gates, and sun terraces.',
    shortDescription: 'Vibrant sun-loving flowering powerhouse.',
    price: 349,
    originalPrice: 550,
    discount: 37,
    images: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 110,
    stock: 40,
    tags: ['Outdoor', 'Full Sun', 'Heavy Bloomer', 'Drought Hardy'],
    spaces: ['Balcony', 'Terrace', 'Garden'],
    care: {
      light: 'Direct Full Sunlight (Minimum 5-6 hours daily)',
      water: 'Allow topsoil to dry before watering (every 3-5 days in summer)',
      temperature: '20°C – 42°C',
      humidity: 'Moderate',
      petFriendly: true,
      height: '60 – 150 cm',
      difficulty: 'Easy',
      feeding: 'Potash and bone meal rich organic feed monthly during flowering',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'Bushy Shrub (7" Pot)', price: 349, originalPrice: 550, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Sun Lover'
  },

  // 16. Jasmine Mogra Sambac
  {
    name: 'Arabian Jasmine (Mogra Sambac - Divine Aroma)',
    botanicalName: 'Jasminum sambac (L.) Aiton',
    slug: 'jasmine-mogra-sambac',
    categorySlug: 'flowering-plants',
    description: 'Double-petal pristine white blossoms possessing an intoxicating natural floral fragrance revered for centuries. Opens in the twilight evening, filling balconies with sweet calming perfume.',
    shortDescription: 'Fragrant sacred blooms that perfume the night air.',
    price: 299,
    originalPrice: 450,
    discount: 34,
    images: [
      'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 190,
    stock: 50,
    tags: ['Fragrant', 'Sacred', 'Evening Bloom', 'Balcony Star'],
    spaces: ['Balcony', 'Terrace', 'Garden'],
    care: {
      light: 'Direct sunlight for at least 4-5 hours',
      water: 'Keep soil moist but not soggy (water every 2-3 days in heat)',
      temperature: '20°C – 38°C',
      humidity: '60%+',
      petFriendly: true,
      height: '40 – 80 cm',
      difficulty: 'Easy',
      feeding: 'Mustard cake liquid manure or organic compost every 3 weeks',
      repotting: 'Once yearly after monsoon pruning'
    },
    sizes: [
      { name: 'Standard Blooming Pot (6")', price: 299, originalPrice: 450, inStock: true }
    ],
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: 'Divine Aroma'
  },

  // 17. Boston Fern Nephrolepis
  {
    name: 'Boston Fern (Nephrolepis Exaltata)',
    botanicalName: 'Nephrolepis exaltata (L.) Schott',
    slug: 'boston-fern-nephrolepis',
    categorySlug: 'air-purifying',
    description: 'Lush cascading sword-shaped ruffled fronds that billow outward with untamed forest serenity. Supreme natural air purifier for neutralizing formaldehyde and boosting indoor humidity.',
    shortDescription: 'Lush feather-fronded natural air purifier and humidifier.',
    price: 379,
    originalPrice: 599,
    discount: 37,
    images: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.7,
    reviewCount: 62,
    stock: 24,
    tags: ['Pet Friendly', 'Lush Fronds', 'Bathroom Plant', 'Humidifier'],
    spaces: ['Bathroom', 'Living Room', 'Balcony'],
    care: {
      light: 'Medium to Bright Indirect Light (No direct sun)',
      water: 'Keep root ball evenly moist; mist fronds frequently (every 3-5 days)',
      temperature: '18°C – 28°C',
      humidity: 'High (70%+)',
      petFriendly: true,
      height: '35 – 55 cm',
      difficulty: 'Moderate',
      feeding: 'Liquid seaweed extract monthly in summer',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'Hanging Basket (7")', price: 449, originalPrice: 699, inStock: true },
      { name: 'Tabletop (5")', price: 379, originalPrice: 599, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Pet Safe'
  },

  // 18. Aglaonema Pink Anjamani
  {
    name: 'Aglaonema Pink Anjamani (Chinese Evergreen)',
    botanicalName: 'Aglaonema commutatum Schott cv.',
    slug: 'aglaonema-pink-anjamani',
    categorySlug: 'indoor-plants',
    description: 'Spectacular blush pink and ruby foliage outlined with thin jade-green borders. Provides vibrant living color without needing floral maintenance. Performs remarkably in low-light apartments.',
    shortDescription: 'Vibrant blushing pink foliage that brightens shady rooms.',
    price: 499,
    originalPrice: 799,
    discount: 38,
    images: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 104,
    stock: 35,
    tags: ['Pink Foliage', 'Low Light', 'Colorful', 'Vibrant'],
    spaces: ['Living Room', 'Bedroom', 'Office'],
    care: {
      light: 'Low to Bright Indirect Light',
      water: 'Water when top 50% of soil feels dry (every 7-10 days)',
      temperature: '18°C – 32°C',
      humidity: 'Moderate room humidity',
      petFriendly: false,
      height: '25 – 45 cm',
      difficulty: 'Easy',
      feeding: 'Balanced organic fertilizer every 2 months',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'Standard (5" Pot)', price: 499, originalPrice: 799, inStock: true },
      { name: 'Ceramic Planter (6.5")', price: 849, originalPrice: 1199, inStock: true }
    ],
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: 'Blushing Pink'
  },

  // 19. Rubber Plant Burgundy
  {
    name: 'Rubber Tree Burgundy (Ficus Elastica)',
    botanicalName: 'Ficus elastica Roxb. ex Hornem.',
    slug: 'rubber-tree-burgundy',
    categorySlug: 'indoor-plants',
    description: 'Thick, glossy, oversized leather leaves in a dramatic midnight-burgundy hue with crimson emergent sheaths. A bold focal centerpiece that purifies stale toxins with low maintenance.',
    shortDescription: 'Dramatic midnight-burgundy leathery statement tree.',
    price: 529,
    originalPrice: 850,
    discount: 38,
    images: [
      'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 88,
    stock: 28,
    tags: ['Burgundy', 'Foliage Tree', 'Air Purifier', 'Modern'],
    spaces: ['Living Room', 'Office', 'Balcony'],
    care: {
      light: 'Medium to Bright Indirect Light (A few hours of morning sun keeps leaves dark)',
      water: 'Allow top 2 inches to dry before watering (every 7-9 days)',
      temperature: '18°C – 32°C',
      humidity: 'Moderate',
      petFriendly: false,
      height: '60 – 120 cm',
      difficulty: 'Easy',
      feeding: 'Monthly organic feed during summer',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'Standard (6" Pot)', price: 529, originalPrice: 850, inStock: true },
      { name: 'Tall Floor Specimen (8" Pot)', price: 999, originalPrice: 1499, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Top Pick'
  },

  // 20. Chinese Elm Bonsai 10 Years
  {
    name: 'Chinese Elm Bonsai (Ulmus Parvifolia 10-Yr)',
    botanicalName: 'Ulmus parvifolia Jacq.',
    slug: 'chinese-elm-bonsai',
    categorySlug: 'bonsai',
    description: 'Graceful S-curved trunk with fine branching and tiny serrated green foliage. Known as the tree of harmony and strength, this 10-year cultivated bonsai is vigorous and resilient.',
    shortDescription: 'Curved trunk 10-year-old traditional Zen bonsai.',
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    images: [
      'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 41,
    stock: 10,
    tags: ['Bonsai', '10 Years Cultivated', 'Zen Masterpiece'],
    spaces: ['Living Room', 'Office', 'Balcony'],
    care: {
      light: 'Bright indirect light or gentle morning sun',
      water: 'Keep slightly moist, water thoroughly when top layer dries (every 4-6 days)',
      temperature: '15°C – 30°C',
      humidity: '50%+',
      petFriendly: true,
      height: '30 – 45 cm',
      difficulty: 'Moderate',
      feeding: 'Specialized organic bonsai fertilizer bi-weekly in spring',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'Glazed Ceramic Tray (9")', price: 1599, originalPrice: 2499, inStock: true }
    ],
    featured: true,
    bestseller: false,
    newArrival: true,
    badge: 'Artisan Crafted'
  },

  // 21. Fluted Terracotta Planter Duo
  {
    name: 'Handcrafted Fluted Terracotta Planter Duo',
    botanicalName: 'Artisan Clayware',
    slug: 'fluted-terracotta-planter-duo',
    categorySlug: 'pots-planters',
    description: 'Set of two breathable clay planters handcrafted by master potters using nutrient-rich clay. Features architectural vertical fluting and matching drainage saucers that prevent root rot naturally.',
    shortDescription: 'Pair of breathable fluted clay planters with saucers.',
    price: 599,
    originalPrice: 899,
    discount: 33,
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 88,
    stock: 45,
    tags: ['Handcrafted', 'Breathable Clay', 'Drainage Included'],
    spaces: ['Living Room', 'Balcony', 'Office'],
    care: {
      light: 'Suitable for indoor & outdoor use',
      water: 'Porous clay regulates moisture naturally',
      temperature: 'Weatherproof',
      humidity: 'Any',
      petFriendly: true,
      height: 'Small 5.5" + Medium 7.5"',
      difficulty: 'Easy'
    },
    sizes: [
      { name: 'Duo Pack (5.5" + 7.5")', price: 599, originalPrice: 899, inStock: true }
    ],
    featured: false,
    bestseller: true,
    newArrival: false,
    badge: 'Best Seller'
  },

  // 22. Nordic Ribbed Ceramic Pot Warm White
  {
    name: 'Nordic Ribbed Matte Ceramic Pot (7-Inch)',
    botanicalName: 'Minimalist Ceramics',
    slug: 'nordic-ribbed-ceramic-pot',
    categorySlug: 'pots-planters',
    description: 'Minimalist Scandinavian tactile ribbed planter finished in warm matte cream. Includes an internal drainage hole, silicone plug, and seamless overflow saucer.',
    shortDescription: 'Matte warm cream ribbed ceramic pot with drainage.',
    price: 499,
    originalPrice: 750,
    discount: 33,
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 54,
    stock: 50,
    tags: ['Scandinavian', 'Ceramic', 'Matte Finish'],
    spaces: ['Living Room', 'Bedroom', 'Office'],
    care: {
      light: 'All conditions',
      water: 'Equipped with silicone removable stopper',
      temperature: 'Indoor/Outdoor',
      humidity: 'Any',
      petFriendly: true,
      height: '18 cm diameter x 16 cm height',
      difficulty: 'Easy'
    },
    sizes: [
      { name: '7" Medium', price: 499, originalPrice: 750, inStock: true },
      { name: '9" Large', price: 799, originalPrice: 1150, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: true,
    badge: 'Trending'
  },

  // 23. Heirloom Italian Basil Seeds Pack
  {
    name: 'Organic Heirloom Sweet Genovese Basil Seeds',
    botanicalName: 'Ocimum basilicum L.',
    slug: 'sweet-basil-seeds',
    categorySlug: 'seeds',
    description: '100% certified organic non-GMO heirloom Italian Genovese basil seeds. High germination rate (92%+). Produce aromatic, sweet basil leaves for fresh pestos, pastas, and herbal teas.',
    shortDescription: '100+ organic seeds with high 92%+ germination rate.',
    price: 149,
    originalPrice: 249,
    discount: 40,
    images: [
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 132,
    stock: 100,
    tags: ['Organic', 'Culinary Herb', 'Non-GMO', 'Easy Grow'],
    spaces: ['Balcony', 'Kitchen Window', 'Terrace'],
    care: {
      light: '4-6 hours direct sunlight',
      water: 'Keep seed bed moist until sprouts emerge (7-10 days)',
      temperature: '20°C – 32°C',
      humidity: 'Moderate',
      petFriendly: true,
      height: '30 – 50 cm mature',
      difficulty: 'Easy'
    },
    sizes: [
      { name: '100+ Seeds Seed Packet', price: 149, originalPrice: 249, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Organic'
  },

  // 24. Wild Lavender Angustifolia Seeds
  {
    name: 'English Wild Lavender (Lavandula Angustifolia Seeds)',
    botanicalName: 'Lavandula angustifolia Mill.',
    slug: 'wild-lavender-seeds',
    categorySlug: 'seeds',
    description: 'Fragrant purple bloom seeds beloved for aromatherapy, stress relief, and pollinator gardens. Creates silvery foliage and lilac-blue spikes.',
    shortDescription: 'Fragrant calming lilac blossoms for aromatherapy.',
    price: 179,
    originalPrice: 299,
    discount: 40,
    images: [
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.6,
    reviewCount: 47,
    stock: 80,
    tags: ['Aromatherapy', 'Fragrant', 'Pollinator Friendly'],
    spaces: ['Balcony', 'Terrace', 'Garden'],
    care: {
      light: 'Full Sun (6+ hours)',
      water: 'Moderate when growing; drought-tolerant once established',
      temperature: '15°C – 30°C',
      humidity: 'Dry to moderate',
      petFriendly: false,
      height: '40 – 60 cm',
      difficulty: 'Moderate'
    },
    sizes: [
      { name: '75+ Seeds Seed Packet', price: 179, originalPrice: 299, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Aromatic'
  },

  // 25. GreenyCup Organic Potting Mix 5kg
  {
    name: 'GreenyCup Botanical Aerated Potting Mix (5 KG)',
    botanicalName: 'Substrate Blend',
    slug: 'greenycup-organic-potting-mix',
    categorySlug: 'soil-fertilizers',
    description: 'Professional nursery-grade substrate blended with aged coconut coir, perlite, vermiculite, biochar, vermicompost, and organic neem cake. Pre-sterilized to prevent fungus gnats and root disease.',
    shortDescription: 'Nutrient-rich, fast-draining pre-sterilized potting soil.',
    price: 349,
    originalPrice: 499,
    discount: 30,
    images: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 178,
    stock: 90,
    tags: ['Organic', 'Anti-Fungal', 'Fast Draining', 'Enriched'],
    spaces: ['Garden', 'Balcony', 'Indoor'],
    care: {
      light: 'N/A',
      water: 'High aeration prevents waterlogging',
      temperature: 'Stores in cool dry place',
      humidity: 'N/A',
      petFriendly: true,
      height: '5 KG Eco-Bag',
      difficulty: 'Easy'
    },
    sizes: [
      { name: '5 KG Eco Bag', price: 349, originalPrice: 499, inStock: true },
      { name: '10 KG Value Sack', price: 599, originalPrice: 899, inStock: true }
    ],
    featured: false,
    bestseller: true,
    newArrival: false,
    badge: 'Nursery Grade'
  },

  // 26. Solid Brass Vintage Botanical Mister
  {
    name: 'Solid Brass Vintage Botanical Water Mister (300ml)',
    botanicalName: 'Artisan Hardware',
    slug: 'solid-brass-botanical-mister',
    categorySlug: 'garden-tools',
    description: 'Heirloom-grade solid polished brass plant mister with an ergonomic thumb pump. Emits an ultra-fine atmospheric mist that elevates humidity for ferns, calatheas, orchids, and tropical indoor plants.',
    shortDescription: 'Polished solid brass mister producing ultra-fine fog mist.',
    price: 699,
    originalPrice: 1199,
    discount: 41,
    images: [
      'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 96,
    stock: 40,
    tags: ['Solid Brass', 'Fine Mist', 'Heirloom Tool', 'Luxury Decor'],
    spaces: ['Living Room', 'Office', 'Balcony'],
    care: {
      light: 'N/A',
      water: 'Fill with clean filtered water',
      temperature: 'Rust proof solid brass',
      humidity: 'N/A',
      petFriendly: true,
      height: '300 ML Capacity',
      difficulty: 'Easy'
    },
    sizes: [
      { name: '300ml Solid Brass', price: 699, originalPrice: 1199, inStock: true }
    ],
    featured: true,
    bestseller: false,
    newArrival: true,
    badge: 'Heirloom Quality'
  },

  // 27. Geometric Hanging Glass Terrarium
  {
    name: 'Faceted Geometric Glass Plant Terrarium',
    botanicalName: 'Handcrafted Glassware',
    slug: 'geometric-glass-terrarium',
    categorySlug: 'garden-decor',
    description: 'Black brass-soldered faceted geometric glass terrarium. Ideal for miniature moss gardens, air plants (Tillandsia), succulents, and crystal fairy landscapes.',
    shortDescription: 'Handmade faceted black-soldered glass terrarium.',
    price: 749,
    originalPrice: 1199,
    discount: 37,
    images: [
      'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 38,
    stock: 25,
    tags: ['Terrarium', 'Geometric', 'Handmade Glass'],
    spaces: ['Living Room', 'Bedroom', 'Office'],
    care: {
      light: 'Bright indirect light',
      water: 'Light misting weekly for moss/air plants',
      temperature: 'Indoor',
      humidity: 'Maintains micro-climate',
      petFriendly: true,
      height: '18 x 18 x 20 cm',
      difficulty: 'Easy'
    },
    sizes: [
      { name: 'Medium 7.5"', price: 749, originalPrice: 1199, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Handcrafted'
  },

  // 28. Beginner Green Home Starter Pack (Combo)
  {
    name: 'The Beginner Botanical Starter Pack (Trio)',
    botanicalName: 'Curated Collection',
    slug: 'beginner-botanical-starter-pack',
    categorySlug: 'plant-combos',
    description: 'The ultimate fail-proof plant trio designed for new plant parents: Snake Plant Laurentii + ZZ Plant + Golden Pothos in matching self-watering pots. Guaranteed to thrive with minimal attention.',
    shortDescription: '3 indestructible top rated beginner plants + planters.',
    price: 899,
    originalPrice: 1599,
    discount: 43,
    images: [
      'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 5.0,
    reviewCount: 184,
    stock: 30,
    tags: ['Combo Pack', 'Beginner Trio', 'Unkillable', 'Value Bundle'],
    spaces: ['Living Room', 'Bedroom', 'Office'],
    care: {
      light: 'Low to Bright indirect light',
      water: 'Very low maintenance (water every 10-14 days)',
      temperature: '15°C – 35°C',
      humidity: 'Average',
      petFriendly: false,
      height: '3 plants (25-45 cm each)',
      difficulty: 'Easy',
      feeding: 'Includes 6-month slow release fertilizer beads',
      repotting: 'Pre-potted, no repotting needed for 18 months'
    },
    sizes: [
      { name: 'Complete 3-Plant Set with Pots', price: 899, originalPrice: 1599, inStock: true }
    ],
    featured: true,
    bestseller: true,
    newArrival: false,
    isCombo: true,
    badge: 'Save 43%'
  },

  // 29. Pure Air Sanctuary 4-Pack (Combo)
  {
    name: 'NASA Pure Air Sanctuary Collection (4-Pack)',
    botanicalName: 'Air Purifying Bundle',
    slug: 'pure-air-sanctuary-bundle',
    categorySlug: 'plant-combos',
    description: 'Transform indoor air into fresh mountain air: Snake Plant, Peace Lily, Spider Plant, and Areca Palm. Clinically proven to remove benzene, formaldehyde, and airborne dust particles.',
    shortDescription: '4 NASA-certified natural air filtering plants.',
    price: 1299,
    originalPrice: 2299,
    discount: 43,
    images: [
      'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 142,
    stock: 25,
    tags: ['NASA Purifiers', 'Combo Bundle', 'Healthy Home', 'Night Oxygen'],
    spaces: ['Bedroom', 'Living Room', 'Office'],
    care: {
      light: 'Medium to Bright indirect light',
      water: 'Water weekly as each plant requires',
      temperature: '18°C – 32°C',
      humidity: 'Moderate to high',
      petFriendly: false,
      height: '4 assorted plants',
      difficulty: 'Easy'
    },
    sizes: [
      { name: '4-Plant Sanctuary Kit', price: 1299, originalPrice: 2299, inStock: true }
    ],
    featured: true,
    bestseller: true,
    newArrival: false,
    isCombo: true,
    badge: 'Save ₹1000'
  },

  // 30. Work Desk Focus Garden Kit (Combo)
  {
    name: 'Work-Desk Focus Green Duo (Jade + Mini ZZ)',
    botanicalName: 'Productivity Bundle',
    slug: 'work-desk-focus-bundle',
    categorySlug: 'plant-combos',
    description: 'Compact energy-boosting duo in ceramic pots: Jade Money Plant + Dwarf ZZ. Studies show desk greenery reduces digital eye strain and boosts cognitive focus by 23%.',
    shortDescription: '2 compact desk companions to reduce digital eye strain.',
    price: 599,
    originalPrice: 999,
    discount: 40,
    images: [
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 89,
    stock: 40,
    tags: ['Desk Plant', 'Workplace', 'Focus Booster', 'Low Care'],
    spaces: ['Office', 'Bedroom'],
    care: {
      light: 'Adapts to artificial office fluorescent lighting & indirect sun',
      water: 'Every 12-14 days',
      temperature: '18°C – 28°C',
      humidity: 'Office AC friendly',
      petFriendly: false,
      height: '15 – 25 cm',
      difficulty: 'Easy'
    },
    sizes: [
      { name: 'Duo with Matte White Planters', price: 599, originalPrice: 999, inStock: true }
    ],
    featured: false,
    bestseller: true,
    newArrival: false,
    isCombo: true,
    badge: 'Desk Favorite'
  },

  // 31. Pet-Friendly Haven Trio (Combo)
  {
    name: 'The Pet-Friendly Haven Collection (Trio)',
    botanicalName: 'Non-Toxic Bundle',
    slug: 'pet-friendly-haven-collection',
    categorySlug: 'plant-combos',
    description: '100% ASPCA certified non-toxic to cats and dogs: Areca Palm, Calathea Orbifolia, and Spider Plant. Complete peace of mind for loving pet owners.',
    shortDescription: '3 ASPCA-certified non-toxic lush plants safe for pets.',
    price: 1199,
    originalPrice: 1999,
    discount: 40,
    images: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 5.0,
    reviewCount: 76,
    stock: 20,
    tags: ['Pet Safe', 'Non-Toxic', 'Cat Friendly', 'Dog Friendly'],
    spaces: ['Living Room', 'Bedroom', 'Balcony'],
    care: {
      light: 'Medium to Bright indirect light',
      water: 'Water every 5-7 days',
      temperature: '18°C – 30°C',
      humidity: 'Moderate to high',
      petFriendly: true,
      height: '3 assorted sizes',
      difficulty: 'Easy'
    },
    sizes: [
      { name: '3-Plant Pet Safe Kit', price: 1199, originalPrice: 1999, inStock: true }
    ],
    featured: true,
    bestseller: false,
    newArrival: true,
    isCombo: true,
    badge: '100% Pet Safe'
  },

  // 32. Plumeria Frangipani Temple Tree
  {
    name: 'Plumeria Frangipani (Champa White-Gold)',
    botanicalName: 'Plumeria rubra f. acutifolia (Poir.) Woodson',
    slug: 'plumeria-frangipani-champa',
    categorySlug: 'outdoor-plants',
    description: 'Sun-kissed tropical tree with sculptural branches bearing velvety ivory petals with a golden center. Renowned for its captivating citrus-vanilla fragrance during summer evenings.',
    shortDescription: 'Velvety fragrant ivory and gold sacred blossoms.',
    price: 499,
    originalPrice: 799,
    discount: 37,
    images: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 65,
    stock: 22,
    tags: ['Fragrant', 'Full Sun', 'Temple Tree', 'Balcony Star'],
    spaces: ['Balcony', 'Terrace', 'Garden'],
    care: {
      light: 'Full direct sunlight (5+ hours daily)',
      water: 'Water when top 2 inches feel dry (every 3-5 days in heat)',
      temperature: '20°C – 40°C',
      humidity: 'Moderate',
      petFriendly: false,
      height: '60 – 100 cm',
      difficulty: 'Easy',
      feeding: 'Organic bone meal & potash monthly during blooming',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'Potted Bush (7")', price: 499, originalPrice: 799, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Exotic Scent'
  },

  // 33. Golden Barrel Cactus
  {
    name: 'Golden Barrel Cactus (Mother-in-Law’s Cushion)',
    botanicalName: 'Echinocactus grusonii Hildm.',
    slug: 'golden-barrel-cactus',
    categorySlug: 'succulents-cacti',
    description: 'Geometric globe cactus crowned with golden radiating ribs and vibrant yellow spines. A living sculpture that requires minimal water and thrives on sunny windowsills and dry balconies.',
    shortDescription: 'Geometric golden globe succulent requiring minimal care.',
    price: 389,
    originalPrice: 599,
    discount: 35,
    images: [
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 52,
    stock: 35,
    tags: ['Cactus', 'Geometric', 'Sun Lover', 'Drought Hardy'],
    spaces: ['Balcony', 'Terrace', 'Office'],
    care: {
      light: 'Direct full sunlight (4+ hours)',
      water: 'Very dry: Water once every 3-4 weeks',
      temperature: '15°C – 40°C',
      humidity: 'Low',
      petFriendly: false,
      height: '15 – 25 cm diameter',
      difficulty: 'Easy'
    },
    sizes: [
      { name: 'Globe Pot (5")', price: 389, originalPrice: 599, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Architectural'
  },

  // 34. Aloe Vera Barbadensis
  {
    name: 'Organic Aloe Vera (Barbadensis Miller)',
    botanicalName: 'Aloe vera (L.) Burm.f.',
    slug: 'organic-aloe-vera',
    categorySlug: 'air-purifying',
    description: 'Thick succulent spears filled with healing, cooling botanical gel. Renowned for soothing skin, purifying bedroom air at night, and surviving extended drought effortlessly.',
    shortDescription: 'Healing botanical succulent filled with soothing gel.',
    price: 199,
    originalPrice: 349,
    discount: 43,
    images: [
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 220,
    stock: 80,
    tags: ['Medicinal', 'Soothing Gel', 'Night Oxygen', 'Unkillable'],
    spaces: ['Bedroom', 'Kitchen Window', 'Balcony'],
    care: {
      light: 'Direct morning sun to bright indirect light',
      water: 'Water every 2-3 weeks when soil is bone dry',
      temperature: '15°C – 38°C',
      humidity: 'Low to average',
      petFriendly: false,
      height: '25 – 45 cm',
      difficulty: 'Easy'
    },
    sizes: [
      { name: 'Standard (5" Pot)', price: 199, originalPrice: 349, inStock: true }
    ],
    featured: false,
    bestseller: true,
    newArrival: false,
    badge: 'Medicinal'
  },

  // 35. Philodendron Birkin
  {
    name: 'Philodendron Birkin (Variegated Pinstripe)',
    botanicalName: 'Philodendron ‘Birkin’',
    slug: 'philodendron-birkin',
    categorySlug: 'indoor-plants',
    description: 'Rare designer plant with dark glossy green leaves painted with creamy-white laser-like pinstripes. Every new emerging leaf develops more dramatic variegation as the plant matures.',
    shortDescription: 'Creamy white laser-striped designer foliage.',
    price: 499,
    originalPrice: 799,
    discount: 37,
    images: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 67,
    stock: 30,
    tags: ['Variegated', 'Designer Foliage', 'Rare', 'Tabletop'],
    spaces: ['Living Room', 'Bedroom', 'Office'],
    care: {
      light: 'Bright indirect light (maintains intense white pinstripes)',
      water: 'Water when top inch of soil is dry (every 6-8 days)',
      temperature: '18°C – 30°C',
      humidity: '50% – 70%',
      petFriendly: false,
      height: '25 – 40 cm',
      difficulty: 'Easy',
      feeding: 'Organic balanced feed monthly in spring/summer',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'Standard (5" Pot)', price: 499, originalPrice: 799, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: true,
    badge: 'Rare Find'
  },

  // 36. Sweet Cherry Tomato Seeds
  {
    name: 'Heirloom Sweet Cherry Tomato Seeds (50+ Seeds)',
    botanicalName: 'Solanum lycopersicum var. cerasiforme',
    slug: 'sweet-cherry-tomato-seeds',
    categorySlug: 'seeds',
    description: 'Prolific heirloom cherry tomato seeds producing clusters of ultra-sweet, bite-sized scarlet fruits. Ideal for balcony containers, patio planters, and kitchen gardens.',
    shortDescription: 'High-yield sweet balcony cherry tomatoes.',
    price: 139,
    originalPrice: 229,
    discount: 39,
    images: [
      'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.8,
    reviewCount: 94,
    stock: 90,
    tags: ['Kitchen Garden', 'Edible', 'Non-GMO', 'High Yield'],
    spaces: ['Balcony', 'Terrace', 'Garden'],
    care: {
      light: 'Full Sun (6+ hours)',
      water: 'Keep consistently moist, never dry out when fruiting',
      temperature: '20°C – 34°C',
      humidity: 'Moderate',
      petFriendly: true,
      height: 'Vine (requires staking)',
      difficulty: 'Easy'
    },
    sizes: [
      { name: '50+ Seeds Packet', price: 139, originalPrice: 229, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Edible'
  },

  // 37. Cold-Pressed Pure Neem Oil Spray
  {
    name: 'Organic Cold-Pressed Neem Oil Foliar Spray (500ml)',
    botanicalName: 'Azadirachta indica Extract',
    slug: 'cold-pressed-neem-oil-spray',
    categorySlug: 'soil-fertilizers',
    description: 'Ready-to-use pure cold-pressed neem oil fortified with natural organic emulsifiers. 100% organic defense against spider mites, mealybugs, aphids, scale, and powdery mildew without harmful chemicals.',
    shortDescription: 'Organic 100% natural pest protection and leaf shine.',
    price: 299,
    originalPrice: 450,
    discount: 33,
    images: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 162,
    stock: 75,
    tags: ['Organic', 'Pest Control', 'Leaf Shine', 'Chemical Free'],
    spaces: ['Garden', 'Balcony', 'Indoor'],
    care: {
      light: 'N/A',
      water: 'Spray leaves in evening once every 10 days',
      temperature: 'Store in cool dry place',
      humidity: 'N/A',
      petFriendly: true,
      height: '500 ML Bottle with Trigger Spray',
      difficulty: 'Easy'
    },
    sizes: [
      { name: '500ml Spray Bottle', price: 299, originalPrice: 450, inStock: true }
    ],
    featured: false,
    bestseller: true,
    newArrival: false,
    badge: '100% Organic'
  },

  // 38. Hand-Forged Ergonomic Garden Trowel & Pruner Set
  {
    name: 'Artisan Carbon Steel Hand Pruner & Trowel Duo',
    botanicalName: 'Heritage Tooling',
    slug: 'artisan-garden-trowel-pruner-set',
    categorySlug: 'garden-tools',
    description: 'Precision forged carbon steel bypass pruner and engraved graduated transplanting trowel with oiled ash hardwood handles. Designed to last a lifetime of joyful planting.',
    shortDescription: 'Forged carbon steel tools with ash wood handles.',
    price: 899,
    originalPrice: 1499,
    discount: 40,
    images: [
      'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 51,
    stock: 35,
    tags: ['Carbon Steel', 'Ash Wood', 'Ergonomic', 'Lifetime Quality'],
    spaces: ['Balcony', 'Terrace', 'Garden'],
    care: {
      light: 'N/A',
      water: 'Wipe dry after use, apply light mineral oil yearly',
      temperature: 'All weather',
      humidity: 'N/A',
      petFriendly: true,
      height: 'Set of 2 Tools in Gift Box',
      difficulty: 'Easy'
    },
    sizes: [
      { name: '2-Piece Heritage Gift Set', price: 899, originalPrice: 1499, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Craftsman Set'
  },

  // 39. Dracaena Marginata Dragon Tree
  {
    name: 'Madagascar Dragon Tree (Dracaena Marginata)',
    botanicalName: 'Dracaena reflexa var. angustifolia Baker',
    slug: 'dracaena-marginata-dragon-tree',
    categorySlug: 'indoor-plants',
    description: 'Slender architectural woody stems topped with exploding rosettes of ribbon-thin green leaves edged in brilliant crimson-red. Thrives in dry apartment air and low light conditions.',
    shortDescription: 'Architectural slender trunks with crimson-edged ribbons.',
    price: 449,
    originalPrice: 699,
    discount: 35,
    images: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.7,
    reviewCount: 73,
    stock: 30,
    tags: ['Architectural', 'Drought Hardy', 'Low Care', 'Modern'],
    spaces: ['Living Room', 'Office', 'Entrance'],
    care: {
      light: 'Medium to bright indirect sunlight',
      water: 'Water when top 50% of soil dries (every 9-12 days)',
      temperature: '18°C – 32°C',
      humidity: 'Low to moderate',
      petFriendly: false,
      height: '60 – 100 cm',
      difficulty: 'Easy',
      feeding: 'Quarter strength organic feed every 2 months',
      repotting: 'Every 2 years'
    },
    sizes: [
      { name: 'Standard (6" Pot)', price: 449, originalPrice: 699, inStock: true }
    ],
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: 'Modern Classic'
  },

  // 40. Mid-Century Matte Olive Planter with Wood Stand
  {
    name: 'Mid-Century Matte Olive Ceramic Pot + Acacia Wood Stand',
    botanicalName: 'Architectural Vessel',
    slug: 'mid-century-olive-planter-stand',
    categorySlug: 'pots-planters',
    description: 'Deep matte olive glazed ceramic planter paired with a hand-turned solid acacia hardwood elevation stand. Elevates your favorite snake plant, monstera, or fiddle leaf into gallery art.',
    shortDescription: 'Matte olive vessel on solid acacia wooden elevation stand.',
    price: 999,
    originalPrice: 1599,
    discount: 37,
    images: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80'
    ],
    rating: 4.9,
    reviewCount: 63,
    stock: 25,
    tags: ['Mid-Century', 'Solid Wood', 'Ceramic', 'Gallery Style'],
    spaces: ['Living Room', 'Office', 'Entrance'],
    care: {
      light: 'Indoor use',
      water: 'Internal drainage hole with plug included',
      temperature: 'Indoor',
      humidity: 'Any',
      petFriendly: true,
      height: '8" Diameter x 14" Total Height on Stand',
      difficulty: 'Easy'
    },
    sizes: [
      { name: '8" Pot with Acacia Stand', price: 999, originalPrice: 1599, inStock: true }
    ],
    featured: true,
    bestseller: false,
    newArrival: true,
    badge: 'Design Icon'
  }
];

export const reviewsSeedData = [
  {
    userName: 'Ananya Sharma',
    userLocation: 'Bengaluru, Karnataka',
    rating: 5,
    title: 'Arrived in museum-grade packaging!',
    comment: 'I was honestly nervous ordering a live Monstera online, but GreenyCup’s eco-armor packaging is exceptional. Not a single leaf was bruised or bent. The plant was healthy, glossy, and put out a giant new fenestrated leaf within 2 weeks!',
    verifiedBuyer: true
  },
  {
    userName: 'Rohan Deshmukh',
    userLocation: 'Mumbai, Maharashtra',
    rating: 5,
    title: 'The plant recommendation quiz was spot on',
    comment: 'I live in an apartment with modest indirect light and two cats. The quiz recommended the Calathea Orbifolia and Spider Plant. Both are thriving beautifully and 100% pet safe. Absolutely love GreenyCup!',
    verifiedBuyer: true
  },
  {
    userName: 'Pooja Iyer',
    userLocation: 'Chennai, Tamil Nadu',
    rating: 5,
    title: '8-Year Ficus Bonsai is a true masterpiece',
    comment: 'The craftsmanship on the Ginseng Bonsai is breathtaking. The aerial roots look like an ancient sacred banyan tree. The care card that came along with it was very helpful for routine pruning.',
    verifiedBuyer: true
  },
  {
    userName: 'Vikramaditya Rao',
    userLocation: 'Hyderabad, Telangana',
    rating: 5,
    title: 'Best plant nursery experience in India',
    comment: 'Fast 3-day delivery, healthy root systems, and zero cheap plastic pots. The terracotta duo planters are very high quality breathable clay. Will definitely be re-ordering for my office.',
    verifiedBuyer: true
  }
];
