import { Component, Input } from '@angular/core';
import { MenuConfig } from '../../interfaces/menu-bar.interface';

@Component({
  selector: 'peta-byte-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
  @Input() menuConfig!: MenuConfig;
}
