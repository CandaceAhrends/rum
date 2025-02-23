import { Component } from '@angular/core';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoHeaderComponent, LoginComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
