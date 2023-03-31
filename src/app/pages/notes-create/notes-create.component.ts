import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(
        'submitted form',
        this.registerForm.value,
        this.registerForm.invalid
    );
    this.isSubmitted = true;
  }
}
