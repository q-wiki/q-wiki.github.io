

export const cardsDataLandingPage= [
  { icon:"wikidata-logo",
    heading: "About\nWikidata",
    link:"https://www.wikidata.org/",
    text: "Learn more about Wikidata, millions of data sets and people behind it"
  },
  { icon:"team",
    heading: "About\nUs",
    link:"/about",
    text: "Learn more about the project and the students working on it"
  } ,
{ icon:"report-problem",
  heading:"Report\nProblems",
  link:"/report",
  text: "Found any wrong or broken questions? We can fix them"
} ,
{ icon:"sparql-community",
  heading: "SPARQL\nCommunity",
  link:"/contribute",
  text: "Help create new queries and millions of possible questions"
} ,
]

export const headerContributePage = [
  {
    heading: "Contribute Questions",
    text: "Some text here"
  }
]

export const cardsDataContributePage = [
  { icon:"documents",
    heading: "SPARQL\nDocumentation",
    link:"https://www.mediawiki.org/wiki/Wikidata_Query_Service/User_Manual",
    text: "Documentation for advanced users that goes beyond the first steps"
  },
  { icon:"sparql-tutorial",
    heading: "SPARQL\nTutorial",
    link:"https://www.wikidata.org/wiki/Wikidata:SPARQL_tutorial",
    text: "Learn SPARQL with Wikidatas beginner-friendly course for SPARQL"
  } ,
{ icon:"implemented-queries",
  heading:"Implemented\nSPARQL Queries",
  link:"/implementedSparqlQueries",
  text: "Check out our already implemented SPARQL queries and try them out!"
} ,
{ icon:"add",
  heading: "Create new\nSPARQL Queries",
  link:"/createNewSparqlQueries",
  text: "Help us create more  SPARQL queries and check out what others already submited!"
} ,
]

export const minigameTypes=[
    {title:"Sorting", id:0},
    {title:"Image Guess", id:1},
    {title:"Multiple Choice", id:2},
]

export const numberDisplay= [
  { icon:"question",
    heading1:"30000000000",
    heading2:"Questions",
  },
  { icon:"categories",
    heading1:"7",
    heading2:"Categories",
  } ,
{ icon:"matches",
  heading1:"30000",
  heading2:"Matches",
} ,
{ icon:"contributions",
  heading1:"750",
  heading2:"Contributions",
} ,
]

import infoScreenshot from "../assets/images/screenshot-1.jpg"
import infoQrCode from "../assets/images/qr-code.jpg"

export const qWikiInfo= [
  {
    heading1: "We are ",
    heading2:"Q-Wiki",
    text: "Q-Wiki is a strategy game for two players. The aim of the game is to conquer as much territory as you can in a limited time. The game pulls its data directly from wikidata. Generating millions of different questions in many categories from Geography to History. Do you have what it takes to conquer the map?",
    downloadText:"Download the game from the google play store now!",
    screenshotSrc: infoScreenshot,
    qrCode: infoQrCode,
  }
]

import aboutUsMemberOne from "../assets/images/member-1.png"

export const aboutUsData = [
{
  members: [
    {
      heading: "Antonia Berger",
      link:"https://github.com/AntoniaBe",
      text: "Frontend Developer",
      image: aboutUsMemberOne,
    },
    {
      heading: "Jennifer Lindner",
      link:"https://github.com/JennyLin1995",
      text: "Frontend Developer",
      image: aboutUsMemberOne,
    } ,
  {
    heading:"Malte Götz",
    link:"https://github.com/maltegoetz",
    text: "Backend Developer",
    image: aboutUsMemberOne,
  } ,
  {
    heading: "Eko Supardjo",
    link:"https://github.com/EkoSHtw",
    text: "Backend Developer",
    image: aboutUsMemberOne,
  },
  {
    heading: "Jonas Fichtmüller",
    link:"https://github.com/golemmoja",
    text: "Backend Developer",
    image: aboutUsMemberOne,
  },
  {
    heading: "David",
    link:"https://github.com/davidmllr",
    text: "Frontend Developer",
    image: aboutUsMemberOne,
  },
  {
    heading: "Arne",
    link:"https://github.com/heyarne",
    text: "Backend/Frontend Developer",
    image: aboutUsMemberOne,
  },
  {
    heading: "Laura",
    link:"https://github.com/chibbs",
    text: "Backend Developer",
    image: aboutUsMemberOne,
  },
],
wikidata:[
  {
    heading: "Antonia Berger",
    link:"https://github.com/AntoniaBe",
    text: "Frontend Developer",
    image: aboutUsMemberOne,
  },
  {
    heading: "SPARQL\nTutorial",
    link:"https://www.wikidata.org/wiki/Wikidata:SPARQL_tutorial",
    text: "Learn SPARQL with Wikidatas beginner-friendly course for SPARQL",
    image: aboutUsMemberOne,
  }
],
htw:[
  {
    heading: "Antonia Berger",
    link:"https://github.com/AntoniaBe",
    text: "Frontend Developer",
    image: aboutUsMemberOne,
  },
  {
    heading: "SPARQL\nTutorial",
    link:"https://www.wikidata.org/wiki/Wikidata:SPARQL_tutorial",
    text: "Learn SPARQL with Wikidatas beginner-friendly course for SPARQL",
    image: aboutUsMemberOne,
  }
],
}
];




export const qWikiHistory = [
  {
    heading: "The Task",
    text: "The original group consisted of 6 master Students. As part of our masters program in International Media and Programming at the HTW Berlin, we were tasked to create a game in collaboration with Wikidata. During the summer semester of 2019 we worked several months to realize the project.",
  },
  {
    heading: "The Diffuculty",
    text: "A spezial focus was put on the vast amount data and information the platform offers. Using the SPARQL backend enpoint we created queries to fetch data from which we could generate questions.",
  } ,
{
  heading: "The Inspiration",
  text: "The basic gameplay loop was inspired by popular Quiz-Apps, while creating a different take on the visual representation.",
} ,
{
  heading: "The Workflow",
  text: "During these months we worked closely with our contacts at Wikidata, exchanging ideas and suggestions to create a fun and representative game.",
} ,
{
  heading: "The End of the Beginning",
  text: "The result at the end of the semester was recieved positively, promising a good foundation onto which new teams could build upon. Not just amongst Wikidata but also from professors at the HTW, which lead to the continuation of the project during the next semester. While the original team mostly returned to the project, we also welcomed 2 new members to help us perfect the game.",
} ,
{
  heading: "The Leftovers",
  text: "Due to the lack of time in the first run we had to cut some ideas and features. With a whole second semester we were able to implement many more functions, as well as this website to accompany the game.",
} ,
{
  heading: "The new Task",
  text: "While refining the core game, adding new categories and questions, we also wanted to create a platform for users to help us help Wikidata get the recognition they deserve as well as build and maintain knowledge on their platform.",
} ,
]
