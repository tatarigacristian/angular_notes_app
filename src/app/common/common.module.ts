import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import {NgClass, NgIf} from "@angular/common";
import { FixedButtonComponent } from './fixed-button/fixed-button.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {DialogExampleComponent, } from './dialog-example/dialog-example.component';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ButtonComponent,
    FixedButtonComponent,
    DialogExampleComponent,
    DialogOverviewComponent,
  ],
  imports: [
    NgClass,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    NgIf
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  exports: [
    ButtonComponent, FixedButtonComponent, DialogExampleComponent, DialogOverviewComponent
  ]
})
export class CommonModule { }
