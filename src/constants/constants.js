


import screen1 from "../assets/images/screen2.png"
import screen2 from "../assets/images/screen10.png"


export const screenshots= [
  { src:screen2,
  } ,
{ src:screen1,
} ,
]


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
  link:"/report/create",
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
    heading: "The World could always use more Heroes!",
    text: "Join the community, learn how to write SPARQL queries and contribute to the game."
  }
]

export const headerImplemenetedPage = [
    {
        heading: "Check out our in-game SPARQL Queries!",
        text: "Choose a minigame type and category and try them out yourself!"
    }
]

export const createNewPage = [
    {
        heading: "Create new SPRAQL Queries!",
        text: "Help us extend our game with new queries and millions of possible questions!"
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

import infoScreenshot from "../assets/images/screenshot-1.jpg"
import infoQrCode from "../assets/images/qr-code.svg"


export const qWikiInfo= [
  {
    heading1: "We are ",
    heading2:"Q-Wiki",
    text: "Q-Wiki is a strategy game for two players. The aim of the game is to conquer as much territory as you can in a limited time. The game pulls its data directly from wikidata. Generating millions of different questions in many categories from Geography to History. Do you have what it takes to conquer the map?",
    downloadText:"Download the game from the Google Play Store now!",
    screenshotSrc: infoScreenshot,
    qrCode: infoQrCode,
  }
]

import aboutUsMemberOne from "../assets/images/member-1.jpg"
import werkmeister from "../assets/images/Werkmeister.png"
import strippgen from "../assets/images/Strippgen.png"
import weberWulff from "../assets/images/Weber-Wulff.jpg"
import schlueter from "../assets/images/schlueter.jpeg"
import mueller from "../assets/images/mueller.jpg"

export const aboutUsData = [
{
  members: [
    {
      heading: "Antonia Berger",
      link:"https://github.com/AntoniaBe",
      text: "Frontend",
      image: aboutUsMemberOne,
    },
    {
      heading: "Jennifer Lindner",
      link:"https://github.com/JennyLin1995",
      text: "Frontend",
      image: aboutUsMemberOne,
    } ,
  {
    heading:"Malte Götz",
    link:"http://maltegoetz.com ",
    text: "Backend",
    image: aboutUsMemberOne,
  } ,
  {
    heading:"Eko Supardjo",
    link:"https://github.com/EkoSHtw",
    text: "Backend",
    image: aboutUsMemberOne,
  },
  {
    heading: "Jonas Fichtmüller",
    link:"https://github.com/golemmoja",
    text: "Backend",
    image: aboutUsMemberOne,
  },
  {
    heading: "David Müller",
    link:"https://github.com/davidmllr",
    text: "Frontend",
    image: mueller,
  },
  {
    heading: "Arne Schlüter",
    link:"https://github.com/heyarne",
    text: "Backend/Frontend",
    image: schlueter,
  },
  {
    heading: "Laura Wölbeling",
    link:"https://github.com/chibbs",
    text: "Backend",
    image: aboutUsMemberOne,
  },
],
wikidata:[
  {
    heading: "Lucas Werkmeister",
    link:"https://lucaswerkmeister.de",
    image: werkmeister,
  },
  {
    heading: "Alaa Sarhan",
    image: aboutUsMemberOne,
  }
],
htw:[
  {
    heading: "Prof. Dr. Debora Weber-Wulff",
    text: "",
    image: weberWulff,
  },
  {
    heading: "Prof. Dr.-Ing. David Strippgen",
    text: "",
    image: strippgen,
  }
],
}
];

import screenshot2 from "../assets/images/screenshot-2.jpg"
import screenshot3 from "../assets/images/screenshot-3.jpg"

export const qWikiHistory = [
{
  screenshots: [
    {
      src: screenshot2,
    },
    {
     src: screenshot3,
    } ,
],
  firstPart: [
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
  },
],
secondPart:[
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
}
];

export const reportPageInfo= [
  {
    heading: "Even after hundreds of tests, we still can not guarantee that every question is 100% correct!",
    text: "But you can help us locate and correct as many bugs as possible!\nFound an incorrect question? > Report it here!",
    text2:"Want to help us correct all these wrong questions?\nScroll through the reports and help us identify the error!",
  },
  {
    heading:"Wrong or missing content?",
    heading2:"Did you find an error in a question?",
    text:"Join the community and leave a suggestion. Together we can provide as much knowledge as possible!",
    text2:"If you notice this during a game, click the in-game button. It makes filling out this form much quicker!",
  }
];
