import React from 'react'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import { inject, observer } from 'mobx-react'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import Container75 from '../../atoms/Container75/Container75'
import Minigame from '../../molecules/Minigame/Minigame'
import MinigameStore from '../../../stores/MinigameStore'
import Button from '../../atoms/Button/Button'
import {Row, Col} from 'react-flexbox-grid'

import { minigameTypes } from '../../../../src/constants/constants'


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import '../../atoms/Accordion/accordion.scss';

import './implementedQueriesPage.scss';
import Loadable from "react-loadable";

let categories;
let questions;
let dataStore;
let questionsArray;

function LoadingComponent ({ loadingText='Loading… 📂' }) {
    return <>
        <p>{loadingText}</p>
    </>
}

const WikidataQueryEditor = Loadable({
    loader: () => import('../../molecules/WikidataQueryEditor/WikidataQueryEditor'),
    loading: LoadingComponent
})

@inject('dataStore')
@observer
export default class ImplementedQueriesPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categorie: null,
            type: null,
            showEditor: false,
        };
        dataStore = this.props.dataStore;
        dataStore = this.props.dataStore;
        categories = this.props.dataStore.categories.categories;
        questions = this.props.dataStore.questions;
        questionsArray = questions.questions;
    }

    changeStatus(question, status){
        if(status == 3 && question.status == 1 || status == 1 && question.status == 3){
            question.status = 0;
        }else{
            question.status = status;
        }
    }

    componentDidUpdate(prevProps){
        questionsArray = questions.questions;
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
        this.filterQuestions()
    }

    filterQuestions(){
        questionsArray = questions.questions;

        if(this.state.categorie){
            let result = questionsArray;
            result = result.filter(question => question.category.title == this.state.categorie);
            questionsArray = result;
        }

        if(this.state.type || this.state.type==0){
            let result = questionsArray;
            result = result.filter(question => question.miniGameType == this.state.type);
            questionsArray = result;
        }
    }

    showEditor(){
        this.setState({showEditor:true});
    }

    render(){
        categories = this.props.dataStore.categories.categories;
        this.filterQuestions();
        return (
            <div className="implemented-queries">
                <div className="implemented-queries-header ">
                    <Heading type="H1">Check out our SPARQL Queries!</Heading>
                    <Paragraph textAlign="justify">Choose a minigame and category and try them out Yourself!</Paragraph>
                </div>
                <Container75 className="filter">
                    {!dataStore.categories.isLoading ?
                        <div className="dropdown-container">
                            <Dropdown index={0} placeholder="Minigame Types" options={minigameTypes} onChange={this.onChange}/>
                            <Dropdown index={1} placeholder="Minigame Categories" options={JSON.parse(JSON.stringify(categories))} onChange={this.onChange}/>
                        </div>:null
                    }
                </Container75>
            <Container75 className="accordion-container">

                <Accordion allowZeroExpanded>
        {
            !questions.isLoading ? questionsArray.map((question, index) => (
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <p className="accordionButtonTitle">{question.taskDescription}<span>{question.category.title}</span></p>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {
                            question.status == 1 || question.status == 0?
                                <div>
                                    <div className="minigame-div">
                                        <Minigame questionData={question}/>
                                    </div>
                                </div>
                                :
                                <Row center="xs">
                                    <Button onClick={() => this.changeStatus(question, 1)}>Try Out This Query</Button>
                                </Row>
                        }
                        {
                            question.status == 3 || question.status == 0?
                                <div className="editor-container">
                                    <WikidataQueryEditor>
                                        {question.sparqlQuery}
                                    </WikidataQueryEditor>
                                </div>
                                :
                                <Row center="xs" className="button-editor">
                                    <Button onClick={() => this.changeStatus(question, 3)}>Check out the SPARQL query</Button>
                                </Row>
                        }
                    </AccordionItemPanel>
                </AccordionItem>
                )) :
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

                </Accordion>
            </Container75>
            </div>
        )
    }
}
