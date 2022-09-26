import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountService: AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onCreateAccount(accountName, accountStatus)
  }
}
