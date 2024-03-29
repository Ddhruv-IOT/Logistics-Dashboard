// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

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


// Generate random number of orders for each status
const generateRandomOrders = () => {
  const delivered = Math.floor(Math.random() * 150000) + 100000; // Between 100,000 and 250,000
  const undelivered = Math.floor(Math.random() * 50000) + 50000; // Between 50,000 and 100,000
  const inTransit = Math.floor(Math.random() * 100000) + 100000; // Between 100,000 and 200,000
  const delayed = Math.floor(Math.random() * 30000) + 20000; // Between 20,000 and 50,000
  const cancelled = Math.floor(Math.random() * 20000) + 10000; // Between 10,000 and 30,000

  const total = delivered + undelivered + inTransit + delayed + cancelled;

  return {
    delivered,
    undelivered,
    inTransit,
    delayed,
    cancelled,
    total,
  };
};

// Define the API endpoint
app.get('/orders', (req, res) => {
  const ordersData = generateRandomOrders();
  res.json(ordersData);
});

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Generate random container data
const generateRandomContainers = () => {
  const base = "http://localhost:3000";
  const containers = [
    {
      id: 11,
      name: "Container Z1AX",
      image: `${base}/images/person_four.jpg`,
      date: "23/12/04",
      status: "Delivered",
      priority: "high"
    },
    {
      id: 12,
      name: "Continer IdA1",
      image: `${base}/images/person_three.jpg`,
      date: "24/01/10",
      status: "Delivered",
      priority: "high"
    },
    {
      id: 13,
      name: "Continer QY1A",
      image: `${base}/images/person_two.jpg`,
      date: "24/01/01",
      status: "In Transit",
      priority: "high"
    },
    {
      id: 14,
      name: "Continer AQ1A",
      image: `${base}/images/person_one.jpg`,
      date: "24/04/01",
      status: "In Transit",
      priority: "general"
    },
    {
      id: 15,
      name: "Continer BX1A",
      image:  `${base}/images/person_one.jpg`,
      date: "24/04/01",
      status: "In Transit",
      priority: "general"
    }, 
    {
      id: 16,
      name: "Continer AADS",
      image:  `${base}/images/person_one.jpg`,
      date: "24/04/01",
      status: "In Transit",
      priority: "general"
    }, 
    {
      id: 17,
      name: "Continer AIRC",
      image:  `${base}/images/person_one.jpg`,
      date: "24/04/01",
      status: "In Transit",
      priority: "general"
    }
  ];

  // Randomly mark 3 to 4 objects with important priority
  const impCount = getRandomNumber(3, 4);
  console.log(impCount);
  for (let i = 0; i < impCount; i++) {
    containers[i].priority = "high";
  }

  return containers;
};

// Define the API endpoint
app.get('/containers', (req, res) => {
  const containersData = generateRandomContainers();
  // add colorClass property to each object

  for (let i = 0; i < containersData.length; i++) {
    const container = containersData[i];
    if (container.status === "Delivered") {
      container.colorClass = "delivered";
    } else if (container.status === "In Transit") {
      container.colorClass = "transit";
    } else if (container.status === "Delayed") {
      container.colorClass = "delayed";
    } else if (container.status === "Cancelled") {
      container.colorClass = "cancelled";
    } else {
      container.colorClass = "none";
    }
  }

  // Calculate the count of priority marked with "important"
  const impCount = containersData.filter(container => container.priority === "high").length;

  res.json({ containers: containersData, impCount });
});


// Calculate the total amount
totalAmount = 1000000;

 budgets = [
  {
    id: 19,
    title: "Containers Payment",
    type: "Automated",
    amount: 220000,
    status: "paid"
  },
  {
    id: 20,
    title: "IoT Contract",
    type: "Automated",
    amount: 16000,
    status: "unpaid"
  },
  {
    id: 21,
    title: "Damarage",
    type: "Manual",
    amount: 20000,
    status: "pending"
  },
  {
    id: 23,
    title: "Taxes",
    type: "Automated",
    amount: 40000,
    status: "unpaid"
  },
  {
    id: 231,
    title: "Electricity",
    type: "Semi-Automated",
    amount: 40000,
    status: "pending"
  },
];

// Generate budgets data
const generateBudgetsData = () => {
  

  // Calculate total amount for budgets
  const budgetsTotal = budgets.reduce((total, budget) => total + budget.amount, 0);

  // Set status for 'savings' based on whether the total amount matches the expected totalAmount
  const savingsStatus = budgetsTotal === totalAmount ? 'complete' : 'incomplete';

  return { budgets, budgetsTotal, savingsStatus };
};
current_day_earning = 200000
saving_amount = 250000
savings_target = 500000
// Generate savings data
const generateSavingsData = () => {
  const savings = [
    {
      id: 27,
      title: "Today's Earning",
      current_day_earning: current_day_earning,
      date_taken: "12/1/24",
      usable_amount: totalAmount + current_day_earning - saving_amount,
      saving_amount: saving_amount,
      savings_target: savings_target,
      totalAmount: totalAmount,
    }
  ];

  return savings;
};

// Define the API endpoint
app.get('/money', (req, res) => {
  const budgetsData = generateBudgetsData();
  const savingsData = generateSavingsData();

  res.json({ budgetsData, savingsData });
});

// Define the API endpoint
app.get('/alerts', (req, res) => {
  const alerts = [
    {
      id: 24,
      title: "Damaged",
      count: 1,
      priority: "HIGH"
    },
    {
      id: 25,
      title: "Low Battery",
      count: 10,
      priority: "LOW"
    },
    {
      id: 26,
      title: "Pressure",
      count: 10,
      priority: "HIGH"
    },
    {
      id: 261,
      title: "Temperature",
      count: 0,
      priority: "LOW"
    }
  ];

  // add color-class based on priority and count
 alert_count = 0;
  for (let i = 0; i < alerts.length; i++) {
    if (alerts[i].priority === "HIGH" && alerts[i].count > 0) {
      alerts[i].colorClass = "important-alert";
      alert_count++;
    } else if (alerts[i].priority === "LOW" && alerts[i].count > 0) {
      alerts[i].colorClass = "low-p-alert";
      alert_count++;
    } else if (alert_count === 0){
      alerts[i].colorClass = "zero-alert";
    }
  }

  res.json({ alerts, alert_count});
});

let randomNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// API endpoint to get the current random number
app.get('/api/random-number', (req, res) => {
  res.json({ randomNumber });
});

// Increment the random number every 2 seconds
setInterval(() => {
  randomNumber++;
}, 2000);

app.post('/pay', (req, res) => {
  const paymentData = req.body;
  console.log('Received payment data:', paymentData);
  totalAmount = totalAmount - paymentData.amountPaid
  if (paymentData.billPaidFor && paymentData.amountPaid > 0) {
    // Split the comma-separated list into an array of titles
    const paidBillTitles = paymentData.billPaidFor.split(',').map(title => title.trim());
  
    // Filter out the paid bills from the budgets array
    const updatedBudgets = budgets.filter(budget => !paidBillTitles.includes(budget.title));
  
    // Update the budgets array with the filtered data
    budgets.length = 0; // Clear the original array
    Array.prototype.push.apply(budgets, updatedBudgets);}
  res.json({ message: paymentData});
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
