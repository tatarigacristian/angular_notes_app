import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Note, NoteClass} from "../../notes/notes/notes.model";
import {
  generateUniqueId,
  saveNoteToLocalStorage,
  isInputError,
  isInputInvalid,
  findNoteById,
  updateNoteInLocalStorage
} from "../../utils/app";

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.scss']
})
export class NotesEditComponent {

  note:Note|null = null;

  registerForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });
  isSubmitted = false;
  isInputInvalid = isInputInvalid;
  isInputError = isInputError;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.note = findNoteById(id);
        if(!this.note) {
          return;
        }
        if(!this.note.title || !this.note.description) {
          return;
        }
        this.registerForm.setValue({
            title: this.note.title,
            description: this.note.description,
        });
    });
  }

  onSubmit(): void {

    this.isSubmitted = true;

    this.updateNote();

    if(this.registerForm.invalid) {
      return;
    }
    this.redirectToNotes();
  }

  redirectToNotes(): void {
    this.router.navigate(['notes']).then(r => console.log(r));
  }

  updateNote(): void {
    if(!this.registerForm.value.title || !this.registerForm.value.description) {
      return;
    }
    const note: NoteClass = {
      id: String(this.note?.id),
      title: this.registerForm.value.title ,
      description: this.registerForm.value.description,
    }
    updateNoteInLocalStorage(note);
  }
}
