import {Component, Input} from '@angular/core';
import {Note} from "../notes/notes.model";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  color: string = '#'+Math.floor(Math.random()*16777215).toString(16);
  @Input() note!: Note;
}
