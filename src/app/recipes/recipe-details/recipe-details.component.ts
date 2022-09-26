import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoggingService } from 'src/app/services/logging.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, AfterViewChecked {
  recipeSelected: Recipe;
  id: number;
  constructor(private logger: LoggingService, 
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
      this.id = +params['id'];
      this.recipeSelected = this.recipeService.getRecipe(+params['id'])
    })
    
  }

  ngAfterViewChecked() {
    this.logger.onSuccess(this.recipeSelected)
  }

  addToShoppingList() {
    this.recipeService.addToShoppingList(this.recipeSelected.ingredients);
  }

  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
