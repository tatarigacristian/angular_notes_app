import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../common/dialog-example/dialog-example.component";
import {NoteClass} from "../../notes/notes/notes.model";

@Component({
  selector: 'app-dialog-note',
  templateUrl: './dialog-note.component.html',
  styleUrls: ['./dialog-note.component.scss']
})
// implements on init
export class DialogNoteComponent implements OnInit{
  constructor(
      public dialogRef: MatDialogRef<DialogNoteComponent>,
      @Inject(MAT_DIALOG_DATA) public data: NoteClass,


  ) {}


    ngOnInit(): void {
        console.log(this.data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
