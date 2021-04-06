import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrosPageRoutingModule } from './registros-routing.module';

import { RegistrosPage } from './registros.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrosPageRoutingModule,
    ChartsModule
  ],
  declarations: [RegistrosPage]
})
export class RegistrosPageModule {}
