import { Component, Input } from '@angular/core';

@Component({
  selector: 'peta-byte-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText!: string;
}
