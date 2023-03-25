import { Component } from '@angular/core';
import {availableColors, notes} from "./notes.map";
import {selectColors} from "../../utils/app";
import {KeyValue} from "@angular/common";
import {Note} from "./notes.model";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  notes: Note[] = notes;
  colors: string[] = selectColors(notes.length, availableColors)
  getNoteColor(index: number){
    return this.colors[index];
  }
}
