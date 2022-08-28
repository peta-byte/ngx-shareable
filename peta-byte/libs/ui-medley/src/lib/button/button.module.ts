import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ButtonPrimaryDirective } from './button-primary.directive';

@NgModule({
  declarations: [ButtonComponent, ButtonPrimaryDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ButtonPrimaryDirective
  ]
})
export class ButtonModule { }
