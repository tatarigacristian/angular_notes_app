import { Component } from '@angular/core';
import {filterNotesByTitleOrDescription, getNotesFromLocalStorage} from "../../utils/app";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {
  plusPath = 'assets/icons/plus.svg';

  searchValue: string|null = null;

  setSearchValue(value: string){
    this.searchValue = value;
  }

}
