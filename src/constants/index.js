import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
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
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
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
      name: "Java",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Sass",
      icon: redux,
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
    },
    {
      name: "WordPress",
      icon: docker,
    },
  ];
  
  const education = [
    {
      title: "Computer Science and Engineering",
      company_name: "UBT",
      icon: starbucks,
      iconBg: "#383E56",
      date: "October 2019 - October 2023",
      points: [
        "Main Data, Business Intelligence and Knowledge Management",
        "Cloud Computing and Mobile Technologies,Mobile/phone games, web applications; ",
        "Excellence in customer care,Electronic services, e-Health (the use of technology in health services), e-Government",
        "Engineering and Networks, IS Governance and Management",
      ],
    },
    {
      title: "Web Developer",
      company_name: "ICK for Kosovo's growth",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "April 2022 - May 2022",
      points: [
        "HTML, CSS, Javascript.",
        "Figma, WordPress Developer",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Beetroot Academy",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2022 - August 2022",
      points: [
        "HTML5 tags, CSS animation, Figma for Front-end developers, BEM methodology, SEO for developer, Responsive navigation",
        "Types of data and math functions, Loops and conditions, Slick Slider – the most universal slider plug-in, Array-methods, A website layout for your portfolio",
        "ReactJs, Introduction to JavaScript frameworks with an example of React.js, Work with a remote server ",
      ],
    },
    {
      title: "Java Script Developer",
      company_name: "Innovation Centre of Kosovo",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: [
        "Introduction to JS, JavaScript Fundamentals I, JavaScript Fundamentals II, Data Structures, Modern Operators and Strings",
        "Numbers, Dates, Intl and Timers, Asynchronous JavaScript",
      ],
    },
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
  
  export { services, technologies, education, testimonials, projects };