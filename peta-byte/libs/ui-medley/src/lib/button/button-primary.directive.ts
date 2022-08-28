import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[petaByteButtonPrimary]'
})
export class ButtonPrimaryDirective {
  @HostBinding('class.primary-button') get isPrimaryBtn() {
    return true;
  }
}
