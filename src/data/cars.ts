export const CARS_DATA = {
  '1': {
    make: "Mercedes-Benz",
    model: "AMG GT",
    year: 2023,
    price: 159990,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    rating: 4.7,
    specs: {
      engine: "AMG 4.0L V8 biturbo",
      power: "503 hp",
      acceleration: "3.7s",
      transmission: "AMG SPEEDSHIFT",
      capacity: 4,
      features: ["AMG Night Pack", "Panorama Roof", "AMG Body Kit"]
    },
    colors: ["#FFFFFF", "#000000", "#0066CC", "#CC0000", "#E5C687"],
    description: "Experience unmatched luxury and performance with the Mercedes-AMG GT."
  },
  '2': {
    make: "BMW",
    model: "M8 Competition",
    year: 2023,
    price: 130500,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    rating: 4.8,
    specs: {
      engine: "4.4L V8 Twin-Turbo",
      power: "617 hp",
      acceleration: "3.2s",
      transmission: "8-speed M Steptronic",
      capacity: 4,
      features: ["M Carbon Package", "Laser Headlights", "Merino Leather"]
    },
    colors: ["#000000", "#FFFFFF", "#C0C0C0", "#000080", "#8B0000"],
    description: "The ultimate expression of BMW's performance and luxury."
  },
  '3': {
    make: "Porsche",
    model: "911 GT3",
    year: 2023,
    price: 169990,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    rating: 4.9,
    specs: {
      engine: "4.0L Flat-6",
      power: "502 hp",
      acceleration: "3.2s",
      transmission: "7-speed PDK",
      capacity: 2,
      features: ["Sport Chrono Package", "Carbon Ceramic Brakes", "Sport Seats Plus"]
    },
    colors: ["#FF0000", "#FFFFFF", "#000000", "#00FF00", "#0000FF"],
    description: "Pure driving excellence in its most refined form."
  },
  '4': {
    make: "Audi",
    model: "RS e-tron GT",
    year: 2023,
    price: 142000,
    image: "https://images.unsplash.com/photo-1612825173281-9a193378527e",
    rating: 4.7,
    specs: {
      engine: "Dual Electric Motors",
      power: "637 hp",
      acceleration: "3.1s",
      transmission: "2-speed automatic",
      capacity: 4,
      features: ["Matrix LED headlights", "Adaptive air suspension", "Carbon roof"]
    },
    colors: ["#SILVER", "#BLACK", "#RED", "#BLUE", "#WHITE"],
    description: "The future of electric performance is here."
  },
  '5': {
    make: "Tesla",
    model: "Model S Plaid",
    year: 2023,
    price: 129990,
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771",
    rating: 4.8,
    specs: {
      engine: "Tri Motor Electric",
      power: "1,020 hp",
      acceleration: "1.99s",
      transmission: "Single-speed",
      capacity: 5,
      features: ["Autopilot", "17\" Touchscreen", "Glass Roof"]
    },
    colors: ["#FFFFFF", "#000000", "#FF0000", "#0000FF", "#808080"],
    description: "The quickest accelerating car in production today."
  },
  '6': {
    make: "Lamborghini",
    model: "Huracán",
    year: 2023,
    price: 249990,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a",
    rating: 4.9,
    specs: {
      engine: "5.2L V10",
      power: "631 hp",
      acceleration: "2.9s",
      transmission: "7-speed LDF",
      capacity: 2,
      features: ["Carbon Ceramic Brakes", "Lifting System", "Sport Exhaust"]
    },
    colors: ["#FF0000", "#000000", "#FFFFFF", "#FFA500", "#00FF00"],
    description: "Pure Italian performance and design in its most dramatic form."
  },
  '7': {
    make: "McLaren",
    model: "720S",
    year: 2023,
    price: 299990,
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c",
    rating: 4.8,
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "710 hp",
      acceleration: "2.8s",
      transmission: "7-speed SSG",
      capacity: 2,
      features: ["Variable Drift Control", "Active Dynamics Panel", "Carbon Fiber Monocage"]
    },
    colors: ["#FF4500", "#000000", "#FFFFFF", "#4169E1", "#FFD700"],
    description: "Revolutionary aerodynamics meet breathtaking performance."
  },
  '8': {
    make: "Ferrari",
    model: "SF90 Stradale",
    year: 2023,
    price: 509990,
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae",
    rating: 4.9,
    specs: {
      engine: "4.0L V8 Hybrid",
      power: "986 hp",
      acceleration: "2.5s",
      transmission: "8-speed DCT",
      capacity: 2,
      features: ["eManettino", "RAC-e", "All-Wheel Drive"]
    },
    colors: ["#FF0000", "#000000", "#FFFFFF", "#FFD700", "#808080"],
    description: "Ferrari's first plug-in hybrid, representing the pinnacle of engineering."
  },
  // Add cars 9-15 with similar structure
};

export const DEALERS_DATA = [
  {
    id: 1,
    name: "Luxury Motors",
    location: "123 Main St, Los Angeles, CA",
    phone: "(555) 123-4567",
    email: "contact@luxurymotors.com",
    website: "www.luxurymotors.com",
    rating: 4.8,
    description: "Premier luxury car dealership specializing in high-end vehicles.",
    image: "https://images.unsplash.com/photo-1562141989-c5c79ac8f576"
  },
  {
    id: 2,
    name: "Elite Auto Gallery",
    location: "456 Ocean Dr, Miami, FL",
    phone: "(555) 234-5678",
    email: "sales@eliteauto.com",
    website: "www.eliteautogallery.com",
    rating: 4.9,
    description: "Exclusive dealership offering the finest selection of luxury vehicles.",
    image: "https://images.unsplash.com/photo-1549275301-c9d60c273972"
  },
  {
    id: 3,
    name: "Prestige Auto Gallery",
    location: "789 Ocean Blvd, San Diego, CA",
    phone: "(555) 345-6789",
    email: "sales@prestigeauto.com",
    website: "www.prestigeautogallery.com",
    rating: 4.7,
    description: "Luxury car dealership with a focus on exceptional customer service.",
    image: "https://images.unsplash.com/photo-1549275301-c9d60c273972"
  },
  {
    id: 4,
    name: "Premium Motors",
    location: "321 Lake Dr, Chicago, IL",
    phone: "(555) 456-7890",
    email: "info@premiummotors.com",
    website: "www.premiummotors.com",
    rating: 4.9,
    description: "Chicago's premier destination for luxury and exotic vehicles.",
    image: "https://images.unsplash.com/photo-1562141989-c5c79ac8f576"
  },
  // Add dealers 5-10 with similar structure
];
