const products = [
  {
    id: 1,
    name: "All-Weather Tires",
    category: "tires",
    price: 99.99,
    description: "Premium all-weather tires for any season",
    icon: "🛞"
  },
  {
    id: 2,
    name: "Steel Wheels",
    category: "wheels",
    price: 149.99,
    description: "Durable steel wheels for trucks and SUVs",
    icon: "⚙️"
  },
  {
    id: 3,
    name: "Motor Oil (5L)",
    category: "parts",
    price: 34.99,
    description: "High-quality synthetic motor oil",
    icon: "🛢️"
  },
  {
    id: 4,
    name: "Air Filter",
    category: "parts",
    price: 24.99,
    description: "OEM quality air filter replacement",
    icon: "💨"
  },
  {
    id: 5,
    name: "Brake Pads",
    category: "parts",
    price: 89.99,
    description: "Premium brake pads for safe stopping",
    icon: "🛑"
  },
  {
    id: 6,
    name: "LED Headlights",
    category: "accessories",
    price: 199.99,
    description: "Bright LED headlight upgrade",
    icon: "💡"
  },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}