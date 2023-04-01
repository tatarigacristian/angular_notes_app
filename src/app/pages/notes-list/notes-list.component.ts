import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {filterNotesByTitleOrDescription, getNotesFromLocalStorage} from "../../utils/app";
import {SecurityService} from "../../services/security.service";

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit, OnChanges {

    public observable$: any;
    constructor(private securityService: SecurityService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes');
    }

    plusPath = 'assets/icons/plus.svg';

    searchValue: string | null = null;

    public test = '';

    setSearchValue(value: string) {
        this.searchValue = value;
    }

    ngOnInit() {
        // console.log('init');

        this.observable$ = this.securityService.getPokemon('ditto')

        // this.securityService.getPokemon("ditto")
        //     .subscribe((res) => {
        //         console.log(res);
        // });

        // this.securityService.customExample();
        // this.securityService.customExampleObjects();
        this.securityService.customExampleInterval();
    }

    change() {
        console.log('here');
        this.test = 'test'

        this.securityService.log();


        console.log(this.test);
    }

}
