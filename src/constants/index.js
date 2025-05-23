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
    pro_7,
    foods,
    ashewa,
    books,
    OTP,
    landing,
    cars,
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
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
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
      title: "React.js, Next.js and Vue.js Developer",
      company_name: "Ashewa Technology",
      icon: reactjs,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js Next.js and Vue.js other related technologies.",
        "Collaborating with cross-functional teams through the use of Git and github.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "GraphQL API integration and RESTful API integration.",
      ],
    },
    {
      title: "Mern Stack Developer",
      company_name: "Mern Stack Developer",
      icon: reactjs,
      iconBg: "#E6DEDD",
     
      points: [
        "Developing and maintaining web applications using React.js, Node.js,Express.js and MongoDB.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "implementing RESTful APIs and integrating third-party services.",
      ],
    },
    {
      title: "Full Stack Web Developer",
      company_name: "Ashewa Technology",
      icon: html,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js, Next.js, Node.js,Express.js and MongoDB.",
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
      source_code_link: "https://github.com/Tewos-21/tewo-movie-site-app.git",
    },
    {
      name: "Street Car Sales",
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
      image: cars,
      source_code_link: "https://github.com/Tewos-21/Street-car-sales-website.git",
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
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: foods,
      source_code_link: "https://github.com/Tewos-21/tewos-food-delivery-app.git",
    },

    {
      name: "Ashewa.com E-commerce",
      description:
        "A comprehensive e-commerce website that allows users to register, log in, and purchase products. The site features a user-friendly interface and a secure payment process. i worked on the frontend part of the project.",
      tags: [
        {
          name: "Vue.js",
          color: "blue-text-gradient",
        },
        {
          name: "Nuxt.js",
          color: "green-text-gradient",
        },
        {
          name: "GraphQL API",
          color: "pink-text-gradient",
        },
        
      ],
      image: ashewa,
      source_code_link: "https://github.com/Tewos-21/tewo-tech-web.git",
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
      source_code_link: "https://github.com/Tewos-21/Dbu-Stud-Voting-System.git",
    },

     {
      name: "Landing Page",
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
      image: landing,
      source_code_link: "https://github.com/Tewos-27/Street_startUp_web.git",
    },
    
    {
      name: "E-plantShopping",
      description:
        " Developed a plant shopping application using React and CSS, employing Redux for robust state management. Gained hands-on experience in managing complex application states effectively following best practices.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: pro_7,
      source_code_link: "https://github.com/Tewos-27/Event-Planner-Web-app.git",
    }, 
    
     {
      name: "Book-Review Backend Project",
      description:
        " Built the robust backend for a book review platform with Node.js and Express.js. This included designing comprehensive RESTful APIs and integrating JWT for secure user authentication.",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "ResfullAPI",
          color: "pink-text-gradient",
        },
      ],
      image: books,
      source_code_link: "https://github.com/Tewos-27",
    }, 

    {
      name: "OTP Verification with Email",
      description:
        "Developed an OTP verification system using Node.js, Express.js, and MongoDB. Features user registration, email-based OTP delivery, and secure login verification. i worked on the backend part of the project.",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "ResfullAPI",
          color: "pink-text-gradient",
        },
      ],
      image: OTP,
      source_code_link: "https://github.com/Tewos-27",
    }, 

  ];
  
  export { services, technologies, experiences, testimonials, projects };