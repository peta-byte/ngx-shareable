import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: '[petaByteCardFooter]'
})
export class CardFooterDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
