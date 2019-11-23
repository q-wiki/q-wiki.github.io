import React from 'react';
import './landingPage.scss';

import Container75 from '../../atoms/Container75/Container75'
import ContainerFullPage from '../../atoms/ContainerFullPage/ContainerFullPage'
import ContainerHalfPage from '../../atoms/ContainerHalfPage/ContainerHalfPage'

import Icon from '../../atoms/Icon/Icon'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Button from '../../atoms/Button/Button'

import Card from '../../molecules/Card/Card'

import {LoremIpsum} from 'react-lorem-ipsum'
import { inject, observer } from 'mobx-react'

@inject('dataStore')
@observer
export default class LandingPage extends React.Component{
  onClick(){
    const dataStore = this.props.dataStore;
    if(dataStore.icon === "add"){
        dataStore.icon = "documents";
    }else{
        dataStore.icon = "add";
    }
  }

  render() {
    const dataStore = this.props.dataStore;
    return (
        <>
          <br/>  <br/>
          The DataStore value for "icon" is "{dataStore.icon}"
          <br/>  <br/>
          The resulting icon is:
          <br/>  <br/>
          <Icon icon={dataStore.icon} width={90} height={90}/>
          <br/>  <br/>
          Now lets change the value in the store, click the button!
          <br/>  <br/>
          <Button onClick={this.onClick.bind(this)}>Change dataStore value of "icon" to a different value</Button>
          <br/>  <br/>
          The icon above as well as the text should have changed
        </>
      );
  }
}
