import { HomeViewComponent } from './views/home-view/home-view.component';
import { HomeViewModule } from './views/home-view/home-view.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./views/home-view/home-view.module').then(m => m.HomeViewModule)
      },
      {
        path: 'deleted',
        loadChildren: () => import('./views/deleted-view/deleted-view.module').then(m => m.DeletedViewModule)
      },
      {
        path: 'favorite',
        loadChildren: () => import('./views/favorite-view/favorite-view.module').then(m => m.FavoriteViewModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
