import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[MaDirective]'
})

export class MaDirectiveDirective {

  constructor(private el:ElementRef) { }


  @HostListener('mouseenter') onMouseEnter() {

    this.highlight('black');
    
  }


  @HostListener('mouseout') onMouseOut() { 

    this.highlight(null); 

  }
  
  
  private highlight(color:string)  {

    this.el.nativeElement.style.color=color;
  } 


}
