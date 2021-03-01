import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[] = []
  curQuestion: number = 1;
  userScore: number = 0;
  isQuizCompleted:boolean = false;
  constructor(private questionsService: QuestionsService, public userService: UserService ) { }

  ngOnInit(): void {
     this.questions = this.questionsService.getQuestions();
  }

  onNext(){
    if(this.curQuestion < this.questions.length){
      this.curQuestion = this.curQuestion + 1;      
    } else {
      this.curQuestion = this.curQuestion;
      this.isQuizCompleted = true;
      this.userService.updateScore(this.userScore);
    }
  }

  updateScore(data:any){
      if(data == true){
          this.userScore = this.userScore+1;
      }
  }
}
