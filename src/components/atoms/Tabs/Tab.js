
import React, { Component } from 'react'
import Tabs from 'react-responsive-tabs';

import 'react-responsive-tabs/styles.css';
import './tabs.scss';

const tabsContent = [
  {
    title: 'Open Reports',
    content: 'This is a list of open reports!'
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

function getTabs() {
  return tabsContent.map((tabsContent, index) => ({
    title: tabsContent.title,
    getContent: () => tabsContent.content,
    /* Optional parameters */
    key: index,
    tabClassName: 'tab',
    panelClassName: 'panel',
  }));
}



const Tab = () => <Tabs showMore={false} items={getTabs()} />;


export default Tab;
