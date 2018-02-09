export class Recipe {
  public id: number;
  public url: string;
  public title: string;
  public photoPath: string;
  public ingredients: string[];
  public healthLabels: string[];

  constructor(
    id: number,
    url: string,
    title: string,
    photoPath: string,
    ingredients: string[],
    healthLabels: string[],
  ) {
    this.id = id;
    this.url = url;
    this.title = title;
    this.photoPath = photoPath;
    this.ingredients = ingredients;
    this.healthLabels = healthLabels;
  }
}