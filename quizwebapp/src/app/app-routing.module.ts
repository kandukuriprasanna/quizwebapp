import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "quiz",
    component: QuizComponent
  },
  {
    path:"registration",
    component: RegistrationComponent
  },
  {
    path:"leaderboard",
    component: LeaderBoardComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
