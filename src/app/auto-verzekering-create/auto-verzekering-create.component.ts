import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { APIService } from  '../api.service';

@Component({
  selector: 'app-auto-verzekering-create',
  templateUrl: './auto-verzekering-create.component.html',
  styleUrls: ['./auto-verzekering-create.component.css']
})
export class AutoVerzekeringCreateComponent implements OnInit {
  autoVerzekering: any = {};

  constructor(private  apiService:  APIService) { }

  ngOnInit() {
  }

  public saveAutoVerzekering(form: NgForm) {
    this.apiService.createAutoVerzekering(form).subscribe(response => {
      console.log('test');
    });
  }
}
