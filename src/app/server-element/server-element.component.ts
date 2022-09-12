import { 
  Component, 
  Input, 
  OnInit, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit 
} from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input('srvElement') element: { type : string, name : string, content : string };

  constructor() { 
    console.log('constructor is called !!!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges is called !!!')
  }

  ngOnInit(): void {
    console.log('onInit is called !!!')
  }

  ngDoCheck() {
    console.log('DoCheck is called !!!')
  }

  ngAfterContentInit() {
    console.log('AfterContentInit is called !!!')
  }

}
