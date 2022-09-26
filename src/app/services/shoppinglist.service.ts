import { EventEmitter } from '@angular/core';
import {Ingredient} from './../shared/ingredient.model';

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('kottambari', 500),
        new Ingredient('rasam powder', 1000),
        new Ingredient('coriander', 200)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }
    
    addIngredient(name: string, amount: number) {
        if(this.ingredients.findIndex((o) => {
            return o.name == name
        }) === -1) {
            this.ingredients.push(new Ingredient(name, amount));
            this.ingredientChanged.emit(this.ingredients.slice());
        }
    }

    addIngredients(ingredients: Ingredient[]) {
            this.ingredients.push(...ingredients);
            this.ingredientChanged.emit(this.ingredients.slice());
    }
}