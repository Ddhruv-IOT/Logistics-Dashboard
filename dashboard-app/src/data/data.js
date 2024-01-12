import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home, link: '/' },
    { id: 2, title: 'Budget', image: iconsImgs.budget, link: '/budget' },
    { id: 3, title: 'Deliveries', image: iconsImgs.plane, link: '/transactions' },
    { id: 4, title: 'Alerts', image: iconsImgs.bell, link: '/alerts' },
    { id: 5, title: 'Bills', image: iconsImgs.bills, link: '/bills' },
    { id: 6, title: 'Reports', image: iconsImgs.report, link: '/reports' },
    { id: 7, title: 'Savings', image: iconsImgs.wallet, link: '/savings' },
    { id: 8, title: 'Financial Advice', image: iconsImgs.wealth, link: '/financial-advice' },
    { id: 9, title: 'Account', image: iconsImgs.user, link: '/account' },
    { id: 10, title: 'Settings', image: iconsImgs.gears, link: '/settings' }
];
export const transactions = [
    {
        id: 11, 
        name: "Container Z1AX",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: 22000
    },
    {
        id: 12, 
        name: "Continer IdA1",
        image: personsImgs.person_three,
        date: "24/01/10",
        amount: 20000
    },
    {
        id: 13, 
        name: "Continer QY1A",
        image: personsImgs.person_two,
        date: "24/01/01",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 14,
        month: "Aug",
        value1: 0,
        value2: 50
    },
    {
        id: 15,
        month: "Sep",
        value1: 0,
        value2: 60
    },
    {
        id: 16,
        month: "Oct",
        value1: 0,
        value2: 50
    },
    {
        id: 17,
        month: "Nov",
        value1: 0,
        value2: 60
    },
    {
        id: 18,
        month: "Dec",
        value1: 0,
        value2: 50
    }
];

export const budget = [
    {
        id: 19, 
        title: "Containers Payment",
        type: "Automated",
        amount: 220000
    },
    {
        id: 20, 
        title: "IoT Contract",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "Damarage",
        type: "Manual",
        amount: 20000
    },
    {
        id: 23, 
        title: "Taxes",
        type: "Automated",
        amount: 40000
    },

    {
        id: 231, 
        title: "Electricity",
        type: "Semi-Automated",
        amount: 40000
    }, 

];

export const alerts = [
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
        count: 1,
        priority: "LOW"

    },

    {
        id: 261,
        title: "Temperature",
        count: 10,
        priority: "LOW"

    }
];

export const savings = [
    {
        id: 27,
        saving_amount: 250000,
        title: "Today's Earning",
        date_taken: "23/12/22",
        amount_left: 900000
    }
]