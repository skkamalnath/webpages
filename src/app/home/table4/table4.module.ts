import { NgModule }      from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";

import { Table4Component }   from './table4.component';
import { DataFilterPipe }   from './data-filter.pipe';

@NgModule({
  imports:      [ 
    CommonModule, 
    DataTableModule, 
    FormsModule,
    HttpModule
  ],
  declarations: [ Table4Component, DataFilterPipe ],
  exports: [Table4Component]
})

export class Table4Module { }
