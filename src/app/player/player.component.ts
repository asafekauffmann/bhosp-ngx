import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player-' number + '.css']
})
export class PlayerComponent implements OnInit {

   @Input() number: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
