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
    burgerking,
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
      title: "React JS Developer",
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
        "One of the best students at UBT with an average grade of 8.0 and very engaged in the lectures and all the projects at UBT!",
      name: "Computer science and engineering",
      company: "UBT",
      image: "https://th.bing.com/th/id/OIP.87SuGJmPdpL_fHOc4kKXgwHaHa?rs=1&pid=ImgDetMain",
    },
    {
      testimonial:
        "a very good student and regular in her assignments and was chosen as a junior front end developer because of her dedication",
      name: "Front End Developer",
      designation: "Beetroot Academy",
      company: "Swedish course",
      image: "https://th.bing.com/th/id/OIP.65S2YT4yMiw4iOtGOKQcXgAAAA?rs=1&pid=ImgDetMain!",
    },
    {
      testimonial:
        "The best student in JavaScript development, chosen as a junior JavaScript developer, is involved in all projects at ICK!",
      name: "Java Script Developer",
      designation: "Innovation Centre of Kosovo",
      image: "https://th.bing.com/th/id/OIP.mo1MGpGOdWxVopCaeO4X9QHaHa?rs=1&pid=ImgDetMain",
    },
  ];
  
  const projects = [
    {
      name: "SpaceX App",
      description:
        "SpaceX App is an application that was built with react hooks, and tailwind and receives data from the api",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "hooks",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Albiona19/spaceX-App",
    },
    {
      name: "Hosting Company",
      description:
        "Hosting Company has offered a high level of services in the area of hosting for your website.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "mediaquery",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Albiona19/hosting-company",
    },
    {
      name: "Bind Restaurant",
      description:
        "Bind Restaurant App is an application for restaurants that offers the user to see the number of offers, part of the menus",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "components",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Albiona19/restaurant-react-app",
    },
    {
      name: "Wave Pharm",
      description:
        "Wave Website pharmacy website to make it easy for users to contact you and see more about the pharmacy.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "jss",
          color: "pink-text-gradient",
        },
        {
          name: "wordpress converted theme",
          color: "blue-text-gradient",
        },
      ],
      image: burgerking,
      source_code_link: "https://github.com/Albiona19/wavepharmpr",
    },
  ];
  
  export { services, technologies, education, testimonials, projects };