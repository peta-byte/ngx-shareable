import { Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ListItem } from '../../interfaces/list-group.interface';

@Component({
  selector: 'peta-byte-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss']
})
export class ListGroupComponent implements OnChanges {
  @Input() header?: string = 'List Group Title';
  @Input() listData: ListItem[] = [];
  @Input() display = false;
  @Output() hide: EventEmitter<boolean> = new EventEmitter();

  @HostBinding('style.width') private width: string | number = 'fit-content';

  @HostBinding('style.display') private visible = 'flex';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['display']?.currentValue !== changes?.['display']?.previousValue) {
      this.width = this.display ? 'fit-content' : 0;
      this.visible = this.display ? 'flex' : 'none';
    }
  }

  close() {
    this.hide.emit(true);
  }
}
