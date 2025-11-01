import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  error = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  submit(){
    const { username, password } = this.form.value as any;
    this.auth.login(username, password).subscribe(ok => {
      if(ok){
        this.router.navigate(['/dashboard']);
      } else {
        this.error = 'Invalid credentials';
      }
    });
  }
}
