import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { NotesComponent } from './notes/notes.component';



@NgModule({
  declarations: [
    NoteComponent,
    NotesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NotesComponent
  ]
})
export class NotesModule { }
