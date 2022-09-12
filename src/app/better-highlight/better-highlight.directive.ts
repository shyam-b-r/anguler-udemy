import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    constructor(private elem: ElementRef, private renderer: Renderer2){

    }

    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
    ngOnInit(){
        //this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'red');
    }

    @HostListener('mouseenter') mouseover() {
        //this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'red');
        this.backgroundColor = 'red';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        //this.renderer.setStyle(this.elem.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = 'transparent';
    }
}