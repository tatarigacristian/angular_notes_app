import {Component, Input} from '@angular/core';
import {Note} from "../../../notes/notes/notes.model";

@Component({
  selector: 'app-header-create',
  templateUrl: './header-create.component.html',
  styleUrls: ['./header-create.component.scss']
})
export class HeaderCreateComponent {
  viewPath = 'assets/icons/view.svg';
  savePath = 'assets/icons/save.svg';
  backPath = 'assets/icons/left.svg';

  //let component receive a function property that will be called when the button is clicked
  @Input() onPreview!: () => void | undefined;

}
