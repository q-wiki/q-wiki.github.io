import React from 'react';
import {inject, observer} from "mobx-react/dist/mobx-react";
import {Row, Col} from 'react-flexbox-grid'
import MinigameOption from '../../atoms/MinigameOption/MinigameOption';
import update from 'immutability-helper';
import Button from '../../atoms/Button/Button';
import './minigame.scss';
import MinigameStore from "../../../stores/MinigameStore";
import {minigameTypes} from "../../../constants/constants";

@observer
export default class Minigame extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questionData : this.props.questionData,
            minigameLoaded : false,
            question : "",
            type: minigameTypes[this.props.questionData.miniGameType].title,
            options: [],
            correctAnswer: [],
            answer: [],
            checked: false,
        }
        this.generateMinigame(this.state.questionData);
    }

    async generateMinigame(question){
        let minigameStore = new MinigameStore();

        await minigameStore.initializeMinigame(
            question.sparqlQuery, minigameTypes[question.miniGameType].title, question.taskDescription);

        this.setState({correctAnswer : minigameStore.minigameAnswers});
        this.setState({question : minigameStore.minigameQuestion});

        for(var i = 0; i < minigameStore.minigameOptions.length; i++){
            const content = {};
            content.text = minigameStore.minigameOptions[i]
            content.active = false;
            content.result = null;
            this.state.options.push(content);
        }
        this.setState({minigameLoaded : true});
    }

    onClickHandler = (e) =>{
        const id = e.target.id;
        console.log(e.target);
        const active = !this.state.options[id].active;
        let newState = [];

        if(this.state.type === "Multiple Choice"){
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

        }else if(this.state.type === "Sorting"){
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
        let correct = this.state.correctAnswer;
        let options = this.state.options;
        if(this.state.type == "Sorting"){
            for(let i = 0; i<options.length; i++){
                if(answer.indexOf(options[i].text)==correct.indexOf(options[i].text)){
                    options[i].result = true;
                }else{
                    options[i].result = false;
                }
            }
        }else if(this.state.type == "Multiple Choice"){
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
                {!this.state.minigameLoaded ?
                    <p>Loading</p>
                    :
                    <div className="minigame_container">
                        <div className="minigame_content" >
                            <Row className="minigame_head">
                                <Col md={1} />
                                <Col md={10} className="minigame_question">{this.state.question}</Col>
                                <Col md={1} />
                            </Row>
                            {
                                this.state.options.map((option, index) => (
                                    <Row className="minigame_options" between="md" key={index}>
                                        <Col md={1} />
                                        <Col md={this.state.type=="Sorting"?9:10} className="container_option">
                                            <MinigameOption result={this.state.options[index].result} id={index} onClick={((e) => this.onClickHandler(e))} active={this.state.options[index].active}>
                                                {this.state.options[index].text}
                                            </MinigameOption>
                                        </Col>
                                        {this.state.type=="Sorting"?
                                            <Col md={1} className="container_option_number">
                                                {(this.state.answer.indexOf(this.state.options[index].text)+1)>0?<div className={"sorting_number"}><p>{this.state.answer.indexOf(this.state.options[index].text)+1}</p></div>:null}
                                            </Col>
                                            :
                                            null
                                        }
                                        {
                                            this.state.type=="Sorting"&& this.state.checked?
                                                    <Col md={1} className="container_result_number">
                                                        <div className={"result_number"}><p>{this.state.correctAnswer.indexOf(this.state.options[index].text)+1}</p></div>
                                                    </Col>
                                                    :
                                                    <Col md={1} />
                                        }
                                    </Row>
                                ))
                            }
                            <Row className="minigame_button">
                                <Col md={4} />
                                <Col md={4}>
                                    <Button disabled={this.state.checked} onClick={this.validateOptions.bind(this)}>Send</Button>
                                </Col>
                                <Col md={4} />
                            </Row>
                        </div>
                    </div>
                }

            </>
        );
    }
}
