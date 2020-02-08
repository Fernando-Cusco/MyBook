import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string, column: string): any[] {
    if (texto === '') {
      return arreglo;
    }
    texto = texto.toLocaleLowerCase();
    return arreglo.filter( item => {
      return item[column].toLowerCase().includes(texto);
    });
    return arreglo;
  }

}
