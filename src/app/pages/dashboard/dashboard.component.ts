import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
