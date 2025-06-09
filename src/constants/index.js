import {
    mobile,
    backend,
    creator,
    web,
    javascript,
   
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    dotCreative,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Realtime App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Open Source & Content Contributor",
      icon: creator,
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
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "Backend Developer (Freelance)",
      company_name: "Dot Creative",
      icon: dotCreative,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Dec 2024",
      points: [
        "Designed and developed scalable backend APIs and RESTful endpoints using Node.js and Express.js.",
        "Collaborated closely with the front-end team to integrate APIs and ensure seamless user experiences.",
        "Implemented secure authentication and authorization workflows using JWT and OAuth",
        "Managed data storage and retrieval using MongoDB, ensuring optimized query performance and data consistency.",
        "Wrote clean, maintainable code and followed best practices for error handling and modularization.",
        "Participated in regular client meetings to gather requirements and deliver iterative updates"
      ],
    },
 {
  title: "Backend Developer",
  company_name: "Real-time Multiplayer Tic Tac Toe",
  icon: dotCreative, // replace with the actual icon variable or path
  iconBg: "#1F2937",
  date: "Jan 2024 - Apr 2024",
  points: [
    "Architected a real-time multiplayer game using Node.js, Express.js, and Socket.io, enabling low-latency two-player gameplay.",
    "Implemented game state management and real-time player synchronization to ensure consistent and fair gameplay.",
    "Developed secure server-side validation logic to enforce game rules and prevent cheating.",
    "Players can create or join rooms and invite others to play, with real-time updates and synchronized game state management.",
  ],
},
{
  title: "Backend Developer",
  company_name: "OCR Info Extractor",
  icon: meta, // replace with the actual icon variable or path
  iconBg: "#2D3748",
  date: "Feb 2024 - Mar 2024",
  points: [
    "Built an OCR-based information extractor that processes uploaded images and PDFs to extract structured text data.",
    "Integrated Tesseract.js for optical character recognition and Node.js for backend processing.",
    "Designed REST APIs to handle file uploads, parsing, and response formatting.",
    "Ensured performance optimization and accurate data parsing with preprocessing techniques.",
  ],
}

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };