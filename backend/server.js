// server.js (Backend)

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5003;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy data for companies (in-memory storage for now)
const companies = [
  { id: 1, name: 'Company A', description: 'Company A Description' },
  { id: 2, name: 'Company B', description: 'Company B Description' }
];

// Dummy user data (you can replace this with a database later)
const users = [
  { email: 'user@example.com', password: 'password123' } // Mock user credentials
];

// Route to get all companies
app.get('/api/companies', (req, res) => {
  res.json(companies);  // Send the companies array as the response
});

// Route to login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
