import { Direccion } from './direccion';
export class Usuario {
    id: number;
    nombres: string;
    correo: string;
    password: string;
    fechaNacimiento: Date;
    telefono: string;
    direcciones: Direccion[];
}