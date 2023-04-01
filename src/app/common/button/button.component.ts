import { Component, Input } from '@angular/core';
import {ButtonType} from "./button.model";
import {Note} from "../../notes/notes/notes.model";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  onClick() {
    if (this.onClickInput) {
      this.onClickInput();
    }
  }
  @Input() iconPath!: string;
  @Input() type: string = 'button';
  @Input() onClickInput!: () => void | undefined;

}
