import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  totalPrice: number = 0;

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      'assets/shipping.json'
    );
  }

  getTotalPrice() {
    this.totalPrice = 0;
    for (let item of this.items) {
      this.totalPrice += item.price;
    }
    return this.totalPrice;
  }

  constructor(private http: HttpClient) {}
}
