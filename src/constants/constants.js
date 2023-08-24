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
  git,
  figma,
  mui,
  bootstrap,
  sass,
  computerice,
  intellect,
  dot,
  intellectafrica,
  kentube,
  schoolfy,
  threejs,
  wisdom,
  muhammed,
  joshua,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Prompt Engineer",
    icon: backend,
  },
  {
    title: "Technical Writer",
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
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Bootstrap 5",
    icon: bootstrap,
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
    name: "Sass",
    icon: sass,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Computer-ICE Africa",
    icon: computerice,
    iconBg: "#383E56",
    date: "April - Sep 2021",
    points: [
      "Received professional guidance on kick-starting my coding career and I was able to give back to my immediate community by hosting a webinar and providing resources for my peers who are interested in starting their career in software development but really don't know where to start from.",
      "Worked as the Marketing executive and social media manager to enhance the company's software sale and reaching a larger audience.",
      "Implementing responsive design using frontend technologies.",
    ],
  },
  {
    title: "Software Engineer, Intern",
    company_name: "Dot Tech Inc.",
    icon: dot,
    iconBg: "#E6DEDD",
    date: "May - August 2022",
    points: [
      "Convert Figma designs to reusable component in React",
      "Consumed backend API endpoints in the frontend solution using the Swagger API documentation",
      "Used Axios and React Query for smooth API consumption",
      "Reported progress to Snr. Frontend Engineer, collaborated remotely on GitHub, implemented feedbacks",
      "Joined team weekly call up meetings to share real time feedbacks and updates.",
    ],
  },
  {
    title: "Founder/CEO",
    company_name: "Intellect Africa",
    icon: intellect,
    iconBg: "#f1f1ff",
    date: "March 2022 - present",
    points: [
      "Solving SDG goals No Poverty and Quality Education (1&2) by targeting high school students in Africa with information on career development, summer programs, virtual research programs, coding etc.",
      "Designed and maintains software solution",
      "Managing decision making process and internal reviews among team including external surveys",
      "Work with team members on nailing our goals",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "John has always been a valuable team member who fostered a positive and collaborative work environment. What has impressed me the most about John is his ability to quickly grasp complex concepts and adapt to new technologies.",
    name: "Muhammed Gberejaye",
    designation: "Software Engineer",
    company: "Aftj Digital",
    image: muhammed,
  },
  {
    testimonial:
      "John is a natural leader. I met him as an EducationUSA OFP (Opportunity Funds Program) Scholar, and he has demonstrated time and time again his leadership skills. He is always willing to take initiative where others might shy away from duty.",
    name: "Wisdom Ifode",
    designation: "Sophomore",
    company: "Minerva University",
    image: wisdom,
  },
  {
    testimonial:
      "John has been a great friend of mine. I recommend him enthusiastically for anything excellent",
    name: "Ogundairo Joshua",
    designation: "Sophomore",
    company: "FUNAAB",
    image: joshua,
  },
];

const projects = [
  {
    name: "Schoolfy",
    description:
      "With the help of Schoolfy's comprehensive management system, you can efficiently streamline operations and use fewer resources within your school community.",
    tags: [
      {
        name: "frontend",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: schoolfy,
    source_code_link: "",
    web_link: "https://schoolfy.app",
  },
  {
    name: "Intellect Africa",
    description:
      "Whether it's taking an online course or virtual program & even kickstarting your coding career, we're here to help you by providing you with reliable informations and guidance.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: intellectafrica,
    source_code_link: "#",
    web_link: "https://intellect-africa.netlify.app",
  },
  {
    name: "Kentube",
    description:
      "A youtube clone built with public API from rapid API. It can perform search functions and find every public videos on Youtube. 50 videos can be accessed per api request",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapid-api",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: kentube,
    source_code_link: "https://github.com/ajohnofficial001/KenTube",
    web_link: "https://kentube.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
