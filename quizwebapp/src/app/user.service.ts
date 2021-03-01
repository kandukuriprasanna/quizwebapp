import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedInUser:any = 0;
  users: User[] = [
    {
      id:1,
      name: 'demouser1',
      email: 'demouser1@quiz.com',
      phoneNumber: 1234556789,
      pincode: 123456,
      password: "111111",
      userScore: 3
    },
    {
      id:2,
      name: 'demouser2',
      email: 'demouser2@quiz.com',
      phoneNumber: 2345567891,
      pincode: 123456,
      password: "22222",
      userScore: 2
    },
  ];

  constructor() {

  }

  registerUser(user: User){
      this.users.push(user);
  }

  getUsers(): User[]{
    return this.users;
  }

  findUser(email: string, password: string) {
    return this.users.find(it=>it.email === email && it.password === password);
  }

  setLogedInUser(user: User){
    this.loggedInUser = user;
  }

  
  getLogedInUser(){
    return this.loggedInUser;
  }

  updateScore(userScore: number) {
      if(this.loggedInUser) {
        let userIndex = this.users.findIndex(item=>item.id == this.loggedInUser.id);
        if(userIndex >= 0) {
          this.users[userIndex].userScore = userScore;
        }
      }
  }
}
