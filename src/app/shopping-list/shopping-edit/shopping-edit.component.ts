import { Component, ElementRef, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shopService: ShoppingListService) { }

  ngOnInit(): void {
  }
  addToList(name: string , amount: number){
    this.shopService.addIngredient(name, amount)
  }
}
