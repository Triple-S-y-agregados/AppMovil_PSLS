import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrosPageRoutingModule } from './registros-routing.module';

import { RegistrosPage } from './registros.page';
import { GraphingComponent } from 'src/app/components/graphing/graphing.component'
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrosPageRoutingModule,
    ChartsModule
  ],
  declarations: [RegistrosPage, GraphingComponent]
})
export class RegistrosPageModule {}
