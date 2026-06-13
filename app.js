// CryptoTrack Application

// Sample crypto data
const cryptoData = [
    { symbol: 'BTC', name: 'Bitcoin', price: 45230.50, change: 2.5 },
    { symbol: 'ETH', name: 'Ethereum', price: 2450.75, change: -1.2 },
    { symbol: 'BNB', name: 'Binance Coin', price: 612.30, change: 3.1 },
    { symbol: 'XRP', name: 'Ripple', price: 2.85, change: 0.8 },
    { symbol: 'ADA', name: 'Cardano', price: 1.25, change: -2.3 },
    { symbol: 'SOL', name: 'Solana', price: 198.50, change: 5.2 }
];

// Initialize app
function initApp() {
    loadCryptoData();
    setupEventListeners();
}

// Load and display crypto data
function loadCryptoData() {
    const container = document.getElementById('crypto-container');
    if (!container) return;

    container.innerHTML = '';
    cryptoData.forEach(crypto => {
        const card = createCryptoCard(crypto);
        container.appendChild(card);
    });
}

// Create crypto card element
function createCryptoCard(crypto) {
    const card = document.createElement('div');
    card.className = 'crypto-card';
    
    const changeClass = crypto.change >= 0 ? 'positive' : 'negative';
    const changeSymbol = crypto.change >= 0 ? '+' : '';
    
    card.innerHTML = `
        <h3>${crypto.name} (${crypto.symbol})</h3>
        <div class="crypto-price">$${crypto.price.toFixed(2)}</div>
        <div class="crypto-change ${changeClass}">${changeSymbol}${crypto.change}%</div>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Sign in form
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', handleSignIn);
    }

    // Get Started button
    const getStartedBtn = document.querySelector('.btn-primary');
    if (getStartedBtn && getStartedBtn.textContent === 'Get Started') {
        getStartedBtn.addEventListener('click', () => {
            window.location.href = 'signin.html';
        });
    }
}

// Handle sign in
function handleSignIn(e) {
    e.preventDefault();
    // Simple demo - just redirect to logout page
    setTimeout(() => {
        window.location.href = 'logout.html';
    }, 1000);
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}