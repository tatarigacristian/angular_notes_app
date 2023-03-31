import {Component, Input, SimpleChanges} from '@angular/core';
import {availableColors, notes} from "./notes.map";
import {filterNotesByTitleOrDescription, getNotesFromLocalStorage, selectColors} from "../../utils/app";
import {Note} from "./notes.model";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  notes: Note[] = getNotesFromLocalStorage();
  colors: string[] = selectColors(notes.length, availableColors)
  getNoteColor(index: number){
    return this.colors[index];
  }
  onNoteDeleted(){
    this.notes = getNotesFromLocalStorage();
  }

  ngOnChanges(changes: SimpleChanges) {
    const searchValue = changes['searchValue'].currentValue;
    this.notes = filterNotesByTitleOrDescription(this.notes, searchValue);


  }


  @Input() searchValue: string|null = null;
}
