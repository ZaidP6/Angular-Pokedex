export interface GameResponse {
    id: number
    name: string
    abilities: any[]
    main_region: MainRegion
    moves: Mfe[]
    names: Name[]
    pokemon_species: PokemonSpecy[]
    types: Type[]
    version_groups: VersionGroup[]
  }
  
  export interface MainRegion {
    name: string
    url: string
  }
  
  export interface Mfe {
    name: string
    url: string
  }
  
  export interface Name {
    name: string
    language: Language
  }
  
  export interface Language {
    name: string
    url: string
  }
  
  export interface PokemonSpecy {
    name: string
    url: string
  }
  
  export interface Type {
    name: string
    url: string
  }
  
  export interface VersionGroup {
    name: string
    url: string
  }
  