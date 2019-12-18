import React from 'react';
import {inject, observer} from "mobx-react/dist/mobx-react";
import {Row, Col} from 'react-flexbox-grid'
import './minigameOption.scss';

export default class MinigameOption extends React.Component{

    constructor(props) {
        super(props);
        let container = [];
        container.push("minigame_option ");
        container.push("option_inactive ");
        container.push("result_");
        container.push(props.result?props.result:"undefined");
        this.state = {
            isClicked: props.active,
            classNames: container,
        };
    }

    static getDerivedStateFromProps(props, state){
        if(props.result != null){
            let container = state.classNames;
            container[3] = props.result;
            state.classNames = container;
        }
        return null;
    }

    componentDidUpdate(){
        if(this.state.isClicked != this.props.active){
            this.setState({isClicked: this.props.active})
            let container = this.state.classNames;
            container[1]= this.state.isClicked?" option_inactive ":" option_active ";
            this.setState({
                classNames : container,
            });
        }
    }

    render() {

        return(
            <div id={this.props.id} onClick={this.props.onClick} className={this.state.classNames.join("")} >
                {this.props.children}
            </div>
        );
    }
}
