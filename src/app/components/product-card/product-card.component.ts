import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton} from '@angular/material/button';
@Component({
  selector: 'app-product-card',
  imports: [MatButton,],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() comment: string = "";
  @Input() price: number = 0;
  @Input() status: string = "";

  @Output() onAddToCart = new EventEmitter<any>()

  addToCart(){
    console.log(`nam add to cart ${this.title}`)
    this.onAddToCart.emit(`adding ${this.title}`)
  }
}
