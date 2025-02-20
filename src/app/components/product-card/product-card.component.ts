import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() comment: string = "";
  @Input() price: number = 0;
  @Input() status: string = "";
}
