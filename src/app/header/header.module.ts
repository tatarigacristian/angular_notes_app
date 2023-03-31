import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {FiltersComponent} from './filters/filters.component';
import {CommonModule} from "../common/common.module";
import {DialogExampleComponent} from "../common/dialog-example/dialog-example.component";
import {DialogOverviewComponent} from "../common/dialog-overview/dialog-overview.component";
import { HeaderCreateComponent } from './header/header-create/header-create.component';
import {RouterLink} from "@angular/router";

@NgModule({
    declarations: [
        HeaderComponent,
        SearchComponent,
        FiltersComponent,
        HeaderCreateComponent,
    ],
    imports: [
        CommonModule,
        RouterLink
    ],
    exports: [
        HeaderComponent,
        SearchComponent,
        FiltersComponent,
        DialogExampleComponent,
        DialogOverviewComponent,
        HeaderCreateComponent
    ]
})
export class HeaderModule {
}
