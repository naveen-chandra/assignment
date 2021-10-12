import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countries } from '../constants/countries';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  numberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  submitted = false;
  countries: any;

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService
    ) {}

  ngOnInit(): void {
    this.createRegisterForm();
    this.countries = countries;
  }

  // create and initialize register form
  createRegisterForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.numberPattern), Validators.maxLength(10)]],
      country: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.valid) {
      const reqData = this.registerForm.value;
      this.commonService.register(reqData).subscribe(
        res => {
          alert('User registered Successfully');
          this.registerForm.reset();
          this.submitted = false;
        },
        err => {
          alert('Cannot register user');
        }
      );
    }
  }
}
