import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AutoVerzekeringService } from  '../auto-verzekering.service';

@Component({
  selector: 'app-auto-verzekering-create',
  templateUrl: './auto-verzekering-create.component.html',
  styleUrls: ['./auto-verzekering-create.component.css']
})
export class AutoVerzekeringCreateComponent implements OnInit {
  autoVerzekering = {type: ''};
  submitMessage = 'Vraag auto verzekering aan';
  success = false;

  constructor(private autoVerzekeringService: AutoVerzekeringService) { }

  ngOnInit() {
    this.autoVerzekeringService.getMyAutoVerzekering().subscribe(response => {
      if(response) {
        this.autoVerzekering.type = response.type;
        this.submitMessage = 'Wijzig auto verzekering';
      }
    });
  }

  public saveAutoVerzekering(form: NgForm) {
    this.autoVerzekeringService.saveAutoVerzekering(form).subscribe(response => {
      this.submitMessage = 'Wijzig auto verzekering';
      this.success = true;
    });
  }
}
