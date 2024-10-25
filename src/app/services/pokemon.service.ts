import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../models/pokemon';
import { POKEMON_TYPE_COLORS, PokemonDetailResponse } from '../models/pokemon-detail';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}?limit=150`);
  }

  getPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2]; 
  }

  getPokemonImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
 
  getOnePokemon(id: number): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(`${this.apiUrl}${id}`);
  }

  getColorForType(type: string): string {
    return POKEMON_TYPE_COLORS[type] || '#d3d3d3'; 
  }
}
