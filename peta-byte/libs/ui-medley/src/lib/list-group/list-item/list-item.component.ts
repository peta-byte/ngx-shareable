import { Component, HostListener, Input } from '@angular/core';
import { ListItem } from '../../../interfaces/list-group.interface';

@Component({
  selector: 'peta-byte-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input()data!: ListItem;
  click = false;

  @HostListener('click', ['$event'])
  clicked(event: MouseEvent | PointerEvent) {
    this.click = !this.click;
    const elem = <Element>event.target;
    if (elem.classList.contains('bi-caret-right') || elem.classList.contains('bi-caret-down')) {
      if (this.click) {
        elem.classList.remove('bi-caret-down');
        elem.classList.add('bi-caret-right');
      } else {
        elem.classList.remove('bi-caret-right');
        elem.classList.add('bi-caret-down');
      }
    }
    event.stopPropagation();
  }
}
