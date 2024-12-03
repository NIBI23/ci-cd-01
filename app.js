const express = require('express');
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send({ status: 'UP' });
});

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, Dockerized Node.js App!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

