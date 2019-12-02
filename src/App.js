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
import Menu from './components/molecules/Menu/Menu'

import './App.css';

// our routes 👩‍🔧

import AboutPage from './components/organisms/AboutPage/AboutPage'
import LandingPage from './components/organisms/LandingPage/LandingPage'
import ReportPage from './components/organisms/ReportPage/ReportPage'
import SparqlPage from './components/organisms/SparqlPage/SparqlPage'
import NotFoundPage from './components/organisms/NotFoundPage/NotFoundPage'

// define app, start the router and we're good to go 👩‍🚀

function App() {
  return (
    <Router>
      <Grid fluid>
        {/* NOTE: Given the current folder structure you probably want to move this
            into a component */}
            <Menu/>
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
            <Route path='/contribute'>
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
