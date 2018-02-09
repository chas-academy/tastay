export class Saved {
  public id: number;
  public title: string;
  public recipes: number[];

  constructor(
    id: number,
    title: string,
    recipes: number[]
  ) {
    this.id = id;
    this.title = title;
    this.recipes = recipes;
  }
}
