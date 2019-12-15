import React from 'react';
import Icon from '../../atoms/Icon/Icon'
import Button from '../../atoms/Button/Button'
import { inject, observer } from 'mobx-react'
import Minigame from '../../molecules/Minigame/Minigame'
import './landingPage.scss';

@inject('dataStore')
@inject('minigameStore')
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
    onClickMore(){
        const minigameStore = this.props.minigameStore;
        minigameStore.minigames[0].minigameType = "New";
    }

  render() {
    const dataStore = this.props.dataStore;
    const minigameStore = this.props.minigameStore;
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
            <br/>  <br/>
            <Minigame minigameData={minigameStore.minigames[2]}/>
        </>
      );
  }
}
