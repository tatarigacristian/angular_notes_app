import { Component, Input } from '@angular/core';
import {ButtonType} from "./button.model";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() iconPath!: string;
  @Input() type: string = 'button';
}
