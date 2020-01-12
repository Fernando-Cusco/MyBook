import { Autor } from './autor';
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
}