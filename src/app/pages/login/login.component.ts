import { Component } from '@angular/core';
import { Credentials } from 'src/app/models/credentials';
import { AuthService } from 'src/app/utils/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials: Credentials = {
    email: '',
    pwd: ''
  }

  constructor(private authService: AuthService) { }

  submit() {
    console.log(this.credentials);
    this.authService.login(this.credentials);
  }
}
