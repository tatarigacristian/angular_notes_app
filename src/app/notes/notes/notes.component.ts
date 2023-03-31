import { Component } from '@angular/core';
import {availableColors, notes} from "./notes.map";
import {getNotesFromLocalStorage, selectColors} from "../../utils/app";
import {KeyValue} from "@angular/common";
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
}
