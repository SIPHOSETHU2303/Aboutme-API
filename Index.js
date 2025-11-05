const express = require('express');
const app = express();
app.use(express.json());

let profile = {};

app.get('/about', (req, res) => {
  res.json(profile);
});

app.post('/about', (req, res) => {
  profile = req.body;
  res.status(201).json({ message: 'Profile updated successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Import express
const express = require("express");
const app = express();

// Middleware to read JSON data from requests
app.use(express.json());

// Set the port
const PORT = process.env.PORT || 3000;

// Create an in-memory "About Me" object
let aboutMe = {
  summary: "I am Siphosethu Rululu, a student and software engineer in training.",
  languages: ["JavaScript", "Python"],
  frameworks: ["Express", "React"],
  certifications: ["IT Certificate"],
  education: ["Grade 12", "Explore Data Science Program"],
  experience: ["Student at TMA Academy", "Software Engineer Trainee"],
  projects: ["HealthFuelConnect App"]
};

// GET /about – show your profile
app.get("/about", (req, res) => {
  res.json({
    success: true,
    data: aboutMe,
  });
});

// POST /about – update your profile
app.post("/about", (req, res) => {
  const updates = req.body;
  aboutMe = { ...aboutMe, ...updates };
  res.json({
    success: true,
    message: "Profile updated successfully!",
    data: aboutMe,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
