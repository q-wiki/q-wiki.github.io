import React from 'react'

import {
  // NOTE: We use the hash router because it's easer to setup with gh-pages
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// layout components

import { Grid } from 'react-flexbox-grid'
import ContainerFullPage from './components/atoms/ContainerFullPage/ContainerFullPage'
import Header from './components/molecules/Header/Header'
import Footer from './components/molecules/Footer/Footer'

import './App.css'

// our routes 👩‍🔧

import AboutPage from './components/organisms/AboutPage/AboutPage'
import AddingQuestionsPage from './components/organisms/AddingQuestionsPage/AddingQuestionsPage'
import LandingPage from './components/organisms/LandingPage/LandingPage'
import ReportPage from './components/organisms/ReportPage/ReportPage'
import SparqlPage from './components/organisms/SparqlPage/SparqlPage'
import NotFoundPage from './components/organisms/NotFoundPage/NotFoundPage'
import CreateNewQueriesPage from './components/organisms/CreateNewQueriesPage/CreateNewQueriesPage'
import ImplementedQueriesPage from './components/organisms/ImplementedQueriesPage/ImplementedQueriesPage'
import GithubLoginSuccessfulPage from './components/organisms/GithubLoginSuccessful/GithubLoginSuccessfulPage'

// define app, start the router and we're good to go 👩‍🚀

function App () {
  return (
    <Router>
      <Grid fluid>
        <ContainerFullPage>
          <div className="pageContent">
            <Header/>
            <Switch>
              <Route exact path='/'>
                <LandingPage />
              </Route>
              <Route path='/about'>
                <AboutPage />
              </Route>
              <Route path='/report/list/open'>
                <ReportPage page='list' showOpenIssues={true} />
              </Route>
              <Route path='/report/list/closed'>
                <ReportPage page='list' showOpenIssues={false} />
              </Route>
              <Route path='/report/:minigameId?'>
                <ReportPage page='form' />
              </Route>
              <Route exact path='/contribute'>
                <SparqlPage />
              </Route>
              <Route path='/contribute/how-to-add-questions'>
                <AddingQuestionsPage />
              </Route>
              <Route path='/contribute/implemented-sparql-queries'>
                <ImplementedQueriesPage />
              </Route>
              <Route path='/contribute/create-new-sparql-queries'>
                <CreateNewQueriesPage />
              </Route>
              <Route path='/login'>
                <GithubLoginSuccessfulPage />
              </Route>
              <Route path='*'>
                <NotFoundPage />
              </Route>
            </Switch>
          </div>
          <Footer/>
        </ContainerFullPage>
      </Grid>
    </Router>
  )
}

export default App
