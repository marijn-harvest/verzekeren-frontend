import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AutoVerzekeringService } from  './auto-verzekering.service';

@Component({
  selector: 'app-auto-verzekering-save',
  templateUrl: './auto-verzekering-save.component.html',
  styleUrls: ['./auto-verzekering-save.component.css']
})
export class AutoVerzekeringSaveComponent implements OnInit {
  autoVerzekering = {type: ''};
  submitMessage = 'Vraag auto verzekering aan';
  success = false;

  constructor(private autoVerzekeringService: AutoVerzekeringService) { }

  ngOnInit() {
    this.autoVerzekeringService.getMyAutoVerzekering().subscribe((response: any) => {
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
