import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: '[petaByteCardHeader]'
})
export class CardHeaderDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
