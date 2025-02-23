import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-header',
  standalone: true,
  imports: [],
  template: `
    <header className="border text-white w-[27rem] md:w-[30rem] m-auto">
      <div className="text-center">
        <h1>Stockmarket<span>viz</span></h1>
      </div>

      <div className="flex justify-center"></div>
    </header>
  `,
  styles: ``,
})
export class LogoHeaderComponent {}
