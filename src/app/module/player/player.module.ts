import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import {PlayerCreateComponent} from '../../conponent/player-create/player-create.component';
import {PlayerEditComponent} from '../../conponent/player-edit/player-edit.component';
import {PlayerViewComponent} from '../../conponent/player-view/player-view.component';
import {PlayerDeleteComponent} from '../../conponent/player-delete/player-delete.component';


@NgModule({
  declarations: [PlayerCreateComponent,
    PlayerEditComponent,
    PlayerViewComponent,
    PlayerDeleteComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule
  ]
})
export class PlayerModule { }
