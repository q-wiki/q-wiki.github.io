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
              Do you like cats?
              <Checkbox>
                Yes
              </Checkbox>
              <Checkbox>
                Yeah
              </Checkbox>
              <Checkbox>
                Not sure, but yes
              </Checkbox>
            </div>
          </ContainerFullPage>
          <br/>
          <ContainerFullPage>
            <p>Tell me a cute cat name</p>
            <TextField placeholder={"Mizie or Captain Snuggles or ..."}/>
          </ContainerFullPage>
          <br/>
          <ContainerFullPage>
            <p>Tell me how much you like cats</p>
            <TextArea placeholder={"I like cats because ..."}/>
          </ContainerFullPage>
          <br/>
          <ContainerFullPage>
              <p>Select a cat mood</p>
              <Dropdown placeholder="Please select an option" options={["Snuggly", "Hungry", "Fierce", "Sleepy", "Wanne break stuff", "Miauuuuuuuuu"]}/>
          </ContainerFullPage>
          <br/>
          <ContainerFullPage>
              <Button>Send Cat Pics</Button>
          </ContainerFullPage>
      </Grid>
  );
}

export default App;
