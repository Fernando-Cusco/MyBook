import { Direccion } from './direccion';
import { Tarjeta } from './tarjeta';
export class Usuario {
    id: number;
    nombres: string;
    correo: string;
    password: string;
    fecha: string;
    telefono: string;
    direcciones: Direccion[];
    tarjetas: Tarjeta[]

}