import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>{{ name }}</h1>`,
  styles: [`h1 { font-family: IBM Plex Sans; font-size: 16px; font-weight:600;}`]
})
export class HelloComponent  {
  @Input() name: string;
}
