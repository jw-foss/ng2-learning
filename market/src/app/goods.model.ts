export class Goods {
  description: string;
  type: string;
  price: number;
  constructor(description: string, type: string, price: number) {
    this.description = description;
    this.type = type;
    this.price = price;
  }
}

