export const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
    {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
];

const words = [
    'I build modern web applications',
    'showcasing my projects',
    'experience and technical skills'
]

const heroLinks = [
  {
    img: './images/logos/cv.png',
    link: 'https://www.youtube.com/'
  },
  {
    img: './images/logos/linkedin.png',
    link: 'https://www.linkedin.com/in/krittiyanee-krongsat-b669952b1'
  },
  {
    img: './images/logos/github.png',
    link: 'https://github.com/krittiyanee-krongsat'
  },
]

const projects = [
  {
    name: "Nextrip",
    description:
      "Built a mobile application that uses AI to recommend travel destinations based on users preferences, budget, and mood, helping users easily find suitable places to visit.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: './images/NexTrip.jpg',
    source_code_link: "https://github.com/krittiyanee-krongsat",
  },

  {
    name: "CRUD System",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: './images/ToDoList.png',
    source_code_link: "https://github.com/krittiyanee-krongsat/CrudSystemToDoList",
  },

  {
    name: "Poke API",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: './images/PokeAPI.png',
    source_code_link: "https://github.com/krittiyanee-krongsat",
  },
]

const experiences = [
  {
    review: "IT and multimedia consulting company specializing in the design and development of digital solutions, including web applications and interactive media.",
    imgPath: "./images/CodeSmash.png",
    logoPath: "./images/Logo_1.png",
    title: "Full Stack Developer Internship",
    date: "June 2024 - November 2024",
    reponsibilities: [
      "Designed UX/UI using Figma and built component based UI with Storybook.",
      "Developed interactive web applications and a card matching game using React.",
      "Integrated frontend with backend services using AJAX and REST APIs.",
    ],
  },
  {
    review: "A Coursera course focused on applying Generative AI to improve collaboration, development workflows, and efficiency in software engineering teams.",
    imgPath: "./images/Coursera.png",
    logoPath: "./images/Logo_2.png",
    title: "GenAI For Software Engineering Teams",
    date: "February 2025 ",
    reponsibilities: [
      "Applied Generative AI in a mood to based travel recommendation application.",
      "Used GenAI to support software development and system logic design.",
      "Demonstrated awareness of ethical and responsible AI usage.",
    ],
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: "./images/tech/html.png",
  },
  {
    name: "CSS 3",
    icon: "./images/tech/css.png",
  },
  {
    name: "JavaScript",
    icon: "./images/tech/javascript.png",
  },
  {
    name: "TypeScript",
    icon: "./images/tech/typescript.png",
  },
  {
    name: "React JS",
    icon: "./images/tech/reactjs.png",
  },
  {
    name: "Tailwind CSS",
    icon: "./images/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "./images/tech/nodejs.png",
  },
  {
    name: "Git",
    icon: "./images/tech/git.png",
  },
  {
    name: "MySQL",
    icon: "./images/tech/mysql.svg",
  },
  {
    name: "Figma",
    icon: "./images/tech/figma.png",
  },
  {
    name: "Storybook",
    icon: "./images/tech/storybook.svg",
  },
  {
    name: "Three JS",
    icon: "./images/tech/threejs.svg",
  },
]

export {
    words,
    heroLinks,
    projects,
    experiences,
    technologies,
}