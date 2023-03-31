import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Note, NoteClass} from "../../notes/notes/notes.model";
import {DialogOverviewComponent} from "../dialog-overview/dialog-overview.component";
import {DialogNoteComponent} from "../../dialog/dialog-note/dialog-note.component";
import {generateUniqueId} from "../../utils/app";

@Component({
  selector: 'app-fixed-button',
  templateUrl: './fixed-button.component.html',
  styleUrls: ['./fixed-button.component.scss']
})
export class FixedButtonComponent {
  @Input() iconPath!: string;

  note: Note = new NoteClass(generateUniqueId(), 'test', 'test');

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNoteComponent, {
      data: this.note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      console.log('The dialog was closed');
    });
  }

}
