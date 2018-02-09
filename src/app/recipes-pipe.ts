import { Pipe, PipeTransform } from '@angular/core';

import { Recipe } from './recipes/recipe.model';

@Pipe({
    name: 'recipeFilter',
    pure: false
})
export class RecipeFilterPipe implements PipeTransform {
    transform(allRecipes: Recipe[], filter: string) {
        return allRecipes.filter((item: Recipe) => {
            if (!filter) {
                return item;
            }
            return item.healthLabels.indexOf(filter) !== -1;
        });
    }
}
