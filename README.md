<div align="center">
  <h1>🌿 Paradise Nursery</h1>
  <p><strong>A modern, immersive, and responsive e-commerce storefront for premium houseplants.</strong></p>
  
  <p>
    <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
    <img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
    <img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
    <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
  </p>
</div>

<br />

## ✨ Features

- 🪴 **Modern Glassmorphism UI**: A beautifully cohesive, nature-inspired design system with smooth CSS transitions layered over a lush background overlay.
- 🛒 **Global State Management**: Built-in React Context API (`CartContext`) for seamless cart state synchronization across components.
- 🚀 **Lightning Fast Routing**: Client-side routing powered by `react-router-dom` navigating between the Landing Page, Product Listing, and Shopping Cart.
- 📱 **Responsive Layout**: Adapts gracefully to mobile, tablet, and desktop viewports using CSS Grid and Flexbox.
- 🛍️ **Interactive Cart Experience**:
  - Dynamically calculated totals (items and cost).
  - Add/Remove quantity controls.
  - Automatic removal of items when quantity drops to 0.
  - Real-time synchronization of "Add to Cart" buttons on the product page.

<br />

## 🛠️ Tech Stack

- **Framework**: React
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid, Backdrop Filter)
- **State**: Redux Toolkit & React-Redux

<br />

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MahmoudEsawi/e-plantShopping.git
   cd e-plantShopping
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the App:**
   Open your browser and visit the local URL shown in your terminal (typically `http://localhost:5173`).

<br />

## 📁 Project Structure

```text
src/
├── AboutUs.jsx          # Landing Page
├── App.jsx              # Main application component & routing setup
├── App.css              # Global styles and responsive design
├── CartItem.jsx         # Shopping Cart page component
├── CartSlice.jsx        # Redux Toolkit implementation
├── ProductList.jsx      # Product listing page with categories
├── main.jsx             # React entry point
└── store.js             # Redux store configuration
```

<br />

<div align="center">
  <p>Final Project for IBM Front-End Developer Capstone ❤️ ☕</p>
</div>