import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [RegisterComponent]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  it('form invalid when empty', () => {
    component.ngOnInit();
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should bind input text value to Component property', () => {
    const hostElement = fixture.nativeElement;
    const firstNameInput: HTMLInputElement = hostElement.querySelector('#firstName');
    const lastNameInput: HTMLInputElement = hostElement.querySelector('#lastName');
    const phoneInput: HTMLInputElement = hostElement.querySelector('#phoneNumber');
    const countryInput: HTMLInputElement = hostElement.querySelector('#country');

    fixture.detectChanges();

    firstNameInput.value = 'Sachin';
    lastNameInput.value = 'Tendulkar';
    phoneInput.value = '1234567890';
    countryInput.value = 'Antarctica';

    firstNameInput.dispatchEvent(new Event('input'));
    lastNameInput.dispatchEvent(new Event('input'));
    phoneInput.dispatchEvent(new Event('input'));
    countryInput.dispatchEvent(new Event('change'));

    expect(component.registerForm.controls.firstName.value).toBe('Sachin');
    expect(component.registerForm.controls.lastName.value).toBe('Tendulkar');
    expect(component.registerForm.controls.phoneNumber.value).toBe('1234567890');
    expect(component.registerForm.controls.country.value).toBe('Antarctica');
  });

  it('firstName field validity', () => {
    component.ngOnInit();
    const firstname = component.registerForm.controls.firstName;
    expect(firstname.valid).toBeFalsy();

    firstname.setValue('Sachin');
    expect(firstname.hasError('required')).toBeFalsy();
    expect(firstname.hasError('minlength')).toBeFalsy();
  });

  it('lastname field validity', () => {
    component.ngOnInit();
    const lastName = component.registerForm.controls.lastName;
    expect(lastName.valid).toBeFalsy();

    lastName.setValue('Tendulkar');
    expect(lastName.hasError('required')).toBeFalsy();
    expect(lastName.hasError('minlength')).toBeFalsy();
  });

  it('phoneNumber field validity', () => {
    component.ngOnInit();
    const phoneNumber = component.registerForm.controls.phoneNumber;
    expect(phoneNumber.valid).toBeFalsy();

    phoneNumber.setValue('1234567890');
    expect(phoneNumber.hasError('required')).toBeFalsy();
    expect(phoneNumber.hasError('minlength')).toBeFalsy();
    expect(phoneNumber.hasError('pattern')).toBeFalsy();

    phoneNumber.setValue('abcdef');
    expect(phoneNumber.hasError('pattern')).toBeTruthy();
  });

  it('country field validity', () => {
    component.ngOnInit();
    const country = component.registerForm.controls.country;
    expect(country.valid).toBeFalsy();

    country.setValue('Antarctica');
    expect(country.hasError('required')).toBeFalsy();
    expect(country.hasError('minlength')).toBeFalsy();
  });
});
