import { Component, OnInit } from '@angular/core';
import { PokemonDetailResponse } from '../../models/pokemon-detail';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { POKEMON_TYPE_COLORS } from '../../models/pokemon-detail';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'] // Corregido a 'styleUrls' en plural
})
export class PokemonDetailComponent implements OnInit {

  pokemon: PokemonDetailResponse | undefined; // Variable para almacenar el detalle del Pokémon
  pokemonId: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.paramMap.get('id');

    if (this.pokemonId) {

      this.pokemonService.getOnePokemon(parseInt(this.pokemonId)).subscribe(response => {
        this.pokemon = response;
        console.log(this.pokemon);
      });
    }
  }

  getPokemonImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  getColorForType(type: string): string {
    return POKEMON_TYPE_COLORS[type] || '#ffffff';
}

}
