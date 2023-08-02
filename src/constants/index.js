import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    aws,
    bashcripting,
    kubernetes,
    python,
    SQL,
    vmware,
    git,
    ansible,
    docker,
    numeryx,
    L,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  import  servers from '../assets/servers.png'
  import  networks from '../assets/networks.png'
  import  coding from '../assets/coding.png'

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
      title: "Server Admin",
      icon: servers,
    },
    {
      title: "Network Specialist",
      icon: networks,
    },
    {
      title: "Python Coder",
      icon: coding,
    },
    {
      title: "Backend SQL",
      icon: backend,
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
      name: "ansible",
      icon: ansible,
    },
    {
      name: "aws",
      icon: aws,
    },
    
    {
      name: "python",
      icon: python,
    },
    
    {
      name: "SQL",
      icon: SQL,
    },
    {
      name: "bashcripting",
      icon: bashcripting,
    },
    {
      name: "vmware",
      icon: vmware,
    },
    {
      name: "kubernetes",
      icon: kubernetes,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "R&D Engineer (Internship)",
      company_name: "Drive laboratory",
      icon: L,
      iconBg: "#FFFFFF",
      date: "March 2021 - August 2021",
      points: [
        "Design of an intrusion detection system for V2X vehicle-to-everything networks using neural networks, federated learning and edge computing.",
        
      ],
    },
    {
      title: "R&D Engineer",
      company_name: "Drive laboratory",
      icon: L,
      iconBg: "#FFFFFF",
      date: "September 2021 - August 2022",
      points: [
        "Ensure the successful design and deployment of an emulation platform for the vehicular network.",
        "Monitor and optimize platform performance to ensure smooth operation. Guarantee the security and confidentiality of sensitive data processed by the platform.",
      ],
    },
    {
      title: "R&D Engineer (PhD Thesis)",
      company_name: "Numeryx Technologies | Unicaen",
      icon: numeryx,
      iconBg: "#FFFFFF",
      date: "September 2022 - Present",
      points: [
        "Research and analyze new technologies and trends in the IIoT security field to guide a product development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He's so fucking bad.",
      name: "Valorant teammate",
      designation: "player",
      company: "Valorant",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "First i thoght He's braindead but playing more and more with him i Found out that he's retarded.",
      name: "Some guy",
      designation: "worker",
      company: "frienship",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "He's my brother what can i say he's a team player as he say's in his resume",
      name: "djalil",
      designation: "CEO",
      company: "lmanzil",
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