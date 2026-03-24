# Preferred Automotive Co. - E-Commerce Store & Mobile Mechanic Shop

A modern, responsive e-commerce platform for auto parts, tires, wheels, accessories, and mobile mechanic services.

## 🚀 Features

- Product catalog (auto parts, tires, wheels, accessories)
- Shopping cart & checkout
- Stripe payment integration
- Mobile mechanic service booking
- Responsive design (mobile-first)
- Fast performance (Next.js optimized)
- SEO-friendly

## 🛠️ Tech Stack

- **Frontend:** Next.js 13+ (React)
- **Styling:** Tailwind CSS
- **Payments:** Stripe
- **Hosting:** GitHub Pages / Vercel
- **Version Control:** Git & GitHub

## 📋 Prerequisites

- Node.js 16+ and npm
- Stripe account (free or paid)
- GitHub account

## 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thepresentwithme-blip/Preferred-store-mobile-mechanic-shop.git
   cd Preferred-store-mobile-mechanic-shop
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local`
   - Add your Stripe API keys from https://dashboard.stripe.com/apikeys

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` in your browser

## 📁 Project Structure

```
.
├── pages/
│   ├── index.js           # Home page
│   ├── products.js        # Product listing
│   ├── cart.js            # Shopping cart
│   ├── checkout.js        # Checkout flow
│   └── api/
│       ├── products.js    # Products API endpoint
│       └── stripe-checkout.js  # Stripe integration
├── components/
│   ├── Header.js          # Navigation
│   ├── Footer.js          # Footer
│   ├── ProductCard.js     # Product display
│   └── Cart.js            # Cart management
├── public/                # Static assets
├── styles/                # Global styles
├── .env.local.example     # Environment template
└── package.json           # Dependencies
```

## 🛍️ Adding Products

Edit `pages/api/products.js` to add your auto parts, tires, wheels, and accessories

## 💳 Stripe Setup

1. Create a free account at https://stripe.com
2. Get your API keys from the Dashboard
3. Add keys to `.env.local`
4. Test with card: `4242 4242 4242 4242`

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Visit https://vercel.com
3. Connect your repository
4. Deploy automatically

---

**Built with ❤️ for Preferred Automotive Co. - Denver, Colorado**