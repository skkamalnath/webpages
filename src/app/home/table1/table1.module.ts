import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";

import { Table1Component }   from './table1.component';
import { DataFilterPipe }   from './data-filter.pipe';

@NgModule({
  imports:      [ 
    CommonModule, 
    DataTableModule, 
    FormsModule,
    HttpModule
  ],
  declarations: [ Table1Component, DataFilterPipe ],
  exports: [Table1Component]
})

export class Table1Module { }
