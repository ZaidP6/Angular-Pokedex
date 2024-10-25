import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  listaItems: (Item & {id: number, imgUrl: string})[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItemList().subscribe(response => {
      this.listaItems = response.results.map((item, index) => {
        const id = index + 1;
        const imgUrl = this.itemService.getItemImage(item.name);
        return { ...item, id, imgUrl };
      });
    });
  }
}
