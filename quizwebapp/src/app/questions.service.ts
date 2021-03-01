import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

 public getQuestions(): Question[] {
    return [
    {
      quest:'What is the decorator used for creating a module in angular?',
      options:[
        '@NgModule', '@Component', '@Injectable', '@Directive'
      ],
      ans: '@NgModule'
    },
    {
      quest:'What is the decorator used for creating a component in angular?',
      options:[
        '@NgModule', '@Component', '@Injectable', '@Directive'
      ],
      ans: '@Component'
    },
    {
      quest:'What is the decorator used for creating a directive in angular?',
      options:[
        '@NgModule', '@Component', '@Injectable', '@Directive'
      ],
      ans: '@Directive'
    },
    {
      quest:'What is the decorator used for creating a service in angular?',
      options:[
        '@NgModule', '@Component', '@Injectable', '@Directive'
      ],
      ans: '@Injectable'
    },
    {
      quest: 'Router is part of which of the following module?',
      options: ['@angular/core', '@angular/router', '@angular/forms', '@angular/animations'],
      ans: '@angular/router'
    }]
  }
}
