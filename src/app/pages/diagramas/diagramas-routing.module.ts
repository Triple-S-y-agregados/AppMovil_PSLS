import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagramasPage } from './diagramas.page';

const routes: Routes = [
  {
    path: '',
    component: DiagramasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagramasPageRoutingModule {}
