import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseDetailCustomization, Customizations } from '../models/details/details.model';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input('details') customization!: Customizations;
  form!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    // this.addControls();
  }

  addControls() {
    this.form.addControl(this.customization.title.toLowerCase(), this.fb.control(''));
    this.customization.details.forEach((details: BaseDetailCustomization) => {
      this.form.addControl(details.title.toLowerCase(), this.fb.control(details.details[0]));
    });
  }

  private initForm() {
    this.form = this.fb.group({});
  }
}
