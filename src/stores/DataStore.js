import { observable, action } from 'mobx'
import config from '../config'

export default class DataStore {

    @observable filteredCategorie = null;
    @observable filteredType = null;


	@action initialise(){
        this.stats.stats.push({number:"Loading", title:"Question templates", icon:"question"})
        this.stats.stats.push({number:"Loading", title:"Different categories", icon:"categories"})
        this.stats.stats.push({number:"Loading", title:"Matches played", icon:"matches"})
        this.stats.stats.push({number:"Loading", title:"Minigames played", icon:"minigames"})
    }

	@observable stats = {
		isLoading : true,
		error: "",
		stats: []
	};

  @observable responsePost = "";

  @action async sendQuery(data){

    let bodyData ={
      "sparqlQuery": data.query,
      "taskDescription": data.task,
      "category": {
        "id": data.categorie,
        "title": data.categorieTitle
      },
        "miniGameType": data.type,
      };

    fetch(config.API_URL + `/api/Platform/Question`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(bodyData)
    })
      .then(response => response.text())
      .then((data) => {
          this.responsePost = data;
      })
      .catch((error) =>{
          this.responsePost = error;
      })
    }

    @action async fetchStats(){
        fetch(config.API_URL + `/api/Platform/Stats`)
            .then(response => response.json())
            .then((data) => {
            		this.stats.stats[0].number = data.numberOfQuestions;
            		this.stats.stats[1].number = data.numberOfCategories;
            		this.stats.stats[2].number = data.numberOfGamesPlayed;
            		this.stats.stats[3].number = data.numberOfMinigames;
            })
            .catch((error) =>{
                this.stats.isLoading = false;
                this.stats.error = error;
            })
    }

    @observable questions = {
        isLoading : true,
        error: "",
        questions: ""
    };

    @action async fetchQuestions(){
        fetch(config.API_URL + `/api/Platform/Question`)
            .then(response => response.json())
            .then((data) => {
                  //Filter out questions that are not approved yet
                  data = data.filter(d => d.status > 0)
                    this.questions.questions = data;
                    this.questions.isLoading = false;
                    this.questions.error = "None";
            })
            .catch((error) =>{
                this.questions.isLoading = true;
                this.questions.error = error;
            })
    }

    @observable categories = {
        isLoading : true,
        error: "",
        categories: ""
    };

    @action async fetchCategories(){
        fetch(config.API_URL + `/api/Platform/Category`)
            .then(response => response.json())
            .then((data) => {
                    this.categories.categories = data;
                    this.categories.isLoading = false;
                    this.categories.error = "None";
            })
            .catch((error) =>{
                this.categories.isLoading = false;
                this.categories.error = error;
            })
    }

    @action async fetchData(){
    	this.initialise();
    	this.fetchStats();
    	this.fetchQuestions();
    	this.fetchCategories();
	}
}
