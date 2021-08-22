import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PropertyCardComponent } from './property-card.component';

const routes: Routes = [{ path: '', component: PropertyCardComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PropertyCardRoutingModule { }
