import { NgModule } from '@angular/core';
import { NoteComponent } from './note/note.component';
import { NotesComponent } from './notes/notes.component';
import {CommonModule} from "../common/common.module";
import {NgForOf, NgIf} from "@angular/common";



@NgModule({
  declarations: [
    NoteComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    NgForOf,
    NgIf,
  ],
  exports:[
    NotesComponent
  ]
})
export class NotesModule { }
