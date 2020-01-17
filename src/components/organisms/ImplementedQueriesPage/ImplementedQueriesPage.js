import React from 'react'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import { inject, observer } from 'mobx-react'
import Dropdown from '../../atoms/Dropdown/Dropdown'
import Container75 from '../../atoms/Container75/Container75'
import Minigame from '../../molecules/Minigame/Minigame'
import MinigameStore from '../../../stores/MinigameStore'
import Button from '../../atoms/Button/Button'

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

let dataStore;

@inject('dataStore')
@observer
export default class ImplementedQueriesPage extends React.Component{

    changeStatus(question){
        question.status = 1;
    }

    render(){
        dataStore = this.props.dataStore;
        let categories = dataStore.categories.categories;
        let questions = dataStore.questions;
        return (
            <div className="implemented-queries">
                <div className="implemented-queries-header ">
                    <Heading type="H1">Check out our SPARQL Queries!</Heading>
                    <Paragraph textAlign="justify">Choose a minigame and category and try them out Yourself!</Paragraph>
                </div>
                <Container75 className="filter">
                    <div className="dropdown-container">
                        <Dropdown placeholder="Minigame Types" options={minigameTypes}/>
                    {!dataStore.categories.isLoading ?
                        <Dropdown placeholder="Minigame Categories" options={JSON.parse(JSON.stringify(categories))}/>:null
                    }
                    </div>
                </Container75>
            <Container75 className="accordion-container">

                <Accordion allowZeroExpanded>
        {
            !questions.isLoading ? questions.questions.map((question, index) => (
                <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <p className="accordionButtonTitle">{question.taskDescription}<span>{question.category.title}</span></p>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {question.status == 2?
                            <Button onClick={() => this.changeStatus(question)}>Try Out This Query</Button>
                            : <div>
                                 <div className="minigame-div">
                                    <Minigame questionData={question}/>
                                 </div>
                             </div>
                        }
                    </AccordionItemPanel>
                </AccordionItem>
                )) : <p>Loading ...</p>
        }

                </Accordion>
            </Container75>
            </div>
        )
    }
}
