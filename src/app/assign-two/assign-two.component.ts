import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-two',
  templateUrl: './assign-two.component.html',
  styleUrls: ['./assign-two.component.scss']
})
export class AssignTwoComponent implements OnInit {
  username: string = '';
  constructor() { }

  onAddUser() {
    this.username = '';
  }

  ngOnInit(): void {
  }

}
