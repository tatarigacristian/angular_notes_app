import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { NotesModule } from './notes/notes.module';
import {CommonModule} from "./common/common.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { DialogNoteComponent } from './dialog/dialog-note/dialog-note.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogNoteComponent,
  ],
    imports: [
        BrowserModule,
        HeaderModule,
        NotesModule,
        CommonModule,
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
