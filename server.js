const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint for Railway
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Mexicandies server is running' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Mexicandies server is running on port ${PORT}`);
    console.log(`📱 Visit: http://localhost:${PORT}`);
});
