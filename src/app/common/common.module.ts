import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import {NgClass} from "@angular/common";
import { FixedButtonComponent } from './fixed-button/fixed-button.component';


@NgModule({
  declarations: [
    ButtonComponent,
    FixedButtonComponent
  ],
  imports: [
    NgClass
  ],
  exports: [
    ButtonComponent, FixedButtonComponent
  ]
})
export class CommonModule { }
