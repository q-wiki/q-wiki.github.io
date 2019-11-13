import React, { Component } from 'react'
import {
  // NOTE: We use the hash router because it's easer to setup with gh-pages
  HashRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'

// layout components

import { Grid } from 'react-flexbox-grid';
import ContainerFullPage from './components/atoms/ContainerFullPage/ContainerFullPage'

import './App.css';

// our routes 👩‍🔧

import AboutPage from './components/organisms/AboutPage/AboutPage'
import LandingPage from './components/organisms/LandingPage/LandingPage'
import ReportPage from './components/organisms/ReportPage/ReportPage'
import SparqlPage from './components/organisms/SparqlPage/SparqlPage'
import NotFoundPage from './components/organisms/NotFoundPage/NotFoundPage'

console.log(AboutPage, LandingPage, ReportPage, SparqlPage, NotFoundPage)

// define app, start the router and we're good to go 👩‍🚀

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
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route path='/report'>
              <ReportPage />
            </Route>
            <Route path='/questions'>
              <SparqlPage />
            </Route>
            <Route path='*'>
              <NotFoundPage />
            </Route>
          </Switch>
        </ContainerFullPage>
      </Grid>
    </Router>
  );
}

export default App;
