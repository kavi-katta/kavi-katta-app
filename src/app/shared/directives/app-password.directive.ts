import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[kkPassword]"
})

export class AppPasswordDirective implements OnInit {
    private isVisible = false;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.el.nativeElement.parentNode;
        let parent = this.el.nativeElement.parentNode;
        let div = document.createElement('div');
        div.addEventListener('click', (event)=>{this.togglePasswordVisibility(div)});
        parent.appendChild(div);
    }

    togglePasswordVisibility(div){
        this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.el.nativeElement.setAttribute('type', 'text');
      div.innerHTML = 'Hide password';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      div.innerHTML = 'Show password';
    }
    }
}