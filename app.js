const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Express on Render!');
});

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});