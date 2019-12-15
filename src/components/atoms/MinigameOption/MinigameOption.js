import React from 'react';
import {inject, observer} from "mobx-react/dist/mobx-react";
import {Row, Col} from 'react-flexbox-grid'
import './minigameOption.scss';

export default class MinigameOption extends React.Component{
    classNames = [];
    constructor(props) {
        super(props);
        this.state = {
            isClicked: props.active,
        };
        this.classNames.push("minigame_option ");
        this.classNames.push("option_inactive ");
        this.classNames.push("result_");
        this.classNames.push(props.result?props.result:"undefined");
    }

    render() {
        if(this.state.isClicked != this.props.active){
            this.setState({isClicked: this.props.active})
            this.classNames[1]= this.state.isClicked?" option_inactive":" option_active";
        }
        return(
            <div id={this.props.id} onClick={this.props.onClick} className={this.classNames.join("")}>
                {this.props.children}
            </div>
        );
    }
}
