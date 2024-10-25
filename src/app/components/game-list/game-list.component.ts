import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent implements OnInit {
  listaJuegos: (Game & {id: number})[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGameList().subscribe(response => {
      this.listaJuegos = response.results.map((item, index) => {
        const id = index + 1;
        return { ...item, id };
      });
    });
  }
  
}
