import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private ele:ElementRef, private render:Renderer2) {

   }
@HostBinding('style.backgroundColor')background: string = "orange";
@HostBinding('style.border')border: string = "none";
@HostListener('mouseenter')onmouseenter(){
this.background="green";
this.border="red 2px solid"
}
@HostListener('mouseleave')onmouseleave(){
  this.background="orange";
  this.border="none"
}
}
