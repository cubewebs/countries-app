import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {OrderListModule} from 'primeng/orderlist';



@NgModule({
  declarations: [],
  imports: [
    MenubarModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    OrderListModule,
    TableModule,
  ]
})
export class PrimengModule { }
