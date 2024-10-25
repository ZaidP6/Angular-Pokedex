import { Component, OnInit } from '@angular/core';
import { GameDetailResponse } from '../../models/game-detail';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.css'
})
export class GameDetailComponent implements OnInit {
  game: GameDetailResponse | undefined;
  gameId: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('id');
    if(this.gameId){
      this.gameService.getOneGame(parseInt(this.gameId)).subscribe(response => {
        this.game = response;
        console.log(this.game);
      });
    }
  }

}
