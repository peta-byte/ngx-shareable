import { Component, ContentChild } from '@angular/core';
import { CardContentDirective } from './card-content.directive';
import { CardFooterDirective } from './card-footer.directive';
import { CardHeaderDirective } from './card-header.directive';

@Component({
  selector: 'peta-byte-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @ContentChild(CardHeaderDirective) header!: CardHeaderDirective;
  @ContentChild(CardContentDirective) content!: CardContentDirective;
  @ContentChild(CardFooterDirective) footer!: CardFooterDirective;
}
