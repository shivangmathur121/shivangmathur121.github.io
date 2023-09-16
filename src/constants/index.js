import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    python,
    unity,
    cpp,
    rhapsody,
    pustakani,
    snake,
    Zod_mvp,
    flappy,
    zod,
    valorem,
    GDGU,
    portfolio_website,
    hackershala,
    Codex,
    sitar,
    ai,
    dsa,
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
      title: "Student",
      icon: web,
    },
    {
      title: "Founder",
      icon: mobile,
    },
    {
      title: "Sitar player",
      icon: backend,
    },
    {
      title: "Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "unity",
      icon: unity
    },
    {
      name: "AI modelling",
      icon: ai,
    },
    {
      name: "Data strcutures and algorithms",
      icon: dsa
    }
  ];
  
  const experiences = [
    {
      title: "Sitar player",
      company_name: "HXLS Hindustani classical music team",
      icon: sitar,
      iconBg: "#383E56",
      date: "",
      points: [
        "Was the primary sitar player of the Hindustani classical music team for 3 years",
        "Played the sitar at various occasions and won multiple inter-school band competitions.",
        "Passed the theory and practical exam to earn my 4-year certification in the sitar",
      ],
    },
    {
      title: "Student Leader",
      company_name: "Codex club",
      icon: Codex,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Functioned as the elected student leader of the Codex club",
        "Organized various inter-school competitions like compro, syntax and cryptx.",
        "Took various sessions with younger students to teach them about web development libraries like reactjs and nextjs",
      ],
    },
    {
      title: "High Commendation",
      company_name: "GDGU MUN",
      icon: GDGU,
      iconBg: "#383E56",
      date: "",
      points: [
        "Participated in the GD Goenka university modal united nations conference as the delegate of China",
        "Won the high commendation award",

      ],
    },
    {
      title: "Honourable Mention",
      company_name: "Valorem MUN",
      icon: valorem,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Participated in the Valorem modal united nations conference as the delegate of Norway",
        "Won the honourable mention award",
      ],
    },
    {
      title: "Cybersecurity internship",
      company_name: "Delhi Police and hackershala",
      icon: hackershala,
      iconbg: "#E6DEDD",
      date: "",
      points: [
        "Participated in the Hackershala cybersecurity internship program and worked closely with the Delhi police as well",
      ]
    },
    {
      title: "Founder & CEO",
      company_name: "ZOD",
      icon: zod,
      iconbg: "#E6DEDD",
      date: "",
      points: [
        "Founded my startup Zod along with 2 other co-founders",
        "Zod provides reinforced AI-models capable of detecting 0-days and attack vectors in large-scale corporate and financial networks",
        "We have just passed our first round of funding"
      ]
    },
  ];
  
  const projects = [
    {
      name: "Rhapsody",
      description:
        "Private social media network made from scratch that allows users to post pictures and comment. Complete with User authentication and a user interface created using reactjs and firebase",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
      ],
      image: rhapsody,
      source_code_link: "https://github.com/falkenmaze/rhapsody_og",
    },
    {
      name: "Pustakani",
      description:
        "Web application I designed for an NGO that aims to provide used textbooks and other material to underprivileged children.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      image: pustakani,
      source_code_link: "https://github.com/falkenmaze/pustakahani",
    },
    {
      name: "Reinforcement learning in Snake game",
      description:
        "Developed an AI model to play the snake game using the standard Q-learning algorithm (Research paper I used: https://drive.google.com/file/d/1AkVaGfxCtL9xLRmVgAUNThG7XvlysUBJ/view?usp=sharing). Capable of achieving infinite score.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Q-learning",
          color: "green-text-gradient",
        },
      ],
      image: snake,
      source_code_link: "https://github.com/falkenmaze/snake-standard-q-learning-",
    },
    {
      name: "Flappy Bird AI",
      description: "Developed an AI model to play flappy bird using NEAT (NeuroEvolution of Augmenting Topologies) algorithm. Achieved a score of 500 in just 30 mins.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient"
        },
        {
          name: "NEAT",
          color: "green-text-gradient"
        }
      ],
      image: flappy,
      source_code_link: "https://github.com/falkenmaze/AI_flappy_bird"
    },
    {
      name: "Zod MVP",
      description: "This is the minimum viable product for my startup Zod. It is capable of autonomously detecting whether a given web app has an SQL or XSS vulnerability.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient"
        }
      ],
      image: Zod_mvp,
      source_code_link: "https://www.canva.com/design/DAFlU48Bf8Y/Ty1-y7BkhESAoE4RVr863g/edit?utm_content=DAFlU48Bf8Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      name: "Portfolio Website",
      description: "Developed this web page from scratch using reactjs and framer motion.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient"
        },
        {
          name: "framer-motion",
          color: "green-text-gradient"
        }
      ],
      image: portfolio_website,
      source_code_link: "shivangmathur-121.web.app"
    }
  ];
  
  export { services, technologies, experiences, projects };