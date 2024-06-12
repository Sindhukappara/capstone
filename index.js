// index.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route handler for the root URL
app.get('/', (req, res) => {
    // Send the login.html file when accessing the root URL
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route handler for the "/whether" URL
app.get('/whether', (req, res) => {
    // Send the whether.html file when accessing the "/whether" URL
    res.sendFile(path.join(__dirname, 'public', 'whether.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});