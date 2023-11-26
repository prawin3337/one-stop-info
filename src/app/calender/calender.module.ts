import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';

@NgModule({
  declarations: [CalenderComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CalenderRoutingModule
  ]
})
export class CalenderModule { }
