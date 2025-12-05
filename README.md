# Wholesale B2B Websites

Two separate wholesale websites for store owners and distributors.

## Websites

### 1. CounterTop Pro - Kitchen Countertop Materials
- **Location**: `index.html`
- **Focus**: Premium countertop materials (Granite, Quartz, Marble, etc.)
- **Features**: 
  - Product catalog with images
  - Shopping cart functionality
  - Wholesale pricing information
  - B2B-focused design

### 2. SneakerHub Wholesale - Premium Sneakers
- **Location**: `sneakers/index.html`
- **Focus**: Authentic sneakers for retailers
- **Features**:
  - Sneaker collection with images
  - Shopping cart functionality
  - Wholesale pricing information
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

1. Open `index.html` in your web browser to view the countertop website
2. Click "Sneakers Wholesale →" in the navigation to visit the sneakers site
3. Add products to cart and proceed to checkout
4. Cart data is saved in browser's local storage

## File Structure

```
websites sample/
├── index.html          # Main countertop website
├── styles.css          # Countertop site styles
├── script.js           # Countertop site JavaScript
├── sneakers/
│   ├── index.html      # Sneakers website
│   ├── styles.css      # Sneakers site styles
│   └── script.js       # Sneakers site JavaScript
└── README.md           # This file
```

## Notes

- Images are loaded from Unsplash (requires internet connection)
- Shopping carts use separate localStorage keys for each site
- Checkout is a demo - in production, this would connect to a payment processor
- Both sites are fully functional and ready to use

