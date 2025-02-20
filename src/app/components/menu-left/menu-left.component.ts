import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-left',
  imports: [],
  templateUrl: './menu-left.component.html',
  styleUrl: './menu-left.component.css'
})
export class MenuLeftComponent {
  @Input() item_name: string = '';
  @Input() child: boolean = false;
}
