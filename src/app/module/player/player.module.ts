import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import {PlayerCreateComponent} from '../../conponent/player-create/player-create.component';
import {PlayerEditComponent} from '../../conponent/player-edit/player-edit.component';
import {PlayerViewComponent} from '../../conponent/player-view/player-view.component';
import {PlayerListComponent} from '../../conponent/player-list/player-list.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [PlayerCreateComponent,
    PlayerEditComponent,
    PlayerViewComponent,
  PlayerListComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    ReactiveFormsModule
  ]
})
export class PlayerModule { }
