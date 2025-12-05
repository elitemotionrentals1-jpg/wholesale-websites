// Quote Request Functionality
function requestQuote(productName) {
    // Scroll to quote form
    document.getElementById('quote').scrollIntoView({ behavior: 'smooth' });
    
    // Pre-fill product interest if provided
    if (productName) {
        const productSelect = document.getElementById('productInterest');
        if (productSelect) {
            productSelect.value = productName;
        }
    }
}

function submitQuote(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        companyName: document.getElementById('companyName').value,
        contactName: document.getElementById('contactName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        projectType: document.getElementById('projectType').value,
        unitCount: document.getElementById('unitCount').value,
        timeline: document.getElementById('timeline').value,
        productInterest: document.getElementById('productInterest').value,
        projectDetails: document.getElementById('projectDetails').value,
        fileUpload: document.getElementById('fileUpload').files[0] ? document.getElementById('fileUpload').files[0].name : 'No file uploaded'
    };
    
    // Validate required fields
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone || 
        !formData.projectType || !formData.unitCount || !formData.productInterest) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // In a real application, this would send the data to a server
    console.log('Quote Request Submitted:', formData);
    
    // Show success message
    showQuoteSuccess(formData);
    
    // Reset form
    document.getElementById('quoteForm').reset();
}

function showQuoteSuccess(formData) {
    const messageDiv = document.createElement('div');
    messageDiv.id = 'quoteSuccessMessage';
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
        max-width: 600px;
        animation: fadeIn 0.3s;
    `;
    messageDiv.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
        <h2 style="font-size: 2rem; color: var(--primary-color); margin-bottom: 1rem;">Quote Request Submitted!</h2>
        <p style="font-size: 1.1rem; color: var(--text-dark); margin-bottom: 1rem;">Thank you for your interest, ${formData.contactName}.</p>
        <p style="font-size: 1rem; color: var(--text-light); margin-bottom: 0.5rem;">We've received your quote request for:</p>
        <p style="font-size: 1rem; color: var(--text-dark); font-weight: 600; margin-bottom: 1rem;">${formData.productInterest}</p>
        <p style="font-size: 0.95rem; color: var(--text-light); margin-bottom: 1.5rem;">Our team will review your project details and contact you within 24-48 hours.</p>
        <button onclick="closeQuoteSuccess()" style="background: var(--primary-color); color: white; border: none; padding: 0.75rem 2rem; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer;">Close</button>
    `;
    document.body.appendChild(messageDiv);
    
    // Add overlay
    const overlay = document.createElement('div');
    overlay.id = 'quoteSuccessOverlay';
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
    overlay.onclick = closeQuoteSuccess;
    document.body.appendChild(overlay);
}

function closeQuoteSuccess() {
    const message = document.getElementById('quoteSuccessMessage');
    const overlay = document.getElementById('quoteSuccessOverlay');
    if (message) message.remove();
    if (overlay) overlay.remove();
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'error' ? '#ef4444' : 'var(--success-color)';
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${bgColor};
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
    }, 3000);
}

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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

