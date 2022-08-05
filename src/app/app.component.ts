import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    password: ['', {
      validators: [
        Validators.minLength(4),
        Validators.maxLength(8)
      ]
    }]

  });

  get password() {
    return this.form.controls['password'];
  }

}
