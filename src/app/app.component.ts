import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private accountService : AccountService){}
  accounts: {name: string, status: string}[] = [];
  oddNumbers : number[] = [1, 3, 5];
  evenNumbers : number[] = [2, 4, 6];
  onlyOdd: boolean = false;
  tab: string = 'recipe';
  serverElements = [{
    type : 'server',
    name : 'test server 1',
    content : 'content of test server 1'
  }];

  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }

  onServerCreated(serverData : { name: string, content: string }){
    this.serverElements.push({
      type : 'server',
      name: serverData.name,
      content: serverData.content
    })
  }

  onBlueprintCreated(blueprintData : {name: string, content: string}) {
    this.serverElements.push({
      type : 'blueprint',
      name : blueprintData.name,
      content : blueprintData.content
    })
  }

  selectTab(feature: string) {
    this.tab = feature;
  }
}
