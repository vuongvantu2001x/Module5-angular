import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../service/player.service';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.scss']
})
export class PlayerDeleteComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

}
