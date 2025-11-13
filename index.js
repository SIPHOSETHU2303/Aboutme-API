const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

let aboutMe = {
  summary: "I am Siphosethu Rululu, a student and software engineer in training.",
  languages: ["JavaScript", "Python"],
  frameworks: ["Express", "React"],
  certifications: ["IT Certificate"],
  education: ["Grade 12", "Explore Data Science Program"],
  experience: ["Student at TMA Academy", "Software Engineer Trainee"],
  projects: ["HealthFuelConnect App"]
};

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the About Me API!" });
});

app.get("/about", (req, res) => {
  res.json({ success: true, data: aboutMe });
});

app.post("/about", (req, res) => {
  const updates = req.body;
  aboutMe = { ...aboutMe, ...updates };
  res.json({ success: true, message: "Profile updated successfully!", data: aboutMe });
});
console.log(`http://localhost:${PORT}`);
http://localhost:3000
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});


