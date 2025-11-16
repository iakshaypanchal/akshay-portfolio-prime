import tcsLogo from "../assets/logo/tcs.svg";
import html from "../assets/logo/html.svg";
import css from "../assets/logo/css.svg";
import javascript from "../assets/logo/js.svg";
import typescript from "../assets/logo/ts.svg";
import react from "../assets/logo/react.svg";
import git from "../assets/logo/git.svg";
import github from "../assets/logo/github.svg";
import mongoDb from "../assets/logo/mongo.svg";
import vscode from "../assets/logo/vscode.svg";
import postman from "../assets/logo/postman.svg";

export const PROFILE = {
  name: "Akshay Panchal",
  title: "Front-End Developer",
  email: "akshay.panchal.5648@gmail.com",
  phone: "7048567803",
  location: "India",
  linkedin: "https://www.linkedin.com/in/iakshaypanchal",
};

export const SKILLS = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML & CSS",
  "PrimeReact",
  "Apache ECharts",
  "Redux / Context API",
  "Axios",
  "Git & GitHub",
];

export const SKILLS_ICONS = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "MongoDB",
    icon: mongoDb,
  },
  {
    name: "vsCode",
    icon: vscode,
  },
  {
    name: "Postman",
    icon: postman,
  },
];

export const EXPERIENCE = [
  {
    company: "Tata Consultancy Services",
    title: "Frontend Developer",
    period: "Jul 2021 – Present",
    logo: tcsLogo, // optional
    details: [
      "Led frontend development for multiple enterprise applications.",
      "Migrated legacy Angular/Ionic apps to modern versions.",
      "Developed modular chart components using ECharts.",
      "Worked directly with client teams for requirement gathering.",
    ],
    projects: ["EMTrack WebApp", "EMTrack Mobile", "Tire Process Report", "Email Automation"],
  },
];

export const PROJECTS = [
  {
    title: "Email Automation",
    period: "January 2025 - Present",
    description: `Developed a dynamic frontend using React.js enabling users to view, edit, and manage medical plan details and dependents.
Integrated Docsight for PDF OCR, Circuss (ChatGPT) for structured data extraction, and Kafka for real-time backend streaming.
Utilized Redux + Context API for powerful state management.
Leveraged GitHub Copilot to reduce development time and improve code quality.`,
  },
  {
    title: "Tire Process Report – Tire Management & Inspection System",
    period: "July 2024 - December 2024",
    description: `Generated tire condition reports based on parameters like Tire Number, Barcode, Build Number.
Built 5 critical reports using Apache ECharts with dynamic visualization.
Created user-friendly PrimeReact input components for precise parameter selection.
Reduced manual inspection workload through automated reporting.
Integrated Axios & Context API for API communication and global state.`,
  },
  {
    title: "EMTrack Mobile App",
    period: "August 2023 - June 2024",
    description: `Upgraded Angular v5 → v16 and Ionic v2 → v5 restoring full functionality.
Improved inspection flows to match the web version.
Managed client communication and weekly status updates.
Deployed the mobile app to Google Play Console expanding accessibility.`,
  },
  {
    title: "EMTrack WebApp – Vehicle & Tire Management System",
    period: "July 2021 - July 2023",
    description: `Core vehicle & tire management system enabling technicians to create, edit, delete & track tires.
Implemented reporting to track states: installed, inventory, on-hold, scrap.
Stabilized & optimized the React.js application—fixed critical bugs and improved performance.
Built responsive UI using Material-UI.
Developed ‘Remove All Tires’ bulk operation reducing repetitive manual steps.
Led client communication & requirement alignment.
Awarded "Star of the Month" for key contributions.`,
  },
];
