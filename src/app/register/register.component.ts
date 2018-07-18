import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {username: '', password: '', voornaam: '', achternaam: ''};
  error = false;
  
  constructor(private userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  register() {    
    this.userService.register(this.user, (error) => {
      if(!error) {
        this.router.navigate(['login']);
      } else {
        this.error = true;
      }
    });
  }
}
