import { Injectable } from '@angular/core';
import { Goods } from '../goods.model';

@Injectable()

export class CollectionService {
  private collections: Goods[] = [
    {description: 'Milk', type: 'Food', price: 3},
    {description: 'Beer', type: 'Drink', price: 4},
    {description: 'Pants', type: 'Clothing', price: 20},
    {description: 'TV', type: 'Food', price: 300}
  ];
  private selected: Goods[] = [];

  getCols(): Goods[] {
    return this.collections;
  }

  getSelected(): Goods[] {
    return this.selected
  }

  addToSel(collection): void {
    this.selected.push(collection)
  }

  removeFromSel(i: number): void {
    this.selected.splice(i, 1);
  }

  addToCols(t, d, p) {
    this.collections.push({description: d, type: t, price: p});
  }
}
