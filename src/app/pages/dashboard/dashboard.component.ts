import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCountries} from '../../ngrx/actions/country.actions'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.store.dispatch(getCountries())
  }

}
