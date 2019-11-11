import React, { Component } from 'react'

import {LoremIpsum} from 'react-lorem-ipsum'

//Atoms:
import Icon from './components/atoms/Icon/Icon'
import Heading from './components/atoms/Heading/Heading'
import Paragraph from './components/atoms/Paragraph/Paragraph'
import Container75 from './components/atoms/Container75/Container75'
import ContainerFullPage from './components/atoms/ContainerFullPage/ContainerFullPage'
import ContainerHalfPage from './components/atoms/ContainerHalfPage/ContainerHalfPage'
import Checkbox from './components/atoms/Checkbox/Checkbox'
import TextField from './components/atoms/TextField/TextField'
import TextArea from './components/atoms/TextArea/TextArea'
import Dropdown from './components/atoms/Dropdown/Dropdown'
import Button from './components/atoms/Button/Button'
//Molecules:
import Card from './components/molecules/Card/Card'

//Organisms:


import { Grid } from 'react-flexbox-grid';

import './App.css';

function App() {
  return (
      <Grid fluid>
          <ContainerFullPage>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              Is the reported Problem valid?
              <Checkbox>
                Yes
              </Checkbox>
              <Checkbox>
                No
              </Checkbox>
              <Checkbox>
                Not sure
              </Checkbox>
            </div>
          </ContainerFullPage>
          <br/>
          <ContainerFullPage>
            <p>Option marked as correct Answer*</p>
            <TextField placeholder={"Correct Option"}/>
          </ContainerFullPage>
          <br/>
          <ContainerFullPage>
            <p>Leave a comment</p>
            <TextArea placeholder={"Comment"}/>
          </ContainerFullPage>
          <br/>
          <ContainerFullPage>
              <p>Select the type of problem</p>
              <Dropdown placeholder="Please select an option" options={["Answer incorrect", "Duplicate options", "Wikidata data incorrect"]}/>
          </ContainerFullPage>
          <ContainerFullPage>
              <Button/>
          </ContainerFullPage>
      </Grid>
  );
}

export default App;
