import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface HTP {
  id: number,
  todo: string,
  completed: boolean
}

@Component({
  selector: 'app-assign-four',
  templateUrl: './assign-four.component.html',
  styleUrls: ['./assign-four.component.scss']
})
export class AssignFourComponent implements OnInit, OnChanges {
  counter: number;
  arrOddNumers: number[] = [];
  arrEvenNumers: number[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://dummyjson.com/todos')
    .subscribe(data => console.log(data));
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  onIntervalFired(count) {
    this.counter = count;
    console.log(count);

    if(count%2 == 0) {
      this.arrEvenNumers.push(count);
    } else {
      this.arrOddNumers.push(count);
    }
  }
}
