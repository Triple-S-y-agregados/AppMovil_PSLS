import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SabiasquePage } from './sabiasque.page';

const routes: Routes = [
  {
    path: '',
    component: SabiasquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SabiasquePageRoutingModule {}
