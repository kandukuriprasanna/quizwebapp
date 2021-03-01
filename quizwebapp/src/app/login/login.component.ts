import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  loggedInUser: any;

  constructor(private userService: UserService, private router: Router) {
    this.user ={};
  }

  ngOnInit(): void {
    
  }

  onLogIn() {
    if(this.user.email && this.user.password) {
      this.loggedInUser = this.userService.findUser(this.user.email, this.user.password);
      if(this.loggedInUser) {
        this.userService.setLogedInUser(this.loggedInUser);
        this.router.navigate(['quiz']);
      }
    }
  }
}
