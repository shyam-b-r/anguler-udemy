import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  serverElements = [];
  //newServerName = '';
  @ViewChild('serverNameInput', {static: true}) serverName: ElementRef;
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name : string, content : string}>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    console.log(this.serverName)
    this.serverCreated.emit({
      //name: this.newServerName,
      name : this.serverName.nativeElement.value,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      //name: this.newServerName,
      name : this.serverName.nativeElement.value,
      content: this.newServerContent
    });
  }

}
