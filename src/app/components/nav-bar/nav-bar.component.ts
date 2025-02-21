import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Input() item_name: string = '';
  @Input() router: string = '';
  @Input() child: boolean = false;
}


