import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.isAuthenticated = LoginService.isAuthenticated();
      }
    });
  }

  ngOnInit() {
  }
}
