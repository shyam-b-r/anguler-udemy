import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.counter + 1);
      this.counter++;
    }, 1000);    
  }

  onStop() {
    clearInterval(this.interval)
  }
}
