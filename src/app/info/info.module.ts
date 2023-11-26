import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [InfoComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
