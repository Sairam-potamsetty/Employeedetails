import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // usage: <p appHighlight>Text</p>
  standalone:true
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
          this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor','blue');
          this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s');
  }
}
