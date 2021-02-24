import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A test Recipe','This is a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
        [
            new Ingredient('meat',1),
            new Ingredient('Frenchfries',20)

        ]),
        new Recipe('A testrecipe 2', 'This is a test 2','https://assets.epicurious.com/photos/59bc150e74febd49ca741558/6:4/w_620%2Ch_413/CINNAMON-CRUMBLE-APPLE-PIE-RECIPE-07092017.jpg',
        [
            new Ingredient('mehua',5),
            new Ingredient('Limua',1)

        ])
   ];

   constructor(private slService: ShoppinListService){}

   getRecipes(){
    return this.recipes.slice();
 }
    addIngredientsToSL(ingredients: Ingredient[]){
        this.slService.addIngrediets(ingredients);
    }   


}
