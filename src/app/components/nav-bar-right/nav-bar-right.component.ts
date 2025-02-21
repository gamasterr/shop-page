import {Component, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {MatBadge} from '@angular/material/badge';

@Component({
  selector: 'app-nav-bar-right',
  imports: [
    MatIcon,
    RouterLink,
    MatBadge
  ],
  templateUrl: './nav-bar-right.component.html',
  styleUrl: './nav-bar-right.component.css'
})
export class NavBarRightComponent {
  @Input() item_name: string = '';
  @Input() router: string = '';
  @Input() child: boolean = false;

  @Input() itemInCart: number = 0

}
