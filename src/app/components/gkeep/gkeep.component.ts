import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gkeep',
  templateUrl: './gkeep.component.html',
  styleUrls: ['./gkeep.component.css']
})
export class GkeepComponent implements OnInit {
  card:Card;
  toDoList:string[];
  isList:boolean = false;
  isCard:boolean = false;
  cardList:string[];

  constructor() {
    console.log('constructor ran..');

  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.card = {
      title:[],
      note:'quiero comprar algunas cosas el dia de mañana'
    }
    this.toDoList = [];
    this.cardList = [];
  }
  onClick(){

  }
  addCardTitle(cardtitle){
  	console.log(cardtitle);
    this.card.title.unshift(cardtitle);
    return false;
  }
  addToDo(todo){
    console.log(todo);
    this.toDoList.unshift(todo);
    return false;
  }
  deleteToDo(i){
    this.toDoList.splice(i, 1);
  }
  toggleList(){
    this.isList = !this.isList;
  }
  createCardList(cardlist){
    console.log(cardlist);
    this.cardList.unshift(cardlist);
    return false;
  }
  deleteCardList(i){
    this.cardList.splice(i, 1);
  }
}

interface Card{
	title:string[],
	note:string
}

