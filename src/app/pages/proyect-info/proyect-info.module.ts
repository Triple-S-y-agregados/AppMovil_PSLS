import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProyectInfoPageRoutingModule } from './proyect-info-routing.module';

import { ProyectInfoPage } from './proyect-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProyectInfoPageRoutingModule
  ],
  declarations: [ProyectInfoPage]
})
export class ProyectInfoPageModule {}
