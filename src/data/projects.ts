
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "PrepMate - Notes-Management Platform",
    description: "An accessible, AI-enhanced notes application tailored for effective study and inclusivity. PrepMate is a full-stack notes management platform designed for students and educators to create, upload, and manage notes effortlessly. It features real-time voice-to-text and text-to-speech functionalities to assist visually impaired users, along with Gemini AI-powered study recommendations.",
    image: "/imgs/prepmate.png",
    tags: ["React", "javascript", "Express", "Node.Js", "MongoDB","JWT", "Tailwind CSS", "Gemini AI"],
    links: {
      github: "https://github.com/BardavalGovind/PrepMate",
      live: "https://prepmateai.vercel.app/",
    },
  },
  {
    id: 2,
    title: "MegaMart - E-commerce Platform",
    description: "A secure and feature-rich online shopping platform built with the MERN stack. MegaMart is a scalable e-commerce application offering a seamless shopping experience with category-wise browsing, secure payments via Braintree, and real-time order management. It includes advanced filters and intelligent product recommendations to enhance personalization and drive engagement.",
    image: "/imgs/megamart.png",
    tags: ["React", "javascript", "Node.js", "Express", "MongoDB","BootStrap"],
    links: {
      github: "https://github.com/BardavalGovind/Ecommerce-Website",
      live: "https://github.com/BardavalGovind/Ecommerce-Website",
    },
  },
  // {
  //   id: 3,
  //   title: "StudyNotion",
  //   description: "A seamless and interactive learning experience for students, and a platform for instructors to showcase their expertise and connect with learners across the globe.",
  //   image: "/imgs/Ed.png",
  //   tags: ["React", "Tailwind CSS", "Redux", "MongoDB"],
  //   links: {
  //     github: "https://github.com/eshaalal/codeplay?tab=readme-ov-file",
  //     live: "https://codeplay-edtech-project.vercel.app/",
  //   },
  // },
];
