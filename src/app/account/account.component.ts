import { Component, Input } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accService: AccountService){}

  onSetTo(status: string) {
    this.accService.onUpdateStatus(this.id, status);
    console.log('A server status changed, new status: ' + status);
  }
}
