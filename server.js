// Import required modules
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Define a route to serve your frontend
app.use(express.static('public'));

// Define an API endpoint to provide the PayPal client ID
app.get('/api/paypal/client-id', (req, res) => {
    res.json({ clientId: process.env.REACT_APP_API_KEY });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
