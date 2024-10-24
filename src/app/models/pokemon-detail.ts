export interface PokemonDetailResponse {
  game_indices: Index[]
  id: number
  name: string
  order: number
  sprites: Sprites
  types: Type[]
  weight: number
  typeColors?: PokemonTypeColors // Nuevo campo opcional para los colores de tipos
}

export interface Index {
  game_index: number
  version: Version
}

export interface Version {
  name: string
  url: string
}

export interface Type {
  slot: number
  type: Type2
}

export interface Type2 {
  name: string
  url: string
}

export interface Sprites {
  back_default: string
  front_default: string
  animated: {
    front_default: string;
    back_default: string;
  }
  "generation-v"?: {
    "black-white"?: {
      animated: {
        front_default: string;
        back_default: string;
        // Otros sprites si los necesitas
      };
    };
  };
}

export interface PokemonTypeColors {
  [key: string]: string;
}

export const POKEMON_TYPE_COLORS: PokemonTypeColors = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC'
};
