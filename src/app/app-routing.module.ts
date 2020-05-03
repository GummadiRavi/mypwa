import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DahsboardComponent} from "./views/dahsboard/dahsboard.component";
import {TableComponent} from "./views/table/table.component";
import {DragDropComponent} from "./views/drag-drop/drag-drop.component";
import {PagenotfoundComponent} from "./views/pagenotfound/pagenotfound.component";
import {AddressComponent} from "./views/address/address.component";


const routes: Routes = [
  { path: 'dashboard', component: DahsboardComponent },
  { path: 'data', component: TableComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'address', component: AddressComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
