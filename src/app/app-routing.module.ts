import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotesListComponent} from "./pages/notes-list/notes-list.component";
import {NotesCreateComponent} from "./pages/notes-create/notes-create.component";
import {NotesEditComponent} from "./pages/notes-edit/notes-edit.component";


const routes: Routes = [
    {path: '', redirectTo: '/notes', pathMatch: 'full'},
    {path: 'notes', component: NotesListComponent},
    {path: 'notes/create', component: NotesCreateComponent},
    {path: 'notes/:id/view', component: NotesEditComponent},
    {path: 'notes/:id/edit', component: NotesEditComponent},
];

// const routes: Routes = [
//     {
//         path: '',
//         redirectTo: '/notes',
//         pathMatch: 'full'
//     },
//     {
//         path: 'notes',
//         component: NotesListComponent,
//         children: [
//             {
//                 path: 'create',
//                 component: NotesCreateComponent
//             },
//             {
//                 path: ':id',
//                 component: NotesEditComponent
//             }
//         ]
//     }
// ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }