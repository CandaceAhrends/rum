import { Component, inject } from '@angular/core';

import { LoginService } from '../../../login.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private loginService = inject(LoginService);
  loginForm!: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9]+$'),
          Validators.minLength(3),
        ],
      ],
    });
  }

  submitForm() {
    console.log(this.loginForm.value);
    this.loginService.postUser(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('User created successfully:', response);

        this.message = 'User created successfully';
      },
      error: (error) => {
        this.message =
          error.error?.message || 'An error occurred. Please try again.';
      },
    });
  }
}
