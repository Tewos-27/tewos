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
  agency,
  dashen,
  bingo,
  inhouse,
  manufucturing,
  hagerigna,
  wagaye,

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
    title: "Backend Developer",
    company_name: "EagleLions Technology",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "Developed and maintained a Dashen superapp platform using microservices and monorepo architecture.",
      "Integrated banking and payment services (Dashen Bank, M-Pesa, Telebirr)",
      "Implemented Role based authentication and user management",
    ],
  },
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
    company_name: "Freelancing",
    icon: reactjs,
    iconBg: "#E6DEDD",

    points: [
      "Developing and maintaining web applications using React.js, Node.js,Express.js and MongoDB.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "implementing RESTful APIs and integrating third-party services.",
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
    name: "Dashen Superapp",
    description:
      "Developed and maintained a Dashen superapp platform using microservices and monorepo architecture.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Nx Monorepo",
        color: "yellow-text-gradient",
      },
      {
        name: "Redis and kafka",
        color: "purple-text-gradient",
      }
    ],
    image: dashen,
    source_code_link: "",
  },
  {
    name: "Bingo Game",
    description:
      "Developed a bingo game with advance admine dashboard using Next.js, Tailwind  and Nodejs, Redis, PostgresSql with prisma ORM. Features Shopes registration, login, track game reports each shop and game play. i worked on the Full stack part of the project.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs and express",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: bingo,
  },

  {
    name: "Hagerigna Saving System",
    description:
      "The traditional Ethiopian saving system, known as Ekub, is a community-based method where members contribute a set amount of money regularly.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs and express",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: hagerigna,
  },
  {
    name: "Street Car Sales",
    description:
      "This comprehensive car sales web app offers detailed information on various car categories across 20+ pages. It also includes a user-friendly search function and is fully responsive.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Redis",
        color: "yellow-text-gradient",
      }

    ],
    image: cars,
    source_code_link: "",
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
      {
        name: "Redis",
        color: "yellow-text-gradient",
      },
      {
        name: "webhook",
        color: "purple-text-gradient",
      }
    ],
    image: foods,
    source_code_link: "",
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
    source_code_link: "",
  },
  {
    name: "Inhouse Management Dashboard",
    description:
      "A comprehensive inhouse management system that allows users to register, log in, and manage inhouse activities. The system features a user-friendly interface and a Track orders both Custom and Guest orders. i worked on the frontend part of the project.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: inhouse,
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
    source_code_link: "",
  },
  {
    name: "Manufucturing Websites",
    description:
      "A comprehensive manufacturing websites that have above 10 pages, and  has admin dashboard to manage the website. The system features a user-friendly interface and allows to post products and services from admin dashboard.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs and express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "yellow-text-gradient",
      },

    ],
    image: manufucturing,
  },
  {
    name: "Wagaye.com E-commerce",
    description:
      "wagaye.com is the online shopping hub of the Wagaye platform, part of the Ashewa digital ecosystem. It offers a modern and convenient e-commerce experience that lets users browse, discover, and purchase a wide range of products directly from trusted sellers and local vendors.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs and express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "yellow-text-gradient",
      },
      {
        name: "Redis",
        color: "purple-text-gradient",
      }
    ],
    image: wagaye,
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
    source_code_link: "",
  },

  {
    name: "E-plantShopping",
    description:
      " Developed a plant shopping application using React and Nodejs, employing Redux for robust state management. Gained hands-on experience in managing complex application states effectively following best practices.",
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
        name: "Nodejs and express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "yellow-text-gradient",
      }
    ],
    image: pro_7,
    source_code_link: "",
  },

  {
    name: "Book-Review platform",
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
    source_code_link: "",
  },

  {
    name: "OTP Verification with both email and phone number",
    description:
      "Developed an OTP verification system using Node.js, Express.js, Redis and MongoDB. Features user registration, email-based OTP delivery, and secure login verification. i worked on the backend part of the project.",
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
    source_code_link: "",
  },

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
      {
        name: "Nodejs and Express",
        color: "yellow-text-gradient",
      }
    ],
    image: pro_1,
  },

];
export { services, technologies, experiences, testimonials, projects };