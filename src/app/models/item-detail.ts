export interface ItemDetailResponse {
    attributes: Attribute[]
    category: Category
    cost: number
    game_indices: Index[]
    id: number
    name: string
    sprites: Sprites
  }
  
  export interface Attribute {
    name: string
    url: string
  }
  
  export interface Category {
    name: string
    url: string
  }
  
  export interface Index {
    game_index: number
    generation: Generation
  }
  
  export interface Generation {
    name: string
    url: string
  }
  
  export interface Sprites {
    default: string
  }