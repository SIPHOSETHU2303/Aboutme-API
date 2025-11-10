const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Welcome to the About Me API! Visit /about to see the profile.');
});




app.use(express.json());




let profile = {
  summary: "Persistent and practical developer building a strong portfolio. With a strong focus in software development and web technologies.",
  languages: ["JavaScript","Python", "HTML","SQL",],
  frameworks: ["Express", "Composer", "GitHub", "Node.js"],
  certifications: [ "Udemy Fundamentals of Software Design and Architecture"
  ],
  education: "Business Administration",Accounting Science",Data Science",
  experience: "Explore - Data scientist Intern (June 2024 - November 2024)",
  projects: ["Portfolio Website"]
};




// GET endpoint to retrieve profile
app.get('/about', (req, res) => {
  res.json(profile);
});




// POST endpoint to update profile
app.post('/about', (req, res) => {
  profile = { ...profile, ...req.body };
  res.status(200).json({ message: "Profile updated", profile });
});




// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});






