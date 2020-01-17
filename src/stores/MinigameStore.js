import { observable, action } from 'mobx'

export default class MinigameStore {


    @observable minigameQuery;
    @observable minigameURL = "https://query.wikidata.org/sparql?query=";
    @observable minigameType;
    @observable minigameQuestion;
    @observable minigameOptions = [];
    @observable minigameAnswers = [];
    @observable isLoading = true;
    @observable error;
    @observable minigameRaw;

    @action async initializeMinigame(query, type, question){
        this.minigameQuery = query;
        if(query.length > 3500){

            this.minigameURL += encodeURIComponent(query.replace(/\s+/g,' ').trim());
        }else{

            this.minigameURL += encodeURIComponent(query.trim());
        }
        this.minigameType = type;
        this.minigameQuestion = question;
        this.minigameOptions = [];
        this.minigameAnswers = [];
        await this.recieveMinigame();
    }

    @action async recieveMinigame() {
        this.error = "";
        this.minigame = null;
        await fetch(this.minigameURL, {
            headers: {'Accept': 'application/sparql-results+json,*/*;q=0.9'}
        })
            .then(response => response.json())
            .then((data) => {
                this.minigameRaw = data.results.bindings;
                this.isLoading = false;
                this.processMinigameRaw();
            })
            .catch((error) => {
                this.error = error;
                this.isLoading = false;
            })
    }


    @action processMinigameRaw(){
        this.minigameQuestion = this.minigameQuestion.toString().replace("{0}", this.minigameRaw[0].question.value)
        if(this.minigameType == "Sorting"){
            for(let i = 0; i < this.minigameRaw.length; i++){
                this.minigameOptions.push(this.minigameRaw[i].answer.value)
                this.minigameAnswers.push(this.minigameRaw[i].answer.value)
            }
            this.minigameOptions = this.minigameOptions.sort(function(a, b){return 0.5 - Math.random()});
        }else if(this.minigameType == "Multiple Choice"){
            this.minigameAnswers.push(this.minigameRaw[0].answer.value)
            this.minigameOptions.push(this.minigameRaw[0].answer.value)
            for(let i = 1; i < this.minigameRaw.length; i++){
                this.minigameOptions.push(this.minigameRaw[i].answer.value)
            }
            this.minigameOptions = this.minigameOptions.sort(function(a, b){return 0.5 - Math.random()});
        }
    }
}
