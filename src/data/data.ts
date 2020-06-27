import sabrinaStPeter from "./sabrinaStPeter.jpg";
import dovydasLiniovas from "./dovydasLiniovas.jpg";
// @ts-ignore
import cvPdf from "./ArunasBendoraitis_CV.pdf";
import image from "./me.jpg";
import Post1 from "./blog1/Post1";
import portfolioMarathonAppPost from "./posts/portfolio-marathon-app/post.md.js";
import portfolioSurveyPortalPost from "./posts/portfolio-survey-portal/post.md.js";
import portfolioMeditationAppPost from "./posts/portfolio-meditation-app/post.md.js";
import characterImg from "./personality.png";

export const store = {
  posts: [
    {
      id: '1',
      contentFn: Post1,
    },
    {
      id: 'portfolio_1',
      content: portfolioMarathonAppPost,
    },
    {
      id: 'portfolio_2',
      content: portfolioSurveyPortalPost,
    },
    {
      id: 'portfolio_3',
      content: portfolioMeditationAppPost,
    },
  ],
  about: {
    download: cvPdf,
    image: image,
    title: "Hello, <br /> I Am Arūnas Bendoraitis",
    subtitle: '<span style="color: #31d181;">Backend</span> Developer',
    description: "",
    socialMedia: [
      {
        icon: "envelope",
        link: "mailto:arunas.bendoraitis@protonmail.com",
        text: "arunas.bendoraitis@protonmail.com",
      },
      {
        icon: "phone",
        link: "callto:+37064523515",
        text: "+37064523515",
      },
      { icon: "map-marker", link: "#", text: "Vilnius, Lithuania" },
      {
        icon: "github",
        link: "https://github.com/arunasbend",
        text: "Visit Github",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/arūnas-bendoraitis-5142b6126/",
        text: "Visit LinkedIn",
      },
    ],
  },
  experience: [
    {
      header: "Education",
      items: [
        {
          title: "Software systems",
          subtitle: "Kaunas University of Technology",
          years: "2016 - 2020",
          content:
            "Studies contained various different CS topics: Intro to many languages (Assembly, C, Go, C#, TypeScript, Ruby, Python, Scala, F#, Prolog, Haskell, SQL), computer science concepts (dynamic programming, concurrent programming, big O notation, data structures, graph theory, design patterns), web development, mobile development, databases, machine learning, math and statistics",
        },
        {
          title: "Sourcery academy",
          subtitle: "Devbridge group",
          years: "2017 Feb - Jun",
          content:
            "Introduction to web development technologies, agile methodology and teamwork. 3 month course included 5 sprints, 10 lectures about React, Web API using C# and Entity framework to integrate with SQL database.",
        },
      ],
    },
    {
      header: "Work experience",
      items: [
        {
          title: "Software developer",
          subtitle: "Agmis",
          years: "Aug 2019 - Current",
          content: "",
        },
        {
          title: "Software developer",
          subtitle: "Devbridge group",
          years: "Oct 2018 - Aug 2019",
          content:
            "Fullstack development, teaching more junior developers (and seniors in form of many internal presentations), support and on-call rotation",
        },
        {
          title: "Junior software developer",
          subtitle: "Devbridge group",
          years: "Jun 2017 - Oct 2018",
          content:
            "Fullstack web development in a user facing application with multiple micro-services",
        },
      ],
    },
  ],
  skills: [
    {
      header: "Top skills",
      items: [
        { title: "JavaScript / TypeScript", proficiency: 100 },
        { title: "Unit testing", proficiency: 100 },
        { title: "MongoDB", proficiency: 80 },
        { title: "SQL", proficiency: 85 },
        { title: "Communication", proficiency: 90 },
      ],
    },
    {
      header: "Proficient",
      items: [
        { title: "C#", proficiency: 90 },
        { title: "React", proficiency: 85 },
        { title: "AWS", proficiency: 85 },
      ],
    },
    {
      header: "Can get the job done with",
      items: [
        { title: "Python", proficiency: 70 },
        { title: "Go", proficiency: 40 },
        { title: "Scala", proficiency: 50 },
        { title: "Angular", proficiency: 60 },
        { title: "Knockout", proficiency: 75 },
      ],
    },
  ],
  testimonials: [
    {
      link: "https://www.linkedin.com/in/sabrinastpeter/",
      person: "Sabrina St. Peter",
      workplace: "Devbridge group",
      position: "Customer Success Manager",
      icon: sabrinaStPeter,
      content:
        "Arunas and I worked together on ServiceBridge (part of DevBridge Group). As one of the engineers who helped with support tickets, he had the responsibility to help me explain issues to our user base. Arunas explained issues in non-technical terms and was extremely patient with follow up questions. He was also very thorough, which was important as we were not co-located and our time zones had a seven-hour difference. I consider myself lucky to have worked alongside Arunas and know he would be a great addition to any team.",
    },
    {
      link: "https://www.linkedin.com/in/dovydas-liniovas/",
      person: "Dovydas Liniovas",
      workplace: "Devbridge group",
      position: "Frontend engineer",
      icon: dovydasLiniovas,
      content:
        "I've worked with Arūnas for almost a year, he's good at what he does and helps others along the way in easily understandable terms. I've learned a lot from him and I know he'll be a great addition to any team.",
    },
  ],
  interests: [],
  character: {
    img: characterImg,
  },
  portfolio: [
    {
      id: "portfolio_1",
      title: "Marathon training app",
      time: "2020",
      description: `Frontend part of the application created for Bachelor's degree. It uses React Native, TypeScript, Jest for testing, `,
      link: "posts/portfolio_1",
    },
    {
      id: "portfolio_2",
      title: "Survey portal",
      time: "2017",
      description: `Application which was built during sourcery academy. React pre 16.8, .Net core web api, Entity framework.`,
      link: "posts/portfolio_2",
    },
    {
      id: "portfolio_3",
      title: "Meditation app",
      time: "2016",
      description: `A non profit app for a freelance client to encourage meditation. It uses Java to run on Android platform.`,
      link: "posts/portfolio_3",
    },
  ],
  blogs: [
    {
      title: "Building a faster rocket: Achieving quicker app load times",
      time: "05/09/2019",
      description:
        "Techniques for optimizing and monitoring frontend performance",
      link: "posts/1",
    },
  ],
};
