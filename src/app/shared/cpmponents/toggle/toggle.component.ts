import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  template: ` <p>toggle works!</p> `,
  styles: ``,
})
export class ToggleComponent {
  toggle = signal(false);
}
