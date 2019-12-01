import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      first: ['', Validators.required],
      last: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm);
    }
  }
}
