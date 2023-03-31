import { Component } from '@angular/core';

@Component({
  selector: 'app-header-create',
  templateUrl: './header-create.component.html',
  styleUrls: ['./header-create.component.scss']
})
export class HeaderCreateComponent {
  viewPath = 'assets/icons/view.svg';
  savePath = 'assets/icons/save.svg';
  backPath = 'assets/icons/left.svg';
}
