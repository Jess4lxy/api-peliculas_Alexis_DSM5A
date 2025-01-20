require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3005;

app.use(express.json());

// Main Routes
app.use('/api/movies', require('./routes/movies.routes.js'));

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
