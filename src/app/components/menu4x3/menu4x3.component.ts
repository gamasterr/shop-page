import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu4x3',
  imports: [],
  templateUrl: './menu4x3.component.html',
  styleUrl: './menu4x3.component.css'
})
export class Menu4x3Component {
  @Input() color: string = '';
  @Input() color_code: string = ''

  colorCode: string = '#FF5733';  // Mã màu từ TypeScript

  ngOnInit() {
    document.documentElement.style.setProperty('--dynamic-color', this.colorCode);
  }
}
