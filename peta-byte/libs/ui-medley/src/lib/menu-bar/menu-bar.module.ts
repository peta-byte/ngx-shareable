import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MenuBarComponent } from "./menu-bar.component";

@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuBarComponent
  ]
})
export class MenuBarModule { }
