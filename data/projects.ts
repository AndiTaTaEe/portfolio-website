import MushroomFarmImage from "../public/mushroom_farm.jpg";
import BCDConverterImage from "../public/bcd_architecture.png";
import FoodDeliveryImage from "../public/foodwebsite.png";
import TrafficLightsImage from "../public/traffic-system.jpeg";
import {StaticImageData} from "next/image";
import {PROJECTS_LINKS} from "../constants/links";

export type Project = {
    id: string;
    title: string;
    description: string;
    imageSrc: string | StaticImageData;
    tags: {name: string; highlighted?: boolean}[];
    documentationLinkText?: string;
    documentationLink?: string;
    projectLinkText: string;
    projectLink?: string;
};

export const featuredProjects: Project[] = [
    {
        id: "mushroom-farm-monitoring",
        title: "Mushroom Farm Monitoring System",
        description: "A complete edge-to-cloud architecture using climate sensors for real-time data acquisition and analysis, developed for my bachelor's thesis. The system uses a Raspberry Pi 5 as the edge device, which collects data from various sensors and sends it to a Firebase instance for storage and analysis. The system also includes a React Native mobile application that allows users to monitor the mushroom farm's climate conditions in real-time, receive notifications, and view historical data.",
        imageSrc: MushroomFarmImage,
        tags: [
            { name: "Python", highlighted: true},
            { name: "Typescript", highlighted: true},
            { name: "React Native", highlighted: true},
            { name: "Firebase"},
            { name: "IoT"},
            { name: "ngrok"}
        ],
        documentationLinkText: "View project's documentation",
        documentationLink: PROJECTS_LINKS.mushroomFarmMonitoring.documentationLink,
        projectLinkText: "View project repository",
        projectLink: PROJECTS_LINKS.mushroomFarmMonitoring.projectLink  
    },
    {
        id: "bcd-to-digits-converter",
        title: "Binary Coded Decimal (BCD) to Digits converter",
        description: "A verification environment built in collaboration with two colleagues to test a BCD to digits converter implemented in SystemVerilog. The environment was built using UVM methodology and included a testbench, test cases, and a scoreboard to verify the correctness of the design. Presented at the 4th edition of the Functional Verification Forum organized by the Transilvania University of Brasov.",
        imageSrc: BCDConverterImage,
        tags: [
            { name: "SystemVerilog", highlighted: true},
            { name: "Verilog", highlighted: true},
            { name: "UVM", highlighted: true},
            { name: "Functional Verification" }
        ],
        documentationLinkText: "View project's presentation",
        documentationLink: PROJECTS_LINKS.bcdToDigitsConverter.documentationLink,
        projectLinkText: "View project repository",
        projectLink: PROJECTS_LINKS.bcdToDigitsConverter.projectLink
    },
    {
        id: "food-delivery-web",
        title: "Food Delivery Website",
        description: "A food delivery website built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Stripe API for the payment processing that allows users to browse and order food from local restaurants. The website features a user-friendly interface, real-time order tracking, and secure payment processing.",
        imageSrc: FoodDeliveryImage,
        tags: [
            { name: "MongoDB", highlighted: true},
            { name: "Express.js", highlighted: true},
            { name: "React.js", highlighted: true},
            { name: "Node.js", highlighted: true},
            { name: "Unit Testing"},
            { name: "Stripe API"},
            { name: "Axios"},
            { name: "Jest"}
        ],
        documentationLinkText: "View project's documentation",
        documentationLink: PROJECTS_LINKS.foodDeliveryWebsite.documentationLink,
        projectLinkText: "View project repository",
        projectLink: PROJECTS_LINKS.foodDeliveryWebsite.projectLink
    },
    {
        id: "traffic-lights-system-for-cars",
        title: "Traffic Lights System for cars and pedestrians",
        description: "A traffic lights system for cars and pedestrians implemented in Verilog on a MachXO3LF FPGA, using a finite state machine to control the traffic lights based on the current state of the system. The system was designed to ensure the safety of both cars and pedestrians by providing clear signals for when to stop and go.",
        imageSrc: TrafficLightsImage,
        tags: [
            { name: "Verilog", highlighted: true},
            { name: "Finite State Machine", highlighted: true},
        ],
        projectLinkText: "View project repository",
        projectLink: PROJECTS_LINKS.trafficLightsSystem.projectLink
    }
    
]