# Wholesale B2B Websites

Three separate wholesale websites for store owners, distributors, and multi-unit developers.

## Websites

### 1. KitchenPro Wholesale - Kitchen Appliances & Tools
- **Location**: `index.html`
- **Focus**: Kitchen appliances and tools (Microwaves, Air Fryers, Blenders, etc.)
- **Features**: 
  - Product catalog with images
  - Shopping cart functionality
  - Wholesale pricing (minimum 25 units per item)
  - B2B-focused design

### 2. SneakerHub Wholesale - Premium Sneakers
- **Location**: `sneakers/index.html`
- **Focus**: Authentic sneakers for retailers
- **Features**:
  - Sneaker collection with images
  - Shopping cart functionality
  - Wholesale pricing information
  - B2B-focused design

### 3. Vida Cabinetry & Flooring - Multi-Unit Developer Solutions
- **Location**: `cabinetry/index.html`
- **Focus**: Cabinetry solutions for multi-unit developments
- **Features**:
  - Product catalog with gallery
  - Quote request form for developers
  - Project showcase
  - B2B-focused design

## Features

- ✅ Modern, clean design
- ✅ Responsive layout (mobile-friendly)
- ✅ Shopping cart with local storage persistence
- ✅ Product images from Unsplash
- ✅ Navigation links between both sites
- ✅ Wholesale/B2B focused messaging
- ✅ Smooth animations and transitions

## How to Use

1. Open `index.html` in your web browser to view the KitchenPro website
2. Use the top navigation bar to switch between all three sites
3. Add products to cart and proceed to checkout
4. Cart data is saved in browser's local storage
5. For cabinetry site, use the quote request form for custom quotes

## File Structure

```
websites sample/
├── index.html          # KitchenPro website
├── styles.css          # KitchenPro site styles
├── script.js           # KitchenPro site JavaScript
├── sneakers/
│   ├── index.html      # Sneakers website
│   ├── styles.css      # Sneakers site styles
│   └── script.js       # Sneakers site JavaScript
├── cabinetry/
│   ├── index.html      # Vida Cabinetry website
│   ├── styles.css      # Cabinetry site styles
│   └── script.js       # Cabinetry site JavaScript
└── README.md           # This file
```

## Notes

- Images are loaded from Unsplash (requires internet connection)
- Shopping carts use separate localStorage keys for each site
- Checkout is a demo - in production, this would connect to a payment processor
- Both sites are fully functional and ready to use

