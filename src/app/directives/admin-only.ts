import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAdminOnly]'
})
export class AdminOnly {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const role= localStorage.getItem('role');
    if(role!=='admin'){
       this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');

      // Optional: add a tooltip or visual hint
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.6');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'not-allowed');
      this.renderer.setAttribute(this.el.nativeElement, 'title', 'Admins only');
    }
   }

}
