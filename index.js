const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'investment-app-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.set('view engine', 'ejs');

// Sample data for demonstration
const portfolioData = {
    totalValue: 125420.50,
    todayChange: 2150.30,
    changePercent: 1.75,
    investments: [
        { symbol: 'AAPL', name: 'Apple Inc.', shares: 50, price: 185.25, change: 2.45, changePercent: 1.34 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 20, price: 142.80, change: -1.20, changePercent: -0.83 },
        { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 75, price: 378.90, change: 5.60, changePercent: 1.50 },
        { symbol: 'TSLA', name: 'Tesla Inc.', shares: 30, price: 248.50, change: 8.25, changePercent: 3.44 },
        { symbol: 'AMZN', name: 'Amazon.com Inc.', shares: 15, price: 156.75, change: -2.10, changePercent: -1.32 }
    ]
};

const marketNews = [
    {
        title: "Market Rallies on Strong Economic Data",
        summary: "Stock markets surged today following better-than-expected employment figures...",
        time: "2 hours ago",
        source: "Financial Times"
    },
    {
        title: "Tech Stocks Lead Weekly Gains",
        summary: "Technology sector outperformed this week with major gains across the board...",
        time: "4 hours ago",
        source: "Bloomberg"
    },
    {
        title: "Federal Reserve Holds Interest Rates Steady",
        summary: "The central bank maintained current interest rate levels citing economic stability...",
        time: "1 day ago",
        source: "Reuters"
    }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        portfolio: portfolioData,
        news: marketNews,
        user: req.session.user || null
    });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', { 
        portfolio: portfolioData,
        user: req.session.user || null
    });
});

app.get('/market', (req, res) => {
    res.render('market', { 
        news: marketNews,
        user: req.session.user || null
    });
});

app.get('/trade', (req, res) => {
    res.render('trade', { 
        user: req.session.user || null
    });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Simple demo login - in production, use proper authentication
    if (email && password) {
        req.session.user = { email, name: 'Investor' };
        res.redirect('/');
    } else {
        res.render('login', { error: 'Invalid credentials' });
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.post('/api/trade', (req, res) => {
    const { action, symbol, quantity, price } = req.body;
    // Demo trade execution
    res.json({
        success: true,
        message: `${action} order for ${quantity} shares of ${symbol} at $${price} executed successfully`,
        orderId: Math.random().toString(36).substr(2, 9)
    });
});

app.listen(port, () => {
    console.log(`Investment Web App running on port ${port}`);
    console.log(`Visit: http://localhost:${port}`);
});