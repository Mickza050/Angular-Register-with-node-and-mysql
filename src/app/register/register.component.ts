import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = '';
  password: string = '';
  message: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // Onclick Register function
  onRegister() {
    this.authService.register(this.username, this.password).subscribe(
      response => {
        this.message = 'User registered successfully!';
        this.router.navigate(['/home']);
      },
      error => this.message = error.error.message
    );
  }

}
