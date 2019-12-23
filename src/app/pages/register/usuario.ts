import { Direccion } from './direccion';
export class Usuario {
    id: number;
    nombres: string;
    correo: string;
    password: string;
    fecha: string;
    telefono: string;
    direcciones: Direccion;
}