export class Estado {
  id: number;
  nombre: string;

  constructor() {
    this.id = 1;
  }

  loadEstado(id: number) {
    this.id = id;
    this.nombre = 'Pendiente de base de datos';
  }

  public getNombre(): string { return this.nombre; }
}
