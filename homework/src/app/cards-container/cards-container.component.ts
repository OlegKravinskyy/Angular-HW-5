import { Component, QueryList, ViewChildren } from '@angular/core';
import { CardBlockComponent } from '../card-block/card-block.component';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  color: string;
}

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css',
})
export class CardsContainerComponent {
  public products = [
    {
      id: 1,
      name: 'product 1',
      price: 110,
      description: 'product1 text description',
      color: 'red',
    },

    {
      id: 2,
      name: 'product 2',
      price: 120,
      description: 'product2 text description',
      color: 'green',
    },

    {
      id: 3,
      name: 'product 3',
      price: 130,
      description: 'product3 text description',
      color: 'gold',
    },
  ];

  selectedProducts?: Product;
  isDiscounted?: boolean = false;

  @ViewChildren(CardBlockComponent)
  cardBlockComponent!: QueryList<CardBlockComponent>;

  displayProductDetail(product: Product) {
    if (product) {
      this.selectedProducts = product;
    }
  }

  onApplyDiscount() {
    this.isDiscounted = true;
    console.log(this.cardBlockComponent.toArray());
  }
}
