# 💊 Apotekme - Online Pharmacy Web App

Modern e-commerce pharmacy web application built with Next.js 14, TailwindCSS, and TypeScript.
Inspired by the Figma design template with full healthcare features: products, prescriptions, doctor consultations, and more.

![Apotekme](https://img.shields.io/badge/Next.js-14.2-black) ![React](https://img.shields.io/badge/React-18-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

---

## ✨ Features

### 🛒 E-Commerce
- **Homepage** with featured products, categories, special offers, testimonials, and brand showcase
- **Category Page** with sub-categories, trending products, and brand filters
- **Product Detail** with image gallery, variants, reviews, Q&A, related products, and frequently bought together
- **Cart Page** with select all, save for later, promo code, and recommendations
- **Checkout** with billing, shipping methods, and multiple payment options (Credit Card, COD, PayPal)
- **Success Page** after order completion

### 🏥 Healthcare Features
- **Upload Prescription** with file upload, validation guide, and step-by-step process
- **Doctor Consultation Landing** with health concerns, specialties, and how it works
- **Doctor List** with filter, sort, and booking options (Video Consult / Hospital Visit)
- **Doctor Detail** with profile, time slot booking, and FAQs
- **Patient Inquiry Form** modal

### 👤 Account Management
- **Login & Register** pages with social auth UI
- **Order List** with tabs (Active, Cancelled, Completed, Reviews)
- **Personal Info** with editable contact details and addresses
- **Manage Addresses** (Add / Edit)
- **Wishlist** with stock indicators

### 🎨 UI/UX
- Pixel-perfect Figma design implementation
- Sky blue + Navy color scheme matching the template
- Pill-shaped buttons throughout
- Card-based layouts with subtle shadows
- Toast notifications (react-hot-toast)
- Responsive design (mobile, tablet, desktop)
- Custom 404 Error page

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **UI Library** | React 18 |
| **Styling** | Tailwind CSS 3.4 |
| **Icons** | Lucide React |
| **Animations** | Framer Motion |
| **Notifications** | React Hot Toast |
| **Carousel** | Swiper |
| **State** | Zustand |
| **Fonts** | Poppins (via next/font) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** / **yarn** / **pnpm**

### Installation

1. **Clone or extract** this project to your local machine

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
apotekme/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (Header, Footer, Toaster)
│   │   ├── page.tsx                  # Homepage
│   │   ├── globals.css               # Global styles & component classes
│   │   ├── not-found.tsx             # 404 page
│   │   ├── login/                    # Login page
│   │   ├── register/                 # Register page
│   │   ├── category/[slug]/          # Dynamic category page
│   │   ├── product/[slug]/           # Product detail page
│   │   ├── cart/                     # Cart page
│   │   ├── checkout/                 # Checkout page
│   │   ├── success/                  # Order success page
│   │   ├── wishlist/                 # Wishlist page
│   │   ├── upload-prescription/      # Upload prescription page
│   │   ├── doctor-consultation/      # Doctor consultation landing
│   │   ├── doctors/                  # Doctor list page
│   │   ├── doctors/[id]/             # Doctor detail page
│   │   └── account/
│   │       ├── orders/               # My Orders
│   │       ├── personal/             # Personal Info
│   │       └── addresses/            # Add/Edit Address
│   │
│   ├── components/
│   │   ├── layout/                   # Topbar, Header, Footer, Logo, Newsletter
│   │   ├── ui/                       # RatingStars, Breadcrumb, SectionTitle, QuantitySelector
│   │   ├── product/                  # ProductCard, ProductCarousel
│   │   ├── auth/                     # AuthCard
│   │   └── account/                  # AccountSidebar
│   │
│   ├── data/
│   │   └── dummy.ts                  # All dummy data (products, doctors, orders, etc.)
│   │
│   └── lib/
│       ├── types.ts                  # TypeScript interfaces
│       └── utils.ts                  # Utility functions (cn, formatters)
│
├── public/                           # Static assets
├── tailwind.config.ts                # Tailwind config with custom theme
├── next.config.js                    # Next.js config
├── tsconfig.json                     # TypeScript config
└── package.json
```

---

## 🎨 Design System

### Colors

```css
Primary:    #22A4F4 (Sky Blue)
Navy:       #0E2A47 (Dark Navy - text & headings)
SkyBlue BG: #E8F4FB (Light backgrounds)
Topbar:     #0A0F1C (Black announcement bar)
Success:    #22C55E (In stock, success states)
Danger:     #EF4444 (Out of stock, errors)
Warning:    #F59E0B (Pending, ratings)
```

### Components

All reusable components follow the Figma design closely:

- `.btn-primary` - Primary blue pill button
- `.btn-outline` - White outline pill button
- `.btn-secondary` - Navy pill button
- `.input-field` - Standard form input
- `.card` - Card with shadow
- `.badge-discount` - Discount badge for product cards
- `.container-custom` - Max-width container with padding

---

## 📄 Available Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/login` | Login |
| `/register` | Register |
| `/category/[slug]` | Category page (e.g. `/category/personal-care`) |
| `/product/[slug]` | Product detail (e.g. `/product/cerave-pm-facial-moisturizer`) |
| `/cart` | Shopping cart |
| `/checkout` | Checkout |
| `/success` | Order success |
| `/wishlist` | Wishlist |
| `/upload-prescription` | Upload prescription |
| `/doctor-consultation` | Doctor consultation landing |
| `/doctors` | Doctor list with filter |
| `/doctors/[id]` | Doctor detail (e.g. `/doctors/1`) |
| `/account/orders` | My orders |
| `/account/personal` | Personal info |
| `/account/addresses` | Manage addresses |

---

## 💾 Dummy Data

All data is in `src/data/dummy.ts`:

- **12 Products** with images, ratings, descriptions, ingredients, benefits
- **6 Categories** (Personal Care, Health Care, Skin Care, etc.)
- **10 Doctors** with specialization, qualification, experience
- **3 Orders** with different statuses
- **4 Addresses**
- **6 Reviews**
- **11 Brands**
- **3 Testimonials**

---

## 🌐 Image Sources

The app uses external image sources (configured in `next.config.js`):

- **Unsplash** - Product, category, banner images
- **Pravatar** - User & doctor avatars
- **Flaticon** - Brand icons

---

## 🔧 Customization

### Change Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  primary: { DEFAULT: '#22A4F4', ... },
  navy: { DEFAULT: '#0E2A47', ... },
  // ...
}
```

### Add Real Backend

Replace dummy data calls in pages with API fetches:

```tsx
// Before
import { products } from '@/data/dummy';

// After
const products = await fetch('https://api.yourapi.com/products').then(r => r.json());
```

### Add State Management

Zustand is already installed for global state:

```ts
// src/lib/store.ts
import { create } from 'zustand';
// ... your store
```

---

## 📝 Notes

- All forms use **client-side validation only** (no real backend)
- Login/Register simulates success and redirects to homepage
- Cart, Wishlist, and Orders use local state (resets on refresh)
- This is a **frontend-only** demo - integrate with your backend (Laravel, NestJS, etc.) for production

---

## 📜 License

This is a demo project for educational purposes.

---

## 👨‍💻 Built with ❤️ using

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Hot Toast](https://react-hot-toast.com/)
