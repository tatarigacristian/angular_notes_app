import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { NotesModule } from './notes/notes.module';
import {CommonModule} from "./common/common.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { DialogNoteComponent } from './dialog/dialog-note/dialog-note.component';
import {AppRoutingModule} from "./app-routing.module";
import {NotesListComponent} from "./pages/notes-list/notes-list.component";
import {NotesCreateComponent} from "./pages/notes-create/notes-create.component";
import {NotesEditComponent} from "./pages/notes-edit/notes-edit.component";
import { NotesViewComponent } from './pages/notes-view/notes-view.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DialogNoteComponent,
      NotesListComponent,
      NotesEditComponent,
      NotesCreateComponent,
      NotesViewComponent,
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
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
