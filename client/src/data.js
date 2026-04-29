const DESTINATIONS = [
  {
    _id: "d1",
    name: "Santorini",
    country: "Greece",
    shortDescription: "Iconic white villages and stunning Aegean sunsets",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    category: "Beach",
    rating: 4.9,
    reviewCount: 1240,
    highlights: [
      "Oia Sunset",
      "Caldera Views",
      "Black Sand Beach",
      "Wine Tasting",
    ],
    bestTime: "April–November",
    isFeatured: true,
    isPopular: true,
    description:
      "A stunning island in the Aegean Sea, known for its iconic white-washed buildings, blue-domed churches, and breathtaking sunsets over the caldera.",
  },
  {
    _id: "d2",
    name: "Bali",
    country: "Indonesia",
    shortDescription: "Tropical paradise with temples and rice terraces",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    category: "Cultural",
    rating: 4.8,
    reviewCount: 2100,
    highlights: [
      "Tanah Lot Temple",
      "Tegalalang Rice Terraces",
      "Mount Batur Sunrise",
      "Kuta Beach",
    ],
    bestTime: "April–October",
    isFeatured: true,
    isPopular: true,
    description:
      "Known as the Island of Gods, Bali enchants visitors with its terraced rice paddies, spiritual temples, and vibrant arts scene.",
  },
  {
    _id: "d3",
    name: "Swiss Alps",
    country: "Switzerland",
    shortDescription: "Majestic peaks and world-class skiing",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    category: "Mountain",
    rating: 4.9,
    reviewCount: 890,
    highlights: [
      "Matterhorn Views",
      "Jungfraujoch",
      "Interlaken",
      "Lake Lucerne",
    ],
    bestTime: "Dec–Mar (Ski), Jun–Sep (Hike)",
    isFeatured: true,
    isPopular: false,
    description:
      "The Swiss Alps offer year-round adventure with world-class skiing in winter and stunning hiking trails in summer.",
  },
  {
    _id: "d4",
    name: "Kyoto",
    country: "Japan",
    shortDescription: "Ancient temples and traditional Japanese culture",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    category: "Cultural",
    rating: 4.6,
    reviewCount: 1560,
    highlights: [
      "Fushimi Inari",
      "Arashiyama Bamboo Grove",
      "Kinkaku-ji",
      "Tea Ceremony",
    ],
    bestTime: "March–May, October–November",
    isFeatured: false,
    isPopular: true,
    description:
      "Japan's ancient capital preserves over 1,600 Buddhist temples, Shinto shrines, and imperial palaces.",
  },
  {
    _id: "d5",
    name: "Maldives",
    country: "Maldives",
    shortDescription: "Overwater bungalows and crystal-clear lagoons",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    category: "Beach",
    rating: 5.0,
    reviewCount: 780,
    highlights: [
      "Overwater Villas",
      "Snorkeling & Diving",
      "Dolphin Cruises",
      "Sunset Fishing",
    ],
    bestTime: "November–April",
    isFeatured: true,
    isPopular: true,
    description:
      "A tropical nation in the Indian Ocean famous for overwater bungalows, crystal-clear lagoons, and vibrant coral reefs.",
  },
  {
    _id: "d6",
    name: "Safari Kenya",
    country: "Kenya",
    shortDescription: "The Great Migration and Big Five safari",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    category: "Wildlife",
    rating: 4.7,
    reviewCount: 650,
    highlights: [
      "Masai Mara Migration",
      "Big Five Game Drive",
      "Maasai Village",
      "Hot Air Balloon",
    ],
    bestTime: "July–October",
    isFeatured: false,
    isPopular: true,
    description:
      "Kenya offers the quintessential African safari experience — witness the Great Migration and encounter the Big Five.",
  },
  {
    _id: "d7",
    name: "Patagonia",
    country: "Argentina/Chile",
    shortDescription: "Glaciers, peaks and untouched wilderness",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    category: "Adventure",
    rating: 4.8,
    reviewCount: 420,
    highlights: [
      "Torres del Paine",
      "Perito Moreno Glacier",
      "W Trek Hiking",
      "Wildlife Watching",
    ],
    bestTime: "November–March",
    isFeatured: false,
    isPopular: false,
    description:
      "At the southern tip of South America, Patagonia is a land of extremes — glaciers, fjords, peaks, and steppes.",
  },
  {
    _id: "d8",
    name: "Rajasthan",
    country: "India",
    shortDescription: "Royal palaces, forts and vibrant culture",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
    category: "Cultural",
    rating: 3.8,
    reviewCount: 980,
    highlights: [
      "Jaipur Pink City",
      "Udaipur Lake Palace",
      "Thar Desert Safari",
      "Mehrangarh Fort",
    ],
    bestTime: "October–March",
    isFeatured: false,
    isPopular: true,
    description:
      "The Land of Kings — royal palaces, desert forts, camel safaris in the Thar Desert, and the Pink City of Jaipur.",
  },
];

const PACKAGES = [
  {
    _id: "p1",
    title: "Santorini Dream Honeymoon",
    destination: "Santorini",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    duration: "7 Days / 6 Nights",
    groupSize: "2 People",
    price: 2499,
    originalPrice: 3200,
    description:
      "An unforgettable romantic escape to the jewel of the Aegean. Cliffside suites, private sunset dinners, and wine tasting in volcanic vineyards.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Oia Exploration",
        description:
          "Arrive in Santorini, check-in at cliffside suite, evening stroll in Oia village.",
        activities: [
          "Airport Transfer",
          "Hotel Check-in",
          "Oia Village Walk",
          "Sunset Viewing",
        ],
      },
      {
        day: 2,
        title: "Caldera Sailing Tour",
        description:
          "Full day private catamaran sailing around the caldera with snorkeling stop.",
        activities: [
          "Private Catamaran",
          "Hot Springs Swim",
          "Lighthouse Visit",
          "Seafood BBQ",
        ],
      },
      {
        day: 3,
        title: "Wine & Culture Day",
        description:
          "Visit volcanic vineyards and the Museum of Prehistoric Thira in Fira.",
        activities: [
          "Wine Tasting",
          "Prehistoric Thira Museum",
          "Local Cuisine Tour",
        ],
      },
      {
        day: 4,
        title: "Red & Black Beaches",
        description:
          "A relaxed beach day on two of the most unique beaches in Europe.",
        activities: ["Red Beach", "Perissa Black Beach", "Fresh Seafood Lunch"],
      },
      {
        day: 5,
        title: "Ancient Akrotiri",
        description:
          "Explore the ancient Minoan 'Pompeii of the Aegean', buried under volcanic ash.",
        activities: [
          "Akrotiri Ruins Tour",
          "Local Market",
          "Private Candlelit Dinner",
        ],
      },
      {
        day: 6,
        title: "Fira & Spa Day",
        description:
          "Wander the cliffside capital, then unwind with a couples spa treatment.",
        activities: [
          "Fira Cable Car Ride",
          "Caldera Walk",
          "Couples Spa",
          "Farewell Dinner",
        ],
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Late checkout, last souvenir shopping, then transfer to Santorini airport.",
        activities: ["Breakfast", "Souvenir Shopping", "Airport Transfer"],
      },
    ],
    includes: [
      "Return Flights",
      "6 Nights Cliffside Hotel",
      "Daily Breakfast",
      "Airport Transfers",
      "Private Sailing Tour",
      "Wine Tasting Experience",
      "Travel Insurance",
    ],
    excludes: [
      "Visa Fees",
      "Personal Expenses",
      "Most Lunches & Dinners",
      "Tips & Gratuities",
    ],
    category: "Honeymoon",
    difficulty: "Easy",
    rating: 4.9,
    reviewCount: 324,
    isFeatured: true,
    discount: 22,
    tags: ["Romantic", "Beach", "Luxury"],
  },
  {
    _id: "p2",
    title: "Bali Cultural Immersion",
    destination: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    duration: "10 Days / 9 Nights",
    groupSize: "Up to 12",
    price: 1899,
    originalPrice: 2400,
    description:
      "Dive deep into Balinese culture, spirituality, and natural beauty. From Ubud's art scene to Seminyak's beaches.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Denpasar",
        description:
          "Transfer to Ubud resort, settle in and enjoy a welcome dinner.",
        activities: [
          "Airport Pickup",
          "Ubud Resort Check-in",
          "Welcome Dinner",
        ],
      },
      {
        day: 2,
        title: "Sacred Temples & Rice Terraces",
        description:
          "Visit Tirta Empul temple for a spiritual purification ceremony and the iconic Tegalalang terraces.",
        activities: [
          "Tirta Empul Temple",
          "Tegalalang Rice Terraces",
          "Ubud Art Market",
        ],
      },
      {
        day: 3,
        title: "Mount Batur Sunrise Trek",
        description:
          "Pre-dawn trek to the volcano summit for a breathtaking sunrise above the clouds.",
        activities: [
          "4AM Sunrise Trek",
          "Volcanic Crater Views",
          "Hot Springs Soak",
        ],
      },
      {
        day: 4,
        title: "Traditional Arts & Cooking",
        description:
          "Learn Balinese cooking and watch Kecak fire dance at sunset.",
        activities: ["Balinese Cooking Class", "Kecak Fire Dance Performance"],
      },
      {
        day: 5,
        title: "Seminyak Beach Time",
        description:
          "Transfer to coastal Seminyak for relaxed beach days and sunset cocktails.",
        activities: ["Beach Club Visit", "Sunset Cocktails", "Seafood Dinner"],
      },
    ],
    includes: [
      "9 Nights Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Temple Tours",
      "Cooking Class",
      "Yoga Session",
      "Travel Guide",
    ],
    excludes: [
      "International Flights",
      "Visa on Arrival Fee",
      "Lunch & Dinner",
      "Personal Expenses",
    ],
    category: "Cultural",
    difficulty: "Moderate",
    rating: 4.8,
    reviewCount: 412,
    isFeatured: true,
    discount: 21,
    tags: ["Cultural", "Spiritual", "Adventure"],
  },
  {
    _id: "p3",
    title: "Swiss Alps Winter Adventure",
    destination: "Swiss Alps",
    country: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    duration: "8 Days / 7 Nights",
    groupSize: "Up to 8",
    price: 3299,
    originalPrice: 3800,
    description:
      "Conquer the Alps with world-class skiing, snow-capped peaks, and charming mountain villages.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zürich",
        description:
          "Arrive and transfer by scenic train to Interlaken alpine resort.",
        activities: [
          "Zürich Airport Transfer",
          "Scenic Mountain Train",
          "Fondue Welcome Dinner",
        ],
      },
      {
        day: 2,
        title: "Jungfraujoch — Top of Europe",
        description:
          "Visit the highest railway station in Europe at 3,454m — spectacular glacier views.",
        activities: ["Jungfrau Railway", "Ice Palace", "Observation Deck"],
      },
      {
        day: 3,
        title: "First Ski Day — Grindelwald",
        description:
          "Full day on the Grindelwald ski slopes with a ski instructor.",
        activities: [
          "Ski Instructor (AM)",
          "Free Ski (PM)",
          "Hot Chocolate Break",
        ],
      },
    ],
    includes: [
      "7 Nights Alpine Hotel",
      "5-Day Ski Pass",
      "Equipment Rental",
      "Breakfast & Dinner",
      "Airport Transfers",
      "2 Days Ski Instructor",
    ],
    excludes: [
      "International Flights",
      "Travel Insurance",
      "Lunch",
      "Après-ski & Personal Shopping",
    ],
    category: "Adventure",
    difficulty: "Challenging",
    rating: 4.9,
    reviewCount: 187,
    isFeatured: true,
    discount: 13,
    tags: ["Skiing", "Mountains", "Winter"],
  },
  {
    _id: "p4",
    title: "Maldives Overwater Luxury",
    destination: "Maldives",
    country: "Maldives",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    duration: "6 Days / 5 Nights",
    groupSize: "2 People",
    price: 4500,
    originalPrice: 5500,
    description:
      "The ultimate luxury escape. Overwater villa with direct lagoon access, world-class diving, and exceptional fine dining.",
    itinerary: [
      {
        day: 1,
        title: "Seaplane Arrival",
        description:
          "Arrive in Malé and board a scenic seaplane to your private island resort.",
        activities: [
          "Seaplane Transfer",
          "Villa Check-in",
          "Welcome Cocktails",
        ],
      },
      {
        day: 2,
        title: "Ocean Exploration",
        description:
          "Snorkelling over pristine coral reefs and an evening underwater glass-floor dining experience.",
        activities: [
          "Reef Snorkelling",
          "Marine Biologist Guide",
          "Underwater Restaurant Dinner",
        ],
      },
      {
        day: 3,
        title: "Dolphin Safari & Spa",
        description:
          "Sunset dolphin cruise followed by a blissful couples spa treatment.",
        activities: [
          "Dolphin Cruise",
          "Sunset Drinks",
          "Couples Spa Treatment",
        ],
      },
    ],
    includes: [
      "5 Nights Overwater Villa",
      "All Meals (Full Board)",
      "Seaplane Transfers",
      "Snorkelling Equipment",
      "Sunset Cruise",
      "Couples Spa Treatment",
    ],
    excludes: [
      "International Flights",
      "Alcohol",
      "Premium Water Sports",
      "Tips",
    ],
    category: "Luxury",
    difficulty: "Easy",
    rating: 5.0,
    reviewCount: 98,
    isFeatured: true,
    discount: 18,
    tags: ["Luxury", "Beach", "Romantic"],
  },
  {
    _id: "p5",
    title: "Kenya Wildlife Safari",
    destination: "Masai Mara",
    country: "Kenya",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    duration: "9 Days / 8 Nights",
    groupSize: "Up to 6",
    price: 2899,
    originalPrice: 3500,
    description:
      "Witness the Great Migration and encounter the Big Five on this ultimate African safari with luxury tented camps.",
    itinerary: [
      {
        day: 1,
        title: "Nairobi Arrival",
        description:
          "Arrive Nairobi, transfer to Giraffe Centre and overnight at Nairobi Safari Club.",
        activities: [
          "Nairobi Transfer",
          "Giraffe Centre Visit",
          "Safari Briefing",
        ],
      },
      {
        day: 2,
        title: "Fly to Masai Mara",
        description:
          "Charter flight to the Mara. Afternoon game drive looking for lions and elephants.",
        activities: [
          "Charter Flight",
          "Afternoon Game Drive",
          "Sundowner Drinks",
        ],
      },
      {
        day: 3,
        title: "Great Migration",
        description:
          "Full day game drive to witness the dramatic wildebeest river crossing.",
        activities: [
          "Full Day River Crossing Stake-out",
          "Bush Lunch",
          "Evening Drive",
        ],
      },
    ],
    includes: [
      "8 Nights Luxury Tented Camp",
      "All Meals",
      "Twice-Daily Game Drives",
      "Park Entry Fees",
      "Hot Air Balloon Ride",
      "Maasai Village Visit",
    ],
    excludes: [
      "International Flights",
      "Visa Fees",
      "Personal Items",
      "Gratuities",
    ],
    category: "Adventure",
    difficulty: "Moderate",
    rating: 4.8,
    reviewCount: 156,
    isFeatured: false,
    discount: 17,
    tags: ["Safari", "Wildlife", "Africa"],
  },
  {
    _id: "p6",
    title: "Rajasthan Royal Heritage Tour",
    destination: "Rajasthan",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
    duration: "12 Days / 11 Nights",
    groupSize: "Up to 15",
    price: 1299,
    originalPrice: 1800,
    description:
      "Journey through the regal heartland of India — golden forts, lake palaces, desert sands, and painted havelis.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Jaipur — The Pink City",
        description:
          "Check in to heritage haveli hotel. Evening walk through the old city bazaars.",
        activities: [
          "Airport Transfer",
          "Heritage Hotel Check-in",
          "Johari Bazaar Walk",
        ],
      },
      {
        day: 2,
        title: "Amber Fort & City Palace",
        description:
          "Morning elephant ride up to Amber Fort, afternoon at the ornate City Palace.",
        activities: [
          "Amber Fort Elephant Ride",
          "City Palace Tour",
          "Jantar Mantar Observatory",
        ],
      },
      {
        day: 3,
        title: "Jaisalmer — The Golden City",
        description: "Train to Jaisalmer. Explore the living fort at sunset.",
        activities: [
          "Jaisalmer Fort Walk",
          "Patwon Ki Haveli",
          "Rooftop Sunset Dinner",
        ],
      },
    ],
    includes: [
      "11 Nights Heritage Hotels",
      "Daily Breakfast",
      "AC Private Vehicle",
      "Expert Guide",
      "Camel Safari",
      "Folk Dance Show",
    ],
    excludes: ["Flights", "Visa", "Most Meals", "Personal Expenses"],
    category: "Cultural",
    difficulty: "Easy",
    rating: 4.7,
    reviewCount: 289,
    isFeatured: false,
    discount: 28,
    tags: ["Cultural", "Heritage", "India"],
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah & James Mitchell",
    location: "London, UK",
    avatar:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=100&q=80",
    rating: 5,
    review:
      "Our Santorini honeymoon was pure magic. Every detail was perfectly arranged — from our cliffside suite to the private sunset dinner. Wanderlust made our dream trip a reality!",
    destination: "Santorini",
    tripType: "Honeymoon",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    review:
      "The Bali Cultural Immersion was life-changing. The guides were so knowledgeable and the itinerary struck a perfect balance between discovery and relaxation.",
    destination: "Bali",
    tripType: "Solo Travel",
  },
  {
    name: "The Johnson Family",
    location: "New York, USA",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=80",
    rating: 5,
    review:
      "Rajasthan with the kids was incredible! The camel safari, fort visits, and puppet shows kept everyone entertained. Wanderlust handled everything seamlessly — we'll be back!",
    destination: "Rajasthan",
    tripType: "Family Trip",
  },
  {
    name: "Marco & Elena Rossi",
    location: "Milan, Italy",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    review:
      "The Maldives overwater villa was beyond anything we imagined. Waking up to that turquoise water every morning felt surreal. Worth every single penny.",
    destination: "Maldives",
    tripType: "Anniversary Trip",
  },
  {
    name: "David Chen",
    location: "Singapore",
    avatar:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=100&q=80",
    rating: 4,
    review:
      "Swiss Alps skiing package was perfectly organised. Outstanding hotel, excellent instructor, and the scenery was absolutely jaw-dropping. A truly memorable trip.",
    destination: "Swiss Alps",
    tripType: "Friends Trip",
  },
];

export { DESTINATIONS, PACKAGES, TESTIMONIALS };
