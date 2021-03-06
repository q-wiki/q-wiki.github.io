import React from 'react';
import {inject, observer} from "mobx-react/dist/mobx-react";
import {Row, Col} from 'react-flexbox-grid'
import MinigameOption from '../../atoms/MinigameOption/MinigameOption';
import update from 'immutability-helper';
import Button from '../../atoms/Button/Button';
import MinigameStore from "../../../stores/MinigameStore";
import {minigameTypes} from "../../../constants/constants";


import './minigame.scss';
import {observable} from "mobx/lib/mobx";

@observer
export default class MinigameOffline extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            questionData : this.props.questionData,
            question : this.props.questionData.taskDesciption,
            type: minigameTypes[this.props.questionData.miniGameType].title,
            options: this.props.questionData.options,
            correctAnswer: this.props.questionData.options[0].answer,
            answer: [],
            checked: false,
            overlayClass: "image_overlay invisible",
            licenseLoading: true,
            license: null,
            showLicense: false,
        }

        this.loadLicense(this.state.questionData.options[0].img)
    }

    async loadLicense(url){
        let minigameStore = new MinigameStore();
        await minigameStore.recieveLicense(url);
        this.setState({
            license: minigameStore.imgData,
        });
        this.setState({
            licenseLoading: minigameStore.licenseLoading,
        });
    }

    onClickHandler = (e) =>{
        const id = e.target.id;
        const active = !this.state.options[id].active;
        let newState = [];

        if(this.state.type === "Multiple Choice" || this.state.type === "Image Guess"){
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

    toggleOverlay = (e) => {
        if (this.state.overlayClass.includes("invisible")) {
            this.setState({overlayClass : "image_overlay visible"});
        }
        else if (this.state.overlayClass.includes("visible")) {
            this.setState({overlayClass : "image_overlay invisible"});
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
        }else if(this.state.type == "Multiple Choice" || this.state.type == "Image Guess"){
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
                    }
                    if(options[i].text == correct[0]){
                        options[i].result = true;
                    }
                }
            }
        }
        this.setState({
            options: options,
        });
    }

    renderLicense(){
        let dom = <div className="license-links" dangerouslySetInnerHTML={{__html: this.state.license.licenseInfo}}/>
        return dom;
    }

    showLicense(){
        this.setState({showLicense: true});
    }

    render() {
      return(
            <>
                {!this.state.minigameLoaded ?
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
                    :
                    <div className="minigame_container">
                        { this.state.type=="Image Guess"?
                            <div className={this.state.overlayClass} >
                                {   this.state.licenseLoading? "...Loading"
                                    :
                                    <img onClick={this.toggleOverlay} className="image" src={this.state.license.thumbUrl} />
                                }
                                {   this.state.licenseLoading? null
                                    :
                                    this.state.showLicense? this.renderLicense() : <div className="license-links" onClick={this.showLicense.bind(this)}> > Show License Details</div>

                                }
                                <div className="close_button" onClick={this.toggleOverlay}>X</div>
                            </div>
                            :null
                        }
                        <div className="minigame_content" >
                            <Row className="minigame_head">
                                <Col md={1} />
                                <Col md={10} className="minigame_question">{this.state.question}</Col>
                                <Col md={1} />
                            </Row>
                            {
                                this.state.options.map((option, index) => (
                                    <Row className="minigame_options" between="md" key={index}>
                                        <Col xs={1} />
                                        <Col xs={this.state.type=="Sorting"?9:10} className="container_option">
                                            <MinigameOption result={this.state.options[index].result} id={index} onClick={((e) => this.onClickHandler(e))} active={this.state.options[index].active}>
                                                {this.state.options[index].text}
                                            </MinigameOption>
                                        </Col>
                                        {this.state.type=="Sorting"?
                                            <Col xs={1} className="container_option_number">
                                                {(this.state.answer.indexOf(this.state.options[index].text)+1)>0?<div className={"sorting_number"}><p>{this.state.answer.indexOf(this.state.options[index].text)+1}</p></div>:null}
                                            </Col>
                                            :
                                            null
                                        }
                                        {
                                            this.state.type=="Sorting"&& this.state.checked?
                                                    <Col xs={1} className="container_result_number">
                                                        <div className={"result_number"}><p>{this.state.correctAnswer.indexOf(this.state.options[index].text)+1}</p></div>
                                                    </Col>
                                                    :
                                                    <Col xs={1} />
                                        }
                                    </Row>
                                ))
                            }
                            <Row className="minigame_button" center="xs">
                                <Col md={1} />
                                {this.state.type=="Image Guess"?
                                    <Col xs={4} className="overlay_button">
                                        <Button disabled={this.state.checked} onClick={this.toggleOverlay}>Open Image</Button>
                                    </Col> : null
                                }
                                <Col xs={3}>
                                    <Button disabled={this.state.checked} onClick={this.validateOptions.bind(this)}>Send</Button>
                                </Col>
                                <Col xs={3}>
                                    <Button disabled={this.state.checked} onClick={this.resetMinigame}>Reset</Button>
                                </Col>
                                <Col md={1} />
                            </Row>
                        </div>
                    </div>
                }

            </>
        );
    }
}
