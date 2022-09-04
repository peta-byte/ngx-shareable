import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderDirective } from './card-header.directive';
import { CardContentDirective } from './card-content.directive';
import { CardFooterDirective } from './card-footer.directive';


@NgModule({
  declarations: [CardComponent, CardHeaderDirective, CardContentDirective, CardFooterDirective],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, CardHeaderDirective, CardContentDirective, CardFooterDirective]
})
export class CardModule { }
