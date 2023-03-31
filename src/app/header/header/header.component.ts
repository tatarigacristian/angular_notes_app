import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSearching: boolean = false;
  searchValue: string|null = null;

  setSearchValue(searchValue: string|null){
    this.searchValue = searchValue;
    this.searchValueEmitter.emit(searchValue);
  }

  setIsSearching(isSearching: any){
    this.isSearching = isSearching;
  }

  @Output() searchValueEmitter = new EventEmitter();

}
