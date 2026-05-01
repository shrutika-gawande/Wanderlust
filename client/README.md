# ✈ Wanderlust — Travel Agency Website

<div align="center">

![Wanderlust Banner](https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80)

**Wanderlust Travel & Tours - A fully responsive travel website built using React**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Pages Overview](#-pages-overview)
- [Components](#-components)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌍 About the Project

**Wanderlust** is a professional, fully responsive travel agency website developed as part of a web development assignment. The goal was to design and build a multi-page travel platform with real-world features including destination browsing, package listings with pricing, a booking system, and a validated contact form.

The project follows the **React** based architecture with a clean and modern single-page application frontend.

---

## ✨ Features

### Core (Assignment Requirements)
- ✅ **5 Pages** — Home, About Us, Destinations, Packages, Contact Us
- ✅ **Full Responsiveness** — Mobile, tablet, and desktop layouts
- ✅ **Modern UI/UX** — Luxury editorial design with Cormorant Garamond + DM Sans typography
- ✅ **Navbar & Footer** — Consistent across all pages, transparent-to-solid scroll effect on navbar
- ✅ **Images & Banners** — High-quality imagery via Unsplash, hero banners with overlay effects
- ✅ **Contact Form with Validation** — Field-level validation with error states and success feedback
- ✅ **Proper File Structure** — Separated concerns: models, routes, components, pages, services

### Suggested Features (All Implemented)
- ✅ **Search & Filter Destinations** — Live search by name/country + category filter buttons
- ✅ **Package Listings with Pricing** — Cards with original price, discounted price, and "% OFF" badge
- ✅ **Image Gallery / Slider** — Hero banners and destination image cards
- ✅ **Testimonials Section** — 5 real-style reviews with avatar, rating, and trip type
- ✅ **Call-to-Action Buttons** — "Book Now" and "Enquire Now" throughout all pages

### Bonus Features
- 🎯 **Package Detail Modal** — 3-tab modal (Overview / Itinerary / Includes) with accordion day-by-day
- 📅 **Booking Modal** — Multi-field booking form with live price calculator and booking reference
- 🔍 **Hero Search Bar** — Destination + category + budget search with results redirect
- 📊 **Stats Strip** — Animated statistics (travellers, destinations, years, rating)
- 💌 **Newsletter Subscription** — Email capture in the footer
- 🗂 **Price Range Filter** — Min/max budget filter on the packages page
- 📱 **Mobile Hamburger Menu** — Animated off-canvas navigation for mobile

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React.js | 18.2 | UI framework |
| React Router DOM | 6.21 | Client-side routing |
| Bootstrap | 1.6 | Styling |
| React Icons | 4.12 | Icon library |
| CSS Modules | — | Component-scoped styles |

---

## 📁 Project Structure

```
wanderlust/
│
├── client/                         # React application
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx          # Sticky transparent→solid navbar
│   │   │   ├── Footer.jsx          # Footer with newsletter
│   │   │   ├── PackageModal.jsx    # Package detail + booking modal
│   │   │   ├── PackageCard.jsx     # Reusable package card
│   │   │   ├── BookingModal.jsx    # Booking form 
│   │   │   ├── DestinationCard.jsx # Reusable destination card
│   │   │   └── TestimonialCard.jsx # Reusable review card
│   │   ├── pages/
│   │   │   ├── HomePage.jsx            # Landing page
│   │   │   ├── AboutPage.jsx           # About us page
│   │   │   ├── DestinationsPage.jsx    # Destinations with filter
│   │   │   ├── 
│   │   │   ├── PackagesPage.jsx        # Packages with filter     
│   │   │   └── ContactPage.jsx         # Contact form
│   │   ├── styles/
│   │   │   ├── contact.css
│   │   │   ├── packages.css
│   │   │   ├── about.css
│   │   │   ├── footer.css
│   │   │   ├── home.css
│   │   │   ├── header.css
│   │   │   └── destinations.css        # Frontend mock fallback
│   │   ├── App.jsx                 # Root component + routing
│   │   ├── index.css               # Global styles & design tokens
│   │   └── index.js                # React entry point
│   └── package.json

└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) v9 or higher
- [MongoDB](https://www.mongodb.com/) (local) or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) connection string
- [Git](https://git-scm.com/)

```bash
# Verify installations
node --version   # v18+
npm --version    # v9+
```

---

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/shrutika-gawande/Wanderlust.git
cd wanderlust
```

**2. Install frontend dependencies**

```bash
cd ../client
npm install
```

---

> **Note:** The app runs with mock data

---

### Running the App

Terminal — Start the frontend:
```bash
cd client
npm run dev
# App running on http://localhost:3000
```
---

## 📄 Pages Overview

### 🏠 Home
The landing page features a full-viewport hero with a search bar, animated stats strip, featured destinations grid, popular packages section, testimonials carousel, and a call-to-action banner.

### 👥 About Us
Brand story with a two-column image/content layout, team member profiles, company milestones, stats, and testimonials. Includes values section with animated hover cards.

### 🌍 Destinations
Full catalog of 8+ destinations with:
- Live search input (filters by name, country, description)
- Category filter buttons (Beach, Mountain, Cultural, Adventure, Wildlife)
- Results count display
- Destination detail modal with highlights and best-time info

### 📦 Packages
Complete package listings with:
- Category filter (Honeymoon, Family, Adventure, Cultural, Luxury)
- Price range inputs (min/max budget)
- Keyword search
- Package detail modal — 3 tabs (Overview, Itinerary, Includes)
- Inline booking form with validation and booking reference

### 📬 Contact Us
Professional contact page with:
- Company info panel (address, phone, email, WhatsApp)
- Contact form with full validation:
  - Required field checks
  - Email format validation
  - Minimum message length
  - Subject dropdown
- Success state after submission
- Decorative map placeholder

---

## 🧩 Components

### `PackageModal.jsx`
The most complex component in the project. A full-screen modal with:
- **Tabbed layout** — Overview, Itinerary (accordion), Includes/Excludes
- **Booking flow** — Slides to an inline booking form with validation
- **Wishlist toggle**, discount badge, meta bar, sticky footer CTA
- **Keyboard accessibility** — Closes on `Escape`, focus trapping
- **Props:**

```jsx

### `Navbar.jsx`
Sticky navbar that transitions from transparent (over hero) to solid (on scroll). Includes mobile hamburger with animated off-canvas menu.

### `Footer.jsx`
Full-width footer with brand info, quick links, top destinations, newsletter email capture, and social links.

---

## 🌐 Deployment

### Frontend — Vercel

```bash
# Build the React app
cd client
npm run build

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a **Pull Request**

Please make sure to update tests and documentation as appropriate.

---

## 📝 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 📬 Contact

**Project Author** — Shrutika Gawande

- 🐙 GitHub: [@your-username](https://github.com/shrutika-gawande/)
- 💼 LinkedIn: [your-linkedin](https://www.linkedin.com/in/shrutikaa-gawande)

**Project Link:** [https://github.com/your-username/wanderlust-travel](https://github.com/shrutika-gawande/Wanderlust)

**Live Demo:** [https://wanderlust-travel.netlify.app](https://wanderlust-eta-six.vercel.app/)

---

<div align="center">
  Made with ❤️ and a love for travel
  <br><br>
  <strong>⭐ Star this repo if you found it helpful!</strong>
</div>