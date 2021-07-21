import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/service/country.service';
import { Country } from 'src/domain/country';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
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

  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _http: CountryService) {
    this.dataSource={}
  }

  ngOnInit(): void {
    this._http.getCountry().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.filterPredicate = function(data:any, filter: string): boolean {
          return data.name.toLowerCase().includes(filter) || data.region.toLowerCase().includes(filter)
        };
      },
    });
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
  }

  onRowClicked(row: any) {
    console.log(row);
  }

  applyFilter(event: Event) {
    console.log(event);
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }

  getContryDetails(event: Event){
   
    console.log(event);
  }

}
