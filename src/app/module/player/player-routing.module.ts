import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayerListComponent} from '../../conponent/player-list/player-list.component';
import {PlayerCreateComponent} from '../../conponent/player-create/player-create.component';
import {PlayerEditComponent} from '../../conponent/player-edit/player-edit.component';
import {PlayerDeleteComponent} from '../../conponent/player-delete/player-delete.component';
import {PlayerViewComponent} from '../../conponent/player-view/player-view.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerListComponent
  },
  {
    path: 'create',
    component: PlayerCreateComponent
  },
  {
    path: 'edit/:id',
    component: PlayerEditComponent
  },
  {
    path: 'delete/:id',
    component: PlayerDeleteComponent
  },
  {
    path: 'view/:id',
    component: PlayerViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }
