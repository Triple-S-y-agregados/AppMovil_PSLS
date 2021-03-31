import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosPageRoutingModule } from './datos-routing.module';

import { DatosPage } from './datos.page';
import { GraphingComponent } from 'src/app/components/graphing/graphing.component'
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosPageRoutingModule,
    ChartsModule
  ],
  declarations: [DatosPage, GraphingComponent]
})
export class DatosPageModule {}
