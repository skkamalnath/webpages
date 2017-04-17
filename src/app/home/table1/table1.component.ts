import { Component, OnInit } from '@angular/core';
import { Http } 	 from '@angular/http';

@Component({
  selector:'table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})


export class Table1Component implements OnInit {

    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.http.get('assets/data.json')
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }
  
}