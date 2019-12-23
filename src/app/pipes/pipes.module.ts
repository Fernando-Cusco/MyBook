import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParesPipe } from './pares.pipe';



@NgModule({
  declarations: [ParesPipe],
  exports: [ParesPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
