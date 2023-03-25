import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {FiltersComponent} from './filters/filters.component';
import {ButtonComponent} from '../common/button/button.component';
import {CommonModule} from "../common/common.module";
import {DialogExampleComponent} from "../common/dialog-example/dialog-example.component";
import {DialogOverviewComponent} from "../common/dialog-overview/dialog-overview.component";

@NgModule({
    declarations: [
        HeaderComponent,
        SearchComponent,
        FiltersComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        SearchComponent,
        FiltersComponent,
        DialogExampleComponent,
        DialogOverviewComponent
    ]
})
export class HeaderModule {
}
