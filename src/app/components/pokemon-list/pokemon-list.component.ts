import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  listaPokemon: (Pokemon & { id: number, imageUrl: string })[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(response => {
      this.listaPokemon = response.results.map((pokemon, index) => {
        const id = index + 1; // Calcula el ID del Pokémon basado en su posición en la lista
        const imageUrl = this.pokemonService.getPokemonImage(id); // Obtiene la URL de la imagen del servicio
        return { ...pokemon, id, imageUrl };
      });
    });
  }
}
