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
    pro_1,
    pro_2,
    pro_3,
    pro_4,
    pro_5,
    pro_6,
    php,
    threejs,
    man_1,
    women_2,
    agency
  } from "../assets";
  
  export const navLinks = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'work',
      title: 'Work',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Social Media ADS Designer",
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Freelancing",
      icon: reactjs,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with team",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Self Project",
      icon: reactjs,
      iconBg: "#E6DEDD",
     
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams through the use of Git. ",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "freelancing",
      icon: html,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams through the use of Git.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Dbu ",
      icon: php,
      iconBg: "#E6DEDD",
     
      points: [
        "Developing and maintaining web applications using Php and other related technologies.",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I was impressed by Tewodros shimels's ability to turn complex ideas into a functional, user-friendly website.",
      name: "Kedir Tefera",     
      image: man_1,
    },
    {
      testimonial:
        "Thanks to Tewodros Shimels, our web application is now faster, more responsive, and visually appealing.",
      name: "Mekiyas Agegnehu",
      image: man_1,
    },
    {
      testimonial:
        "Tewodros shimels is a skilled and reliable developer who consistently delivers top-notch results.",
      name: "Selamawit Abayneh",
      image: women_2,
    },
  ];
  
  const projects = [
    {
      name: "Movie Site",
      description:
        "This project aims to develop a user-friendly movie site application that allows users to search for movies and retrieve detailed information about them. The app will leverage an API to fetch movie data. ",
      tags: [
        {
          name: "react ",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: pro_1,
      source_code_link: "https://github.com/",
    },
    {
      name: "Car sales",
      description:
        "This comprehensive car sales website offers detailed information on various car categories across 20+ pages. It also includes a user-friendly search function and is fully responsive.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Html",
          color: "pink-text-gradient",
        },
      ],
      image: pro_2,
      source_code_link: "https://github.com/",
    },
    {
      name: "Food delivery",
      description:
        "A comprehensive food delivery web application that allows users to register, log in, search for their favorite foods, add them to a cart, and initiate a secure online payment process.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJs",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: pro_3,
      source_code_link: "https://github.com/",
    },

    {
      name: "Web For tech Company",
      description:
        "This single-page website provides detailed information about a technology company, including About Us, Services, Testimonials, Projects, and Contact information.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        
      ],
      image: pro_4,
      source_code_link: "https://github.com/",
    },

    {
      name: "Voting System",
      description:
        "A comprehensive automated voting system that allows users to register, log in, and vote for candidates, while providing an administrative interface for system management.",
      tags: [
        {
          name: "Php",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: pro_5,
      source_code_link: "https://github.com/",
    },

     {
      name: "Start Up Agency Website",
      description:
        " a recent web development project! Developed a captivating web experience using React JS, featuring smooth animations powered by Framer Motion. This fully responsive and interactive UI offers a seamless user journey.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: agency,
      source_code_link: "https://github.com/",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };