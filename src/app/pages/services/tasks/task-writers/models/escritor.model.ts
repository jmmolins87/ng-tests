

export class Escritor {
    id: number;
    nombre: string;
    apellidos: string;
    imagen: string;
    pais: string;

    constructor( cId: number, cNombre: string, cApellidos: string, cImagen: string, cPais: string ) {
        this.id = cId;
        this.nombre = cNombre;
        this.apellidos = cApellidos;
        this.imagen = cImagen;
        this.pais = cPais;
    }
}