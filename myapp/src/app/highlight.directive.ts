// Directive allows use of the @Directive decorator.
// ElementRef allows access to element in HTML.
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
 // Name the attribute.
 selector: '[myHighlight]'
})
export class HighlightDirective {
 constructor(private el: ElementRef) { }
 // Pass color from 'myHighlight' attribute to 'highlightColor' model.
 @Input('myHighlight') 
 highlightColor!: any;
 // Set color on mouse entry. 'red' is the default.
 @HostListener('mouseenter') 
 onMouseEnter() {
 this.myHighlight( this.highlightColor || 'red');
 }
 // Set color to null on mouse exit.
 @HostListener('mouseleave') 
 onMouseLeave() {
 this.myHighlight('');
 }
 private myHighlight(color: string) {
 this.el.nativeElement.style.backgroundColor = color;
 }

    private Color(color: string) {
    this.el.nativeElement.style.color = color;
    }
   
}
