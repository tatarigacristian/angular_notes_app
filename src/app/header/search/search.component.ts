import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  iconPath = 'assets/icons/search.svg'
  isOpen = false;
  searchValue: string|null = ''
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  onChange(event: any){
    this.searchValue = event.target.value;
    this.valueEmitter.emit(this.searchValue);
  }

  open(){
    this.isOpen = true;
    this.isSearchingEmitter.emit(true);

  }
  close(){
    this.isOpen = false;
    this.searchValue = null;
    this.isSearchingEmitter.emit(false);
    this.valueEmitter.emit(null);

  }
  onSubmit(): void {

    this.isSubmitted = true;
  }
  @Output() isSearchingEmitter = new EventEmitter();
  @Output() valueEmitter = new EventEmitter();

}
