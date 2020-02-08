import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParesPipe } from './pares.pipe';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [ParesPipe, FiltroPipe],
  exports: [ParesPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
