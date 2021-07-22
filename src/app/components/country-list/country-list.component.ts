import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/service/country.service';
import { Country } from 'src/model/country';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { getCountries, getCountry } from '../../ngrx/actions/country.actions';
import { CountryState } from 'src/app/ngrx/reducers/country-reducer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  displayedColumns: string[] = [
    'flag',
    'name',
    'population',
    'region',
    'capital',
    'borders',
  ];

  countrySource$: Observable<any> = this.store.select('countries');
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private _countryService: CountryService,
    private store: Store<CountryState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countrySource$.subscribe((data: Country[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.filterPredicate = function (
        data: any,
        filter: string
      ): boolean {
        return (
          data.name.toLowerCase().includes(filter) ||
          data.region.toLowerCase().includes(filter)
        );
      };
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onRowClicked(countryCode: any) {
    this.router.navigate([`./details/${countryCode.alpha3Code}`]);
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getContryDetails(countryCode: Event) {
    this.router.navigate([`./details/${countryCode}`]);
    this.store.dispatch(getCountry(countryCode));
  }
}
