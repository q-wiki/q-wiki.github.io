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
import Container75 from './components/atoms/Container75/Container75'
import Header from './components/molecules/Header/Header'
import Footer from './components/molecules/Footer/Footer'

import './App.css';

// our routes 👩‍🔧

import AboutPage from './components/organisms/AboutPage/AboutPage'
import LandingPage from './components/organisms/LandingPage/LandingPage'
import ReportPage from './components/organisms/ReportPage/ReportPage'
import SparqlPage from './components/organisms/SparqlPage/SparqlPage'
import NotFoundPage from './components/organisms/NotFoundPage/NotFoundPage'
import CreateNewQueriesPage from './components/organisms/CreateNewQueriesPage/CreateNewQueriesPage'
import ImplementedQueriesPage from './components/organisms/ImplementedQueriesPage/ImplementedQueriesPage'

// define app, start the router and we're good to go 👩‍🚀

function App() {
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
                            <Route path='/report'>
                                <ReportPage />
                            </Route>
                            <Route path='/contribute'>
                                <SparqlPage />
                            </Route>
                            <Route path='/implementedSparqlQueries'>
                                <ImplementedQueriesPage />
                            </Route>
                            <Route path='/createNewSparqlQueries'>
                                <CreateNewQueriesPage />
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
    );
}

export default App;