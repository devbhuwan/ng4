import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng4CoreComponent } from './ng4-core.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Ng4CoreComponent],
  exports: [Ng4CoreComponent]
})
export class Ng4CoreModule { }
