import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './property-card.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SortByPipe } from '../shared/sort-by.pipe';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PropertyCardComponent, SortByPipe],
  imports: [
    CommonModule,
    SkeletonModule,
    CardModule,
    ButtonModule,
    SelectButtonModule,
    FormsModule
  ]
})
export class PropertyCardModule { }
