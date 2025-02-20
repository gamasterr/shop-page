import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-link-tree',
  imports: [],
  templateUrl: './link-tree.component.html',
  styleUrl: './link-tree.component.css'
})
export class LinkTreeComponent {
  @Input() link: string = ''
  @Input() page_name: string = ''
}
