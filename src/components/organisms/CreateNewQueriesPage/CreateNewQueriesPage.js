import React,{useState} from 'react'
import { inject, observer } from 'mobx-react'

import Paragraph from '../../atoms/Paragraph/Paragraph'
import Heading from '../../atoms/Heading/Heading'
import Container75 from '../../atoms/Container75/Container75'
import Minigame from '../../molecules/Minigame/Minigame'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import MinigameStore from '../../../stores/MinigameStore'
import TextField from '../../atoms/TextField/TextField'
import TextArea from '../../atoms/TextArea/TextArea'
import Button from '../../atoms/Button/Button'
import {Row, Col} from 'react-flexbox-grid'


import { minigameTypes, createNewPage, exampleQuery } from '../../../../src/constants/constants'


import './createNewQueriesPage.scss';

let dataStore;
let url = "https://query.wikidata.org/#";

@inject('dataStore')
@observer
export default class CreateNewQueriesPage extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        categorie: null,
        type: null,
        query: exampleQuery,
        task: null,
        hasAllContent: false,
        createMinigame: false,
        minigameData: null,
        error: false,
        sendResponse: null,
      };

      dataStore = this.props.dataStore;
  }

  onChange = (value, index) => {
      if(index == 0){
          let newValue = minigameTypes.map(function(e) { return e.title; }).indexOf(value);
          if(newValue>-1){
              this.setState({type : newValue});
          }else{
              this.setState({type : null});
          }
      }else if(index == 1){
          this.setState({categorie : value});
      }

  }
  onTextChange = (event) => {
    this.setState({
      task: event.target.value
    })
  }
  onQueryChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  validateInputs(){
    if(this.state.categorie != null && this.state.categorie != ""
      && this.state.type != null && this.state.type != ""
      && this.state.query != null && this.state.query != ""
      && this.state.task != null && this.state.task != ""
    ){
      return true;
    }else{
      return false;
    }
  }

  hasAllContent(){

    this.setState({
      hasAllContent: true
    })
      this.setState({
        error: false
      })
  }

  isMissingContent(){
            this.setState({
              hasAllContent: false
            })
            this.setState({
              createMinigame: false
            })
          this.setState({
            error: true
          })
  }

  generateMinigame(){
    if(this.validateInputs()){
      this.hasAllContent();
      let data = {
          miniGameType: this.state.type,
          taskDescription: this.state.task,
          sparqlQuery: this.state.query
      }
      this.setState({
        minigameData: data
      })

      this.setState({
        createMinigame: true
      })
    }else{
      this.isMissingContent();
    }
  }

  async sendQuery(){
    if(this.validateInputs()){
      this.hasAllContent();
      let data = {
        task: this.state.task,
        query: this.state.query,
        type: this.state.type,
        categorieTitle: this.state.categorie,
        categorie: dataStore.categories.categories.find(x => x.title === this.state.categorie).id,
      }
      await dataStore.sendQuery(data);
      this.setState({
        sendResponse: dataStore.responsePost
      })
    }else{
      this.isMissingContent();
    }
  }

  render(){
    let categories = this.props.dataStore.categories.categories;
    return(
        <div className="create-new">
          <div className="create-new-header ">
            <div className="create-new-header-content">
            <Heading type="H1">{createNewPage[0].heading}</Heading>
            <Paragraph textAlign="justify">{createNewPage[0].text}</Paragraph>
            </div>
          </div>
          <Container75 className="create-new-container">
          {!dataStore.categories.isLoading?
            <div>
              <div className="create-new-text">
                <Heading type="H2">Let your imagination run wild!</Heading>
                <Paragraph>Fill out the form below and submit your query, we will review and approve it asap! You can test your query any time and try the resulting minigame. Note! The minigame will only work properly when all fields are present!</Paragraph>
                <Paragraph>Feel free to consult any of the tutorials or documentations at any time and return to complete your query.</Paragraph>
              </div>
              <div className="dropdown-container">
                <Paragraph>Choose a minigame type and category so we can classify your query in our system!</Paragraph>
                <Dropdown index={0} placeholder="Minigame Types *" options={minigameTypes} onChange={this.onChange}/>
                <Dropdown index={1} placeholder="Minigame Categories *" options={JSON.parse(JSON.stringify(dataStore.categories.categories))} onChange={this.onChange}/>
              </div>
              <div className="input-container">
                <Paragraph>Enter a minigame question, if you are unsure how to put it check our tutorial. The format goes something like this: "Where is the character {"{0}"} from?"</Paragraph>
                <TextField onChange={this.onTextChange.bind(this)} placeholder="Enter the minigame question"></TextField>
                <Paragraph>Enter your query here or switch over to the official wikidata SPARQL editor.</Paragraph>
                <TextArea onChange={this.onQueryChange.bind(this)} placeholder="Enter a query here *" defaultValue={exampleQuery}>
                </TextArea>
                <Row>
                    <a target="blank" href={url += encodeURIComponent(this.state.query)}> > Open this query in the official Wikidata SPARQL editor</a>
                </Row>
                <Row center="xs" className="buttons-row">
                    <Button onClick={() => this.generateMinigame()}>Generate Minigame</Button>
                    <Button onClick={this.sendQuery.bind(this)}>Send Query</Button>
                </Row>
                <Row className="notification-row">
                    { this.state.error?
                      <div className="alert">
                        Please fill out all fields.
                      </div>
                      :null
                    }
                    {
                      this.state.sendResponse?
                      <div className="alert">
                        {this.state.sendResponse}
                      </div>
                      :null
                    }
                </Row>
              </div>
              {this.state.createMinigame && this.state.hasAllContent?
                <div>
                    <div className="minigame-div">
                        <Minigame questionData={this.state.minigameData}/>
                    </div>
                </div>
                : null
              }
            </div>
            :
            <div className="loading-container">
                <div className="lds-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
          }
          </Container75>
        </div>
    )
  }
}
