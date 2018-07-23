import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user = {username: '', password: '', voornaam: '', achternaam: ''};
  error = false;

  constructor(private userService: UserService, public router: Router) { }

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
      }
    });
  }
}
