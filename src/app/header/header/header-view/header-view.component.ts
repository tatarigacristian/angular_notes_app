import { Component } from '@angular/core';
import {Note} from "../../../notes/notes/notes.model";
import {ActivatedRoute, Router} from "@angular/router";
import {findNoteById} from "../../../utils/app";

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.scss']
})
export class HeaderViewComponent {
  editPath = 'assets/icons/edit.svg';
  backPath = 'assets/icons/left.svg';

  note: Note|null = null;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.note = findNoteById(id);
    });
  }
}
