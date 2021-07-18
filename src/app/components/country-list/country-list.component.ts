import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/service/country.service';
import { Country } from 'src/domain/country';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})



export class CountryListComponent implements OnInit {
  displayedColumns: string[] = [ 'flag','name'];
  
  dataSource:any;

  constructor(private _http:CountryService) {
    
   }

  ngOnInit(): void {
    this._http.getCountry().subscribe( {
      next: (data)=>{ this.dataSource = new MatTableDataSource(data);}
     
    })
 }

 onRowClicked(row:any){
   console.log(row)
 }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
