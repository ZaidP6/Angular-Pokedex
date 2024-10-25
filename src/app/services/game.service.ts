import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameListResponse } from '../models/game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGameList(): Observable<GameListResponse>{
    return this.http.get<GameListResponse>('https://pokeapi.co/api/v2/version?limit=20');
  }

  getItemId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2]; 
  }

}
