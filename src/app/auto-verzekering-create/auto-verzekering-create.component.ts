import { Component, OnInit } from '@angular/core';
import { APIService } from  '../api.service';

@Component({
  selector: 'app-auto-verzekering-create',
  templateUrl: './auto-verzekering-create.component.html',
  styleUrls: ['./auto-verzekering-create.component.css']
})
export class AutoVerzekeringCreateComponent implements OnInit {

  constructor(private  apiService:  APIService) { }

  ngOnInit() {
  }

  public createAutoVerzekering() {
    var autoVerzekering  = {
      voornaam: "Marijn",
      achternaam: "Grimberg",
      type: 'WA'
    };
  
    this.apiService.createAutoVerzekering(autoVerzekering).subscribe(response => {
      console.log('test');
    });
  }
}
