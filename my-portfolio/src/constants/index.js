import {
   
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    ko, 
    weatherApp,
    ecom,
    gCafe,
    food,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full-Stack Developer",
        icon: web,
    },
   
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
   
];

const experiences = [
   
    {
        title: "Full stack Developer (Intern)",
        company_name: " KNIGHTOWL.ONLINE",
        icon: ko,
        iconBg: "#E6DEDD",
        date: "July 2024 - Feb 2025",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies(MERN).",
            " Gained experience in using ReactNative for building web/mobile apps and Three.js for presenting interactive 3D web features.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback about the work.",
        ],
    },
];



const projects = [
    {
        name: "weather-change site",
        description:
           "A simple React-based application that fetches real-time weather data using a weather API. Users can search for a city and view current temperature, weather conditions, and other details in an easy-to-read interface",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "weather API",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: weatherApp,
        source_code_link: "https://github.com/SajaniPrathibha",
    },
    {
        name: "Cosmatic App(ecom)",
        description:
            "A web-based platform designed to facilitate the buying and selling of cosmetic products online. It offers a user-friendly interface for browsing, and managing beauty products efficiently.",
        tags: [
            {
                name: "java",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "android studio",
                color: "pink-text-gradient",
            },
        ],
        image: ecom,
        source_code_link: "https://github.com/SajaniPrathibha",
    },
    {
        name: "Hungry-Hub(food delivary)",
        description:
            "A web-based platform for the restaurant 'Hungry', allowing customers to order food online with secure payments, calorie tracking, order forecasting, and a loyalty program. Admins and staff manage orders, while ads are shown based on loyalty points",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: food,
        source_code_link: "https://github.com/SajaniPrathibha",
    },
    {
        name: "Gaming-Cafe",
        description:
            "I developed a frontend web application for a gaming cafe that showcases the cafe’s information, highlights available games, and includes a tournament participation interface. Users can browse the list of games with detailed information about each title. The application also features a clean, responsive UI for logging in and signing up for tournaments.",
        Link:" https://gaming-cafe-site.netlify.app/",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
        ],
        image: gCafe,
        source_code_link: "https://github.com/SajaniPrathibha",
    },
];


export { services, technologies, experiences, projects };