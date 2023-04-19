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
  genesis33,
  tesla,
  shopify,
  ecommerce,
  movieworld,
  realestate,
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
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Cognitive Science",
    icon: mobile,
  },
  {
    title: "Entrepreneurship",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Intern",
    company_name: "Genesis 33 Inc. Designs",
    icon: genesis33,
    iconBg: "#383E56",
    date: "May 2021 - August 2021",
    points: [
      "Led the end-to-end development of Genesis 33's new website handling all front-end design, and backend API creation and testing, increasing overall company engagement by 27%.",
      "Created and tested over 10 different REST APIs to handle and distribute client requests, forms, and data, tested said API on Postman to meet unit testing standards.",
      "Designed interactive and user centric focused MVC webpages, based on market research on contracting clients.",
      "Increased site response times by 67% by optimizing previously used SQL queries, created over 15 stored procedures automating several manual data fetching processes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Yoshi has undoubtedly been a fantastic asset to Genesis 33 Inc. Designs. His aptitude for learning and outperforming makes him an indispensable resource.",
    name: "Karen Olivares",
    designation: "Executive Designer",
    company: "Genesis 33 Inc. Designs",
    image: "https://cdn.sanity.io/images/cl88gf32/production/ce85ddfcb7028e08b2813a757a1ca4df53294a31-800x800.jpg",
  },
];

const projects = [
  {
    name: "Audiophile Haven",
    description:
      "Implemented a fully functional shopping cart that allows customers to easily browse and purchase products on the E-commerce site. Utilized user-centered design principles to create an aesthetically attractive layout and user interface that enhances the customer's shopping experience. Integrated Stripe's payment system to process transactions securely and efficiently, ensuring a smooth checkout process for customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/bbfosho0/ecommerce_project",
  },
  {
    name: "Movie World",
    description:
      "A full-stack website that enables users to search for movies from a database. It includes a responsive front-end interface for user input and a back-end system for retrieving and displaying movie information.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: movieworld,
    source_code_link: "https://github.com/bbfosho0/movie_streaming_project",
  },
  {
    name: "Rafael Estates",
    description:
      "A fantastic Real Estate Application. Rental and for-sale properties, advanced property filtering, a property details page with an image carousel, and much more are available.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/bbfosho0/RafaelEstates",
  },
];

export { services, technologies, experiences, testimonials, projects };
