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
  certifications: [
    "Microsoft Azure AI Fundamentals",
    "Microsoft Azure AI Engineer Associate",
    "IBM Python 101 for Data Science",
    "IBM Machine Learning with Python",
    "Udemy Fundamentals of Software Design and Architecture"
  ],
  education: "National Diploma in Information Technology - Tshwane University of Technology",
  experience: "Investhood IT - Software Developer Intern (June 2023 - November 2023)",
  projects: ["Custom LMS", "Portfolio Website"]
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






