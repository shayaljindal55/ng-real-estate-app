import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './property-card.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PropertyCardComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    CardModule,
    ButtonModule,
    SelectButtonModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class PropertyCardModule { }
