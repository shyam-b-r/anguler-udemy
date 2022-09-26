import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './../recipes/recipe.model';
import { ShoppingListService } from './shoppinglist.service';

@Injectable()
export class RecipeService {
    itemSelected = new EventEmitter<{name: string,imagePath: string, description: string, ingredients: Ingredient[]}>();
    
    constructor(private shoppingService : ShoppingListService){}
    private recipes: Recipe[] = [
        new Recipe(
            'sambar', 
            'sambar is super', 
            'https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/South-Indian-Sambar-Recipe.jpg',
            [
                new Ingredient('Meat', 3),
                new Ingredient('Chilli powder', 40)
            ]),
        new Recipe(
            'sambar 2', 
            'sambar is super 2', 
            'https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/South-Indian-Sambar-Recipe.jpg',
            [
                new Ingredient('Onion', 500),
                new Ingredient('Tomato', 7)
            ])
      ];

    getRecipes() {
        return this.recipes.slice();
    }

    addToShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }
}