import { Award, Code, Book, Zap } from "lucide-react";

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl?: string;
  credentialUrl?: string;
  credentialId?: string;
  category: "technical" | "professional" | "academic";
  icon: any;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "CSE Pathshala",
    date: "July 2024",
    description: "Comprehensive course on modern full-stack web development covering React, Node.js, Express, and MongoDB.",
    imageUrl: "/images/Mern.png",
    credentialId: "CP-20240607-MWD029",
    category: "technical",
    icon: Code
  },
  {
    id: 2,
    title: "Responsible & Safe AI Systems",
    issuer: "NPTEL",
    date: "Oct 2024",
    description: "Gain foundational knowledge, practical skills, and a functional understanding of how AI systems works and trained",
    imageUrl: "/images/ai.jpg",
    // credentialUrl: "https://www.coursera.org/account/accomplishments/verify/B9CDKEWCE84F",
    credentialId: "B9CDKEWCE84F",
    category: "academic",
    icon: Book
  },
  {
    id: 3,
    title: "Matstering Data Structures and Algorithm",
    issuer: "Udemy",
    date: "Nov 2023",
    description: "Comprehensive course on fundamental data structures and algorithms with implementation in C/C++",
    imageUrl: "/images/dsa_udemy.jpg",
    // credentialUrl: "https://www.udemy.com/certificate/UC-f1820cae-5841-4654-bd38-3627171749fe/",
    credentialId: "UC-f1820",
    category: "technical",
    icon: Code
  },
  {
    id: 4,
    title: "Cohort 100% Job Ready DSA Course",
    issuer: "LearnYard",
    date: "July 2024 ",
    description: "Mastered advanced concepts such as Dynamic Programming, Graph Algorithms, Trees, Tries, and Time Complexity Optimization.",
    imageUrl: "/images/learnyard.jpg",
    // credentialUrl: "https://badgr.com/public/assertions/PF25_sA-RdSw1m64PqkTmg?identity__email=eshalal888@gmail.com",
    credentialId: "PF25_sA",
    category: "technical",
    icon: Code
  },
  
];