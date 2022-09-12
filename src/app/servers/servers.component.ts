import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  servers = ['test server 1', 'test server 2'];
  allowNewServer = false;
  serverName = '';
  serverCreationStatus = "No server created yet";

  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server got created and the name is ${this.serverName}`;
  }
  onServerData(event : any) {
    console.log(event)
    this.serverName = event.target.value;
  }
}
