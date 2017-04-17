import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";

import { Table2Component }   from './table2.component';
import { DataFilterPipe }   from './data-filter.pipe';

@NgModule({
  imports:      [ 
    CommonModule, 
    DataTableModule, 
    FormsModule,
    HttpModule
  ],
  declarations: [ Table2Component, DataFilterPipe ],
  exports: [Table2Component]
})

export class Table2Module { }
