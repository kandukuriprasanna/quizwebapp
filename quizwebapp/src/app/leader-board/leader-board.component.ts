import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {
  users: User[] =[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.users = this.userService.getUsers().sort((cur, pre)=>{return (pre.userScore-cur.userScore)});
  }
}
