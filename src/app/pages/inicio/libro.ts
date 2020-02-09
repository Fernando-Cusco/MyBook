import { Autor } from './autor';
import { Categoria } from './categoria';
export class Libro {
    id: number;
    titulo: string;
    descripcion: string;
    portada: string;
    fechaPublicacion: Date;
    paginas: number;
    precio: number;
    stock: number;
    autores: Autor[]
    categorias: Categoria[];
}