// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Define a route for the /randomReading endpoint
app.get('/fakeTime', (req, res) => {
    const min = 50;
    const max = 90;
    const randomReading = (Math.random() * (max - min) + min).toFixed(2);
    res.json({ reading: parseFloat(randomReading) });
    res.json({ reading: randomReading });
});

app.get('/fakeWeight', (req, res) => {
    const min = 50;
    const max = 90;
    const randomReading = (Math.random() * (max - min) + min).toFixed(2);
    res.json({ reading: parseFloat(randomReading) });
    res.json({ reading: randomReading });
});

// Generate random values between 45 and 80
const getRandomValue = () => Math.floor(Math.random() * (80 - 45 + 1) + 45);

// Generate reportData
const generateReportData = () => {
  const months = ["Aug", "Sep", "Oct", "Nov", "Dec"];
  return months.map((month, index) => ({
    id: index + 14,
    month,
    value1: getRandomValue(),
    value2: 0//getRandomValue(),
  }));
};

// Define the API endpoint
app.get('/reportData', (req, res) => {
  const reportData = generateReportData();
  res.json(reportData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
