import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'form-validation';
  myForm = new FormGroup({
    min: new FormControl(),
    max: new FormControl()
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      min: [null, Validators.required],
      max: [null, Validators.max(100)]
    }, { validators: this.RangeValidator, updateOn: 'submit' });
    this.myForm.controls.max.setValue(10);
  }

  RangeValidator: ValidatorFn = (fg: AbstractControl) => {
    const min = fg.get('min')?.value;
    const max = fg.get('max')?.value;

    if (!min || !max) {
      return null;
    }
    if (min > max) {
      fg.get('min')?.setErrors({minGreatMax: true});
      fg.get('max')?.setErrors({minGreatMax: true});
    }
    return null;
  }

  getErrorMessage(controlName: string): string | null {
    if (this.myForm.get(controlName)?.hasError('required')) {return  'Required'; }
    if (this.myForm.get(controlName)?.hasError('max')) {return  'Max is greater than 100'; }
    if (this.myForm.get(controlName)?.hasError('minGreatMax')) {return 'Min must be greater than the Max'; }
    return 'Undefined Error';
  }
}
