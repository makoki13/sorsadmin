export class Coordenadas {
  private X: number; private Y: number; private Z: number;

  constructor(x: number, y: number, z?: number) {
    this.X = x;
    this.Y = y;
    this.Z = z;
  }

  public getX(): number { return this.X; }
  public getY(): number { return this.Y; }
  public getZ(): number { return this.Z; }

}
