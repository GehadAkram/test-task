import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';


const materials = [
  MatIconModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatCardModule,
  MatProgressBarModule,
  MatGridListModule,
  MatTabsModule
]

@NgModule({
  imports: [materials],
  exports: [materials]

})
export class MaterialModule { }
