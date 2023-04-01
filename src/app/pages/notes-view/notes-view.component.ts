import { Component } from '@angular/core';
import {Note} from "../../notes/notes/notes.model";
import {ActivatedRoute, Router} from "@angular/router";
import {findNoteById} from "../../utils/app";

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.scss']
})
export class NotesViewComponent {

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
