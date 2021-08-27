import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PlayerService} from '../../service/player.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.scss']
})
export class PlayerCreateComponent implements OnInit {
// @ts-ignore
  playerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    champ: new FormControl(),
    kda: new FormControl(),
    des: new FormControl(),
  });
  constructor(private playerService: PlayerService,
              private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  submit() {
    const player = this.playerForm.value;
    this.playerService.savePlayer(player).subscribe(() => {
      this.playerForm.reset();
      alert('Tạo thành công');
      this.router.navigate(['/players']);
    }, e => {
      console.log(e);
    });
  }
}
