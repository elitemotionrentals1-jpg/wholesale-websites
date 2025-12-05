// Shopping Cart Functionality
let cart = JSON.parse(localStorage.getItem('sneakersCart')) || [];

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    localStorage.setItem('sneakersCart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    showNotification('Sneakers added to cart!');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('sneakersCart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        localStorage.setItem('sneakersCart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price}/pair</div>
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
                        <button onclick="updateQuantity(${index}, -1)" style="background: var(--border-color); border: none; width: 30px; height: 30px; border-radius: 0.25rem; cursor: pointer;">-</button>
                        <span>Qty: ${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)" style="background: var(--border-color); border: none; width: 30px; height: 30px; border-radius: 0.25rem; cursor: pointer;">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})">×</button>
            </div>
        `;
    }).join('');
    
    cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    // Show thank you message
    const total = document.getElementById('cartTotal').textContent;
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Clear cart
    cart = [];
    localStorage.setItem('sneakersCart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    toggleCart();
    
    // Show thank you message
    showThankYouMessage(itemCount, total);
}

function showThankYouMessage(itemCount, total) {
    const messageDiv = document.createElement('div');
    messageDiv.id = 'thankYouMessage';
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 3rem;
        border-radius: 1rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        z-index: 1001;
        text-align: center;
        max-width: 500px;
        animation: fadeIn 0.3s;
    `;
    messageDiv.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
        <h2 style="font-size: 2rem; color: var(--primary-color); margin-bottom: 1rem;">Thank You for Your Purchase!</h2>
        <p style="font-size: 1.1rem; color: var(--text-dark); margin-bottom: 0.5rem;">Your order has been received.</p>
        <p style="font-size: 1rem; color: var(--text-light); margin-bottom: 1.5rem;">Total: $${total} | Items: ${itemCount} pair(s)</p>
        <button onclick="closeThankYou()" style="background: var(--primary-color); color: white; border: none; padding: 0.75rem 2rem; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer;">Close</button>
    `;
    document.body.appendChild(messageDiv);
    
    // Add overlay
    const overlay = document.createElement('div');
    overlay.id = 'thankYouOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        animation: fadeIn 0.3s;
    `;
    overlay.onclick = closeThankYou;
    document.body.appendChild(overlay);
}

function closeThankYou() {
    const message = document.getElementById('thankYouMessage');
    const overlay = document.getElementById('thankYouOverlay');
    if (message) message.remove();
    if (overlay) overlay.remove();
}

function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        animation: slideIn 0.3s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCart();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;
document.head.appendChild(style);

