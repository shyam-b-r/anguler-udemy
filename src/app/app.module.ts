import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlert } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AssignTwoComponent } from './assign-two/assign-two.component';
import { AssignThreeComponent } from './assign-three/assign-three.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { AssignFourComponent } from './assign-four/assign-four.component';
import { GameControlComponent } from './assign-four/game-control/game-control.component';
import { OddComponent } from './assign-four/odd/odd.component';
import { EvenComponent } from './assign-four/even/even.component';
import {AccountComponent} from './account/account.component';
import {NewAccountComponent} from './new-account/new-account.component';

import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import {BetterHighlightDirective} from './better-highlight/better-highlight.directive';
import {DropdownDirective} from './shared/dropdown.directive';

import { LoggingService } from './services/logging.service';
import {AccountService} from './services/account.service';
import { AssignFiveComponent } from './assign-five/assign-five.component';
import { ActiveUserComponent } from './assign-five/active-user/active-user.component';
import { InactiveUserComponent } from './assign-five/inactive-user/inactive-user.component';
import { UserStatusService } from './services/userstatus.service';
import {ShoppingListService} from './services/shoppinglist.service';
import {RecipeService} from './services/recipe.service';

import {AuthService} from './services/auth.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlert,
    SuccessAlertComponent,
    AssignTwoComponent,
    AssignThreeComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementComponent,
    AssignFourComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    AccountComponent,
    NewAccountComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropdownDirective,
    AssignFiveComponent,
    ActiveUserComponent,
    InactiveUserComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    LoggingService, 
    AccountService, 
    UserStatusService,
    ShoppingListService, 
    RecipeService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
