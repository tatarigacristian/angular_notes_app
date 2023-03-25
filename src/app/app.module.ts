import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { NotesModule } from './notes/notes.module';
import { NotesComponent } from './notes/notes/notes.component';
import {CommonModule} from "./common/common.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        HeaderModule,
        NotesModule,
        CommonModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
