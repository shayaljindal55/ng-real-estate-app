import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertyCardComponent } from './property-card/property-card.component';

const routes: Routes = [{ path: '', component: PropertyCardComponent },
{ path: '', redirectTo: '/', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
