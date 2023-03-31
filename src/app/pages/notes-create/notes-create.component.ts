import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {isInputInvalid, isInputError, generateUniqueId, saveNoteToLocalStorage} from '../../utils/app';
import {Note, NoteClass} from "../../notes/notes/notes.model";
import {Router} from "@angular/router";
@Component({
  selector: 'app-notes-create',
  templateUrl: './notes-create.component.html',
  styleUrls: ['./notes-create.component.scss']
})
export class NotesCreateComponent implements OnInit {
  registerForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });
  isSubmitted = false;
  isInputInvalid = isInputInvalid;
  isInputError = isInputError;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.isSubmitted = true;

    this.createNote();

    if(this.registerForm.invalid) {
        return;
    }
    this.redirectToNotes();
  }

  redirectToNotes(): void {
    this.router.navigate(['notes']).then(r => console.log(r));
  }

  createNote(): void {
    if(!this.registerForm.value.title || !this.registerForm.value.description) {
        return;
    }
    const note: NoteClass = {
      id: generateUniqueId(),
      title: this.registerForm.value.title ,
      description: this.registerForm.value.description,
    }
    saveNoteToLocalStorage(note);
  }
}
