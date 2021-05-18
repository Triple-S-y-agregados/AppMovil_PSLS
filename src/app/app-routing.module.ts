import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },  {
    path: 'galeria',
    loadChildren: () => import('./pages/galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'sabiasque',
    loadChildren: () => import('./pages/sabiasque/sabiasque.module').then( m => m.SabiasquePageModule)
  },
  {
    path: 'materiales',
    loadChildren: () => import('./pages/materiales/materiales.module').then( m => m.MaterialesPageModule)
  },
  {
    path: 'proyect-info',
    loadChildren: () => import('./pages/proyect-info/proyect-info.module').then( m => m.ProyectInfoPageModule)
  },
  {
    path: 'diagramas',
    loadChildren: () => import('./pages/diagramas/diagramas.module').then( m => m.DiagramasPageModule)
  },
  {
    path: 'imagen',
    loadChildren: () => import('./pages/imagen/imagen.module').then( m => m.ImagenPageModule)
  },
  {
    path: 'equipo',
    loadChildren: () => import('./pages/equipo/equipo.module').then( m => m.EquipoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
