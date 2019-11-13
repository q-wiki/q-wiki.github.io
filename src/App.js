import React, { Component } from 'react'
import {
  // NOTE: We use the hash router because it's easer to setup with gh-pages
  HashRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from 'react-router-dom'

import Container75 from './components/atoms/Container75/Container75'
import ContainerFullPage from './components/atoms/ContainerFullPage/ContainerFullPage'
import ContainerHalfPage from './components/atoms/ContainerHalfPage/ContainerHalfPage'


import Icon from './components/atoms/Icon/Icon'
import Heading from './components/atoms/Heading/Heading'
import Paragraph from './components/atoms/Paragraph/Paragraph'


import Card from './components/molecules/Card/Card'

import {LoremIpsum} from 'react-lorem-ipsum'

import { Grid } from 'react-flexbox-grid';

import './App.css';

// configure router 🔧

import AboutPage from './components/organisms/AboutPage/AboutPage'
import LandingPage from './components/organisms/LandingPage/LandingPage'
import ReportPage from './components/organisms/ReportPage/ReportPage'
import SparqlPage from './components/organisms/SparqlPage/SparqlPage'
import NotFoundPage from './components/organisms/NotFoundPage/NotFoundPage'

const routes = {
  '': LandingPage,
  'about': AboutPage,
  'report': ReportPage,
  'questions': SparqlPage
}

/**
 * Checks which route is currently active and renders it as configured in the
 * `route` constant above. If it doesn't match any route a 404 page is rendered.
 */
function ContentArea() {
  const { page } = useParams()
  const Organism = routes[page] || NotFoundPage
  return <Organism />
}

// define app, start the router and we're good to go

function App() {
  return (
    <Router>
      <Grid fluid>
        {/* NOTE: Given the current folder structure you probably want to move this
            into a component */}
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/report'>Report a Problem</Link></li>
            <li><Link to='/questions'>Add a Question</Link></li>
          </ul>
        </nav>
        <ContainerFullPage>
          <LoremIpsum/>
          <br></br>
          <br></br>
          <Icon icon="documents" width={90} height={90}/>
          <br></br>
          <br></br>
          <Heading type="H2" pallete="turqoise">
            Sup
          </Heading>
          <br></br>
          <br></br>
          <Paragraph>
            <LoremIpsum/>
          </Paragraph>
          <br></br>
          <br></br>
          <Paragraph>
            <LoremIpsum/>
          </Paragraph>
          <br></br>
          <br></br>
          <Card headline={'Ich bin eine Headline'} content={'Hello my name is Antonia'} icon="documents"/>
        </ContainerFullPage>
      </Grid>
    </Router>
  );
}

export default App;
