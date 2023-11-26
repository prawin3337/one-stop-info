import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PassbookComponent } from './passbook.component';
import { PassbookRoutingModule } from './passbook-routing.module';



@NgModule({
  declarations: [PassbookComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PassbookRoutingModule
  ]
})
export class PassbookModule { }
