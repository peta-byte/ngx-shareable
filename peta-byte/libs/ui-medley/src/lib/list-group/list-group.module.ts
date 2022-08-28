import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGroupComponent } from './list-group.component';
import { ListItemComponent } from './list-item/list-item.component';



@NgModule({
  declarations: [
    ListGroupComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListGroupComponent
  ]
})
export class ListGroupModule { }
