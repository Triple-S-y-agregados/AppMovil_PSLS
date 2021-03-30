import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'Inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'Configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'Analisis',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'Proyecto',
    loadChildren: () => import('./informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'Registros',
    loadChildren: () => import('./registros/registros.module').then( m => m.RegistrosPageModule)
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
