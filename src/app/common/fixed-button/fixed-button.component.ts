import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-fixed-button',
  templateUrl: './fixed-button.component.html',
  styleUrls: ['./fixed-button.component.scss']
})
export class FixedButtonComponent {
  @Input() iconPath!: string;
}
