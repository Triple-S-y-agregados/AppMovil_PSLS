import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SabiasquePageRoutingModule } from './sabiasque-routing.module';

import { SabiasquePage } from './sabiasque.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SabiasquePageRoutingModule
  ],
  declarations: [SabiasquePage]
})
export class SabiasquePageModule {}
