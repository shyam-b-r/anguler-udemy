import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elem: ElementRef){

    }
    ngOnInit(){
        console.log("hello")
        this.elem.nativeElement.style.backgroundColor = 'green';
    }
}