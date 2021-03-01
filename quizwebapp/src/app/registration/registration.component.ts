import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: any = {};

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {

  }

  onRegistration(eventData: any) {
    if(this.user.name && this.user.email && this.user.phoneNumber){
        this.user.Id = Math.max(...this.userService.getUsers().map(it=>it.id))+1;
        this.userService.registerUser(this.user);
        this.router.navigate(['login']);
    }
  }
} 
