export class Keg {
  public pints: number;
  constructor(public name: string, public brand: string, public price: number, public abv: number, public ibu: number, public type: string) {
    this.pints = 124;
  };
}