import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemListResponse } from '../models/item';
import { Observable } from 'rxjs';
import { ItemDetailResponse } from '../models/item-detail';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItemList(): Observable<ItemListResponse>{
    return this.http.get<ItemListResponse>('https://pokeapi.co/api/v2/item?limit=954');
  }

  getItemId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2]; 
  }

  getItemImage(nombre: string): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${nombre}.png`;
  }

  getOneItem(id: number): Observable<ItemDetailResponse> {
    return this.http.get<ItemDetailResponse>(`https://pokeapi.co/api/v2/item/${id}`);
  }

}
