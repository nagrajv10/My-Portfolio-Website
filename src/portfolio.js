// Website related settings
const settings = {
  // isSplash: true, // Change this to false if you don't want Splash screen.
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Nagraj's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Nagraj Vallakati Portfolio",
    type: "website",
    url: ".",
  },
};

//Home Page
const greeting = {
  title: "Nagraj Vallakati",
  logo_name: "NagrajVallakati",
  nickname: "Data Science Enthusiast | Full Stack Developer",
  subTitle:
    "A driven developer who thrives on building full-stack solutions that create meaningful impact through scalable and innovative technology.",
  resumeLink: "",
  // "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "",
  // "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "",
  // "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/nagrajv1011",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nagraj-vallakati/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:nagrajvallakati@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing production-ready machine learning models using supervised and unsupervised learning techniques",
        "⚡ Experience working with deep learning frameworks including TensorFlow, Keras, and PyTorch for CNN and RNN architectures",
        "⚡ Building data pipelines and performing statistical modeling for predictive analytics and business insights",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#013243",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive and dynamic web applications using React.js and Next.js",
        "⚡ Developing RESTful APIs and backend services using Flask, FastAPI, and Node.js",
        "⚡ Database design and management with MySQL, MongoDB, and PostgreSQL",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
    {
      title: "Data Analysis & Viz",
      fileName: "DataAnalysisImg",
      skills: [
        "⚡ Creating interactive dashboards and visualizations using Tableau and Power BI",
        "⚡ Performing exploratory data analysis and statistical modeling using Python and R",
        "⚡ Transforming complex datasets into actionable insights through data visualization",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#E97627",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            color: "#276DC3",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#3F4F75",
          },
        },
      ],
    },
    {
      title: "Database & Cloud",
      fileName: "",
      skills: [
        "⚡ Database design and optimization with MySQL, MongoDB, and PostgreSQL",
        "⚡ Building and consuming RESTful APIs with proper authentication and authorization",
        "⚡ Deploying and managing applications on AWS and Azure cloud platforms",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  // competitiveSites: [
  //   {
  //     siteName: "LeetCode",
  //     iconifyClassname: "simple-icons:leetcode",
  //     style: {
  //       color: "#F79F1B",
  //     },
  //     profileLink: "https://leetcode.com/layman_brother/",
  //   },
  //   {
  //     siteName: "HackerRank",
  //     iconifyClassname: "simple-icons:hackerrank",
  //     style: {
  //       color: "#2EC866",
  //     },
  //     profileLink: "https://www.hackerrank.com/layman_brother",
  //   },
  //   {
  //     siteName: "Codechef",
  //     iconifyClassname: "simple-icons:codechef",
  //     style: {
  //       color: "#5B4638",
  //     },
  //     profileLink: "https://www.codechef.com/users/ashutosh_1919",
  //   },
  //   {
  //     siteName: "Codeforces",
  //     iconifyClassname: "simple-icons:codeforces",
  //     style: {
  //       color: "#1F8ACB",
  //     },
  //     profileLink: "http://codeforces.com/profile/layman_brother",
  //   },
  //   {
  //     siteName: "Hackerearth",
  //     iconifyClassname: "simple-icons:hackerearth",
  //     style: {
  //       color: "#323754",
  //     },
  //     profileLink: "https://www.hackerearth.com/@ashutosh391",
  //   },
  //   {
  //     siteName: "Kaggle",
  //     iconifyClassname: "simple-icons:kaggle",
  //     style: {
  //       color: "#20BEFF",
  //     },
  //     profileLink: "https://www.kaggle.com/laymanbrother",
  //   },
  // ],
};

const degrees = {
  degrees: [
    {
      title: "University of Houston",
      subtitle: "M.S. in Data Science",
      logo_path: "uh_red.png",
      alt_name: "University of Houston",
      duration: "2025 - Present",
      descriptions: [
        "⚡ I have completed a variety of courses related to Data Science, Machine Learning, and Artificial Intelligence, gaining a strong foundation in data analysis, predictive modeling, and intelligent systems.",
        "⚡ I have applied this knowledge through hands-on projects, working with real-world datasets and implementing ML/AI models to solve practical problems.",
        "⚡ In addition, I have served as a Graduate Assistant in the role of a Proctor, supporting academic operations and maintaining examination integrity.",
      ],
      website_link: "https://www.uh.edu/",
    },
    {
      title: "K J Somaiya Institute of Technology",
      subtitle: "B.E. in Information Technology",
      logo_path: "somaiyalogo.png",
      alt_name: "KJSIT",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have successfully deployed a completed web and mobile application for our college named SIMS (Student Information Management System), which manages the entire academic workflow for students and faculty on a single integrated platform and is live and currently used across the entire college.",
      ],
      website_link: "https://kjsit.somaiya.edu.in/en",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning",
      subtitle: "- Ishita Sharma",
      logo_path: "nvidia_logo.png",
      certificate_link:
        "https://learn.nvidia.com/certificates?id=iyjICOAHR22TrZR7dMpPug",
      alt_name: "nvidia",
      color_code: "#FFBB0099",
    },
    {
      title: "Intro to Data Science",
      subtitle: "- Christopher Brooks",
      logo_path: "Michigan.png",
      certificate_link:
        "https://coursera.org/share/9dc9fb37b04d1a97f77b0069b6914f5c",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
    {
      title: "DS, ML, DL, NLP Bootcamp",
      subtitle: "- Krish Naik",
      logo_path: "udemy logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-f2d7dfb8-9a83-4913-a754-445e7e48ac24/",
      alt_name: "Udemy",
      color_code: "#00000099",
    },
    {
      title: "Tableau",
      subtitle: "HPE",
      logo_path: "uh_red.png",
      certificate_link:
        "https://badgr.com/public/assertions/MJNZ2z4pRmmyESy1bSDt3w?identity__email=nvallaka@CougarNet.UH.EDU",
      alt_name: "UH",
      color_code: "#1F70C199",
    },
    {
      title: "Complete Data Viz",
      subtitle: "- Krish Naik",
      logo_path: "udemy logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-8a710959-7b18-4f6e-b89e-082aefc2c2c5/",
      alt_name: "Udemy",
      color_code: "#00000099",
    },

    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description:
    "I have worked as a Program Analyst at a fast-growing startup, where I gained valuable experience in software development and analysis. During the early phase of my career, I completed several remote internships that helped me build a strong foundation in technology and problem-solving. I am passionate about leveraging data-driven insights and building innovative solutions that create real-world impact.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Program Analyst",
          company: "Orange Current Technologies Pvt. Ltd.",
          company_url: "https://www.orangecurrent.com/",
          logo_path: "oct_logo.png",
          duration: "Sept 2022 - Oct 2024",
          location: "Mumbai, MH, India",
          description:
            "Built full-stack applications reducing operational paperwork by 85% and ML models for payment prediction. Developed blockchain energy trading and solar power prediction systems.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Intern",
          company: "Lets Grow More",
          company_url: "https://letsgrowmore.in/",
          logo_path: "lwm.png",
          duration: "Sept 2021 – Oct 2021",
          location: "Remote",
          description:
            "Analyzed large-scale datasets using Python to uncover patterns and trends, creating visualizations with Matplotlib and Seaborn. Developed computer vision applications with OpenCV for image processing and transformation.",
          color: "#000000",
        },
        {
          title: "Data Science & Business Analytics Intern",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org/",
          logo_path: "sf.png",
          duration: "June 2021 - July 2021",
          location: "Remote",
          description:
            "Performed exploratory data analysis and visualization on real-world datasets using Python. Applied statistical techniques and machine learning concepts to extract insights and solve business problems.",
          color: "#ee3c26",
        },
        {
          title: "Mobile Application Developer Intern",
          company: "MindScript",
          company_url: "https://www.mindscript.biz/",
          logo_path: "ms.jpg",
          duration: "Dec 2019 – Jan 2020",
          location: "Mumbai, MH, India",
          description:
            "Developed mobile application featuring news and video modules using API integration and YouTube SDK. Participated in full software development lifecycle including design, development, testing, and deployment.",
          color: "#0071C5",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Smart Farming using AI and IoT",
      createdAt: "2021-06-15T00:00:00Z",
      description:
        "Paper published at 4th International Conference on Advances in Science & Technology (ICAST2021)",
      url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3866432",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_nagraj-modified.png",
    description:
      "I am available on selected social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, etc with the best knowledge I have.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Mumbai, MH, India",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
