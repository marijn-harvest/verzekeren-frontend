import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user = {username: '', password: '', voornaam: '', achternaam: ''};
  error = false;

  constructor(private userService: UserService, private loginService: LoginService, public router: Router) { }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe((response: any) => {
      if (response) {
        this.user = response;
      }
    });
  }

  editUser() {
    this.userService.editUser(this.user, (error) => {
      if (error) {
        this.error = true;
      } else {
        this.loginService.storeCredentials(this.user.username, this.user.password);
      }
    });
  }
}
