import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {FiltersComponent} from './filters/filters.component';
import {CommonModule} from "../common/common.module";
import {DialogExampleComponent} from "../common/dialog-example/dialog-example.component";
import {DialogOverviewComponent} from "../common/dialog-overview/dialog-overview.component";
import { HeaderCreateComponent } from './header/header-create/header-create.component';
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import { HeaderViewComponent } from './header/header-view/header-view.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SearchComponent,
        FiltersComponent,
        HeaderCreateComponent,
        HeaderViewComponent,
    ],
    imports: [
        CommonModule,
        RouterLink,
        FormsModule,
        NgIf
    ],
    exports: [
        HeaderComponent,
        SearchComponent,
        FiltersComponent,
        DialogExampleComponent,
        DialogOverviewComponent,
        HeaderCreateComponent,
        HeaderViewComponent
    ]
})
export class HeaderModule {
}
