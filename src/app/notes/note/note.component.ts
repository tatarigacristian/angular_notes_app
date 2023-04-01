import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Note} from "../notes/notes.model";
import {deleteNoteFromLocalStorage, findNoteById} from "../../utils/app";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {
  constructor(private router: Router) {}

  isDeleteMode = false;
  deletePath = 'assets/icons/remove.svg';

  onDelete(){
    const noteFromLocalStorage = findNoteById(this.note.id);
    if(noteFromLocalStorage){
      deleteNoteFromLocalStorage(noteFromLocalStorage)
      this.noteDeleted.emit();
    }
  }

  redirectToNotes(){
    this.router.navigate(['notes']).then(r => console.log(r));
  }

  redirectToNote(){
    this.router.navigate(['notes', this.note.id, 'view']).then(r => console.log(r));
  }

  onClick(){
    this.redirectToNote();
  }

  onHover(status: boolean){
    this.isDeleteMode = status;
  }
  @Input() note!: Note;
  @Input() color!: string;
  @Output() noteDeleted = new EventEmitter();
}
