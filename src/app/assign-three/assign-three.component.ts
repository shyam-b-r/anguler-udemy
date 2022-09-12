import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-three',
  templateUrl: './assign-three.component.html',
  styleUrls: ['./assign-three.component.scss']
})
export class AssignThreeComponent implements OnInit {
  isVisible = true;
  arrLog = [];

  constructor() { }

  onToggleParah() {
    this.isVisible = !this.isVisible;
    this.arrLog.push(new Date())
  }

  ngOnInit(): void {
  }

}
