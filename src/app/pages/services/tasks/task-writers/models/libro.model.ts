

export class Libro {
    id: number;
    titulo: string;
    publicado: number;
    imagen: string;
    escritor: number;

    constructor( cId: number, cTitulo: string, cPublicado: number, cImagen: string, cEscritor: number ) {
        this.id = cId;
        this.titulo = cTitulo;
        this.publicado = cPublicado;
        this.imagen = cImagen;
        this.escritor = cEscritor;
    }
}