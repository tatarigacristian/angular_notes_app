import { Component } from '@angular/core';
import {notes} from "./notes.map";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  notes = notes;
}
