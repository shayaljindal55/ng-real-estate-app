import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PropertyCardComponent } from './property-card/property-card.component';

const routes: Routes = [{ path: 'property', component: PropertyCardComponent },
{ path: '', redirectTo: '/property', pathMatch: 'full' },
// { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
