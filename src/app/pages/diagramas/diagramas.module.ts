import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiagramasPageRoutingModule } from './diagramas-routing.module';

import { DiagramasPage } from './diagramas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiagramasPageRoutingModule
  ],
  declarations: [DiagramasPage]
})
export class DiagramasPageModule {}
