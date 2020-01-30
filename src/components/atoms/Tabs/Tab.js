import React, { Component } from 'react'
import Tabs from 'react-responsive-tabs';

import 'react-responsive-tabs/styles.css';
import 'react-accessible-accordion/dist/fancy-example.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


import './tabs.scss';
import '../../atoms/Accordion/accordion.scss';


//This is an example how to use the Tab and Accordion Components

const accordionContent= [ {
  title: 'Wrong correct answer',
  category: 'Geography',
  content: 'This is content 1',
  userName: 'noobidinoob'
},{
  title: 'Wrong correct answer',
  category: 'Space',
  content: 'This is content 2',
  userName: 'NoobMaster'
},{
  title: 'Duplicate Option',
  category: 'History',
  content: 'This is content 3',
  userName: 'GodOfNoobs',
}

];


const tabsContent = [
  {
    title: 'Open Reports',
    content:  <Accordion allowZeroExpanded>
    {getAccordions()}
    </Accordion>
  },
  {
    title: 'Closed Reports',
    content: 'This is a list of Closed Reports!'
  },
  {
    title: 'Fixed Reports',
    content: 'This is a list of Fixed Reports!'
  }
];

function getAccordions() {
  return accordionContent.map((accordionContent, index) => (
    <AccordionItem key={index}>
        <AccordionItemHeading>
            <AccordionItemButton>
                <p className="accordionButtonTitle">{accordionContent.title} [{accordionContent.category}] <span>reported by {accordionContent.userName}</span></p>
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <p>
            {accordionContent.content}
            </p>
        </AccordionItemPanel>
    </AccordionItem>

  ));
}

function getTabs() {
  return tabsContent.map((tabsContent, index) => ({
    title: tabsContent.title,
    getContent: () => tabsContent.content,
    /* Optional parameters */
    key: index,
    tabClassName: 'tab',
    panelClassName: 'panel',
    transformWidth: 516,
  }));
}



const Tab = () => <Tabs showMore={false} items={getTabs()} transformWidth={500}  />;


export default Tab;
