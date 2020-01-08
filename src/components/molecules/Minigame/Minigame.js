import React from 'react';
import {inject, observer} from "mobx-react/dist/mobx-react";
import {Row, Col} from 'react-flexbox-grid'
import MinigameOption from '../../atoms/MinigameOption/MinigameOption';
import update from 'immutability-helper';
import Button from '../../atoms/Button/Button';
import './minigame.scss';

@observer
export default class Minigame extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            minigame: props.minigameData,
            type: props.minigameData.minigameType,
            options: [],
            answer: [],
            checked: false,
        };
        for(var i = 0; i<this.state.minigame.options.length; i++){
            const content = {};
            content.text = this.state.minigame.options[i]
            content.active = false;
            content.result = null;
            this.state.options.push(content);
        }
    }

    onClickHandler = (e) =>{
        const id = e.target.id;
        const active = !this.state.options[id].active;
        let newState = [];

        if(this.state.minigame.minigameType === "mc"){
            //Handle visual update
            newState = this.state.options;
            // Multiple Choice reset all other options visually
            for(let i = 0; i < newState.length; i ++){
                newState[i].active = false;
            }
            // Set selected option
            newState[id].active = active;
            this.setState({
                options: newState
            });
            //Handle logical update
            newState = []
            if(active){
                newState = [this.state.options[id].text];
            }else{
                newState = [];
            }
            this.setState({
                answer: newState
            });

        }else if(this.state.minigame.minigameType === "sorting"){
            //Handle visual update
            newState = this.state.options;
            newState[id].active = active;
            this.setState({
                options: newState
            });
            //Handle logical update
            newState = this.state.answer;
            if(active){
                newState.push(this.state.options[id].text);
            }else{
                const index = newState.indexOf(this.state.options[id].text);
                newState.splice(index, 1);
            }
            this.setState({
                answer: newState
            });

        }else{

        }
    }

    validateOptions(){
        this.setState({checked: true});
        let answer = this.state.answer;
        let correct = this.state.minigame.answer;
        let options = this.state.options;
        if(this.state.type == "sorting"){
            for(let i = 0; i<options.length; i++){
                if(answer.indexOf(options[i].text)==correct.indexOf(options[i].text)){
                    options[i].result = true;
                }else{
                    options[i].result = false;
                }
            }
        }else if(this.state.type == "mc"){
            if(answer[0]==correct[0]){
                for(let i = 0; i < options.length; i++){
                    if(options[i].text == answer[0]){
                        options[i].result = true;
                    }
                }
            }else{
                for(let i = 0; i < options.length; i++){
                    if(options[i].text == answer[0]){
                        options[i].result = false;
                        console.log("Set False");
                    }
                    if(options[i].text == correct[0]){
                        options[i].result = true;
                        console.log("Set true");
                    }
                }
            }
        }
        this.setState({
            options: options,
        });
    }

    render() {
      return(
            <>
                <div className="minigame_container">
                    <div className="minigame_content" >
                        <Row className="minigame_head">
                            <Col md={1} />
                            <Col md={10} className="minigame_question">{this.state.minigame.question}</Col>
                            <Col md={1} />
                        </Row>

                        <Row className="minigame_options" between="md">
                            <Col md={1} />
                            <Col md={this.state.type=="sorting"?9:10} className="container_option">
                                <MinigameOption result={this.state.options[0].result} id={0} onClick={((e) => this.onClickHandler(e))} active={this.state.options[0].active}>
                                    {this.state.options[0].text}
                                </MinigameOption>
                            </Col>
                            {this.state.type=="sorting"?
                                <Col md={1} className="container_option_number">
                                    {(this.state.answer.indexOf(this.state.options[0].text)+1)>0?<div className={"sorting_number"}><p>{this.state.answer.indexOf(this.state.options[0].text)+1}</p></div>:null}
                                </Col>:null
                            }
                            <Col md={1} />
                        </Row>
                        <Row className="minigame_options" between="md">
                            <Col md={1} />
                            <Col md={this.state.type=="sorting"?9:10} className="container_option">
                                <MinigameOption result={this.state.options[1].result} id={1} onClick={((e) => this.onClickHandler(e))} active={this.state.options[1].active}>
                                    {this.state.options[1].text}
                                </MinigameOption>
                            </Col>
                            {this.state.type=="sorting"?
                                <Col md={1} className="container_option_number">
                                    {(this.state.answer.indexOf(this.state.options[1].text)+1)>0?<div className={"sorting_number"}><p>{this.state.answer.indexOf(this.state.options[1].text)+1}</p></div>:null}
                                </Col>:null
                            }
                            <Col md={1} />
                        </Row>
                        <Row className="minigame_options" between="md">
                            <Col md={1} />
                            <Col md={this.state.type=="sorting"?9:10} className="container_option">
                                <MinigameOption result={this.state.options[2].result} id={2} onClick={((e) => this.onClickHandler(e))} active={this.state.options[2].active}>
                                    {this.state.options[2].text}
                                </MinigameOption>
                            </Col>
                            {this.state.type=="sorting"?
                                <Col md={1} className="container_option_number">
                                    {(this.state.answer.indexOf(this.state.options[2].text)+1)>0?<div className={"sorting_number"}><p>{this.state.answer.indexOf(this.state.options[2].text)+1}</p></div>:null}
                                </Col>:null
                            }
                            <Col md={1} />
                        </Row>
                        <Row className="minigame_options" between="md">
                            <Col md={1} />
                            <Col md={this.state.type=="sorting"?9:10} className="container_option">
                                <MinigameOption result={this.state.options[3].result} id={3} onClick={((e) => this.onClickHandler(e))} active={this.state.options[3].active}>
                                    {this.state.options[3].text}
                                </MinigameOption>
                            </Col>
                            {this.state.type=="sorting"?
                                <Col md={1} className="container_option_number">
                                    {(this.state.answer.indexOf(this.state.options[3].text)+1)>0?<div className={"sorting_number"}><p>{this.state.answer.indexOf(this.state.options[3].text)+1}</p></div>:null}
                                </Col>:null
                            }
                            <Col md={1} />
                        </Row>
                        <Row className="minigame_button">
                            <Col md={4} />
                            <Col md={4}>
                                <Button disabled={this.state.checked} onClick={this.validateOptions.bind(this)}>Send</Button>
                            </Col>
                            <Col md={4} />
                        </Row>
                    </div>
                </div>
            </>
        );
    }
}
