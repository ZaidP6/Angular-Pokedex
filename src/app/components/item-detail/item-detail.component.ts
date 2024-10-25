import { Component, OnInit } from '@angular/core';
import { ItemDetailResponse } from '../../models/item-detail';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent implements OnInit {

  item: ItemDetailResponse | undefined; // Variable para almacenar el detalle del item
  itemId: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');

    if(this.itemId){
      this.itemService.getOneItem(parseInt(this.itemId)).subscribe(response => {
        this.item = response;
        console.log(this.item);
      });
    }
  }

  getItemImage(nombre: string): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${nombre}.png`;
  }

}
