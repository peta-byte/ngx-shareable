import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: '[petaByteCardContent]'
})
export class CardContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
