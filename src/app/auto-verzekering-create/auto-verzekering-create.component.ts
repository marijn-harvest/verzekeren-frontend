import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AutoVerzekeringService } from  '../auto-verzekering.service';

@Component({
  selector: 'app-auto-verzekering-create',
  templateUrl: './auto-verzekering-create.component.html',
  styleUrls: ['./auto-verzekering-create.component.css']
})
export class AutoVerzekeringCreateComponent implements OnInit {
  autoVerzekering: any = {};

  constructor(private autoVerzekeringService: AutoVerzekeringService) { }

  ngOnInit() {
  }

  public saveAutoVerzekering(form: NgForm) {
    this.autoVerzekeringService.createAutoVerzekering(form).subscribe(response => {
      console.log('test');
    });
  }
}
