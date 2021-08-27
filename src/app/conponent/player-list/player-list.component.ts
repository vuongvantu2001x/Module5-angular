import {Component, OnInit} from '@angular/core';
import {Player} from '../../model/player';
import {PlayerService} from '../../service/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    this.playerService.getAll().subscribe(result => {
      this.players = result;
      console.log(result);
    });
  }
}
