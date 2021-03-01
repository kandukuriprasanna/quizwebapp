import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Form } from '@angular/forms';
import { Question } from '../question';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Output() answer = new EventEmitter<boolean>();

  selectedOption: any;
  backgroundColor: string = '';
  questionForm: any;
  constructor() {
    this.question = {
      quest: '',
      options:[],
      ans: ''
    };
   }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges){
      if(changes.question){
         this.selectedOption = undefined;
      }
  }

  onOptionSelect(){
    if(this.question.ans == this.selectedOption){
        //currect ans
        this.answer.emit(true);
    } else {
      //wrong ans
        this.answer.emit(false);      
    }
  }

  getBackGroundColor(option: string){
        //apply the colors only after ans selection
    if(this.selectedOption){
        if(option == this.question.ans) {
          return 'green';
        } else if(option == this.selectedOption && option != this.question.ans) {
          return 'red';
        } else {
          return '';
        }
    } else {
      return '';
    }
  }

}
