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
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const materials = [
  MatIconModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatCardModule,
  MatProgressBarModule,
  MatGridListModule,
  MatTabsModule,
  MatDividerModule,
  MatMenuModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,

]

@NgModule({
  imports: [materials],
  exports: [materials]

})
export class MaterialModule { }
