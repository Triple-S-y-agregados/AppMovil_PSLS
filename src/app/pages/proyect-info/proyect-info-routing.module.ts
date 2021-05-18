import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectInfoPage } from './proyect-info.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectInfoPageRoutingModule {}
