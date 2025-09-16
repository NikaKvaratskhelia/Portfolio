import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    location: new FormControl(),
    budget: new FormControl(),
    subject: new FormControl(),
    message: new FormControl(),
  });
  public emailSent: boolean = false;
  public sendingError: boolean = false;
  public isSending: boolean = false;

  sendEmail() {
    console.log(this.form.value);
    this.isSending = true;
    emailjs
      .send(
        'service_t2xrmjh',
        'template_v54nexo',
        {
          name: this.form.value.name,
          email: this.form.value.email,
          location: this.form.value.location,
          budget: this.form.value.budget,
          subject: this.form.value.subject,
          message: this.form.value.message,
        },
        'PBf4jhIzLgme8HclL'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result);
          this.emailSent = true;
        },
        (error) => {
          console.log(error);
          this.sendingError = true;
        }
      );

    setTimeout(() => {
      this.emailSent = false;
      this.sendingError = false;
      this.isSending = false;
    }, 4000);
  }
}
