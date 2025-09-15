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

  sendEmail() {
    console.log(this.form.value);
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
          alert('Message sent!');
        },
        (error) => {
          alert('Failed to send message: ' + JSON.stringify(error));
        }
      );
  }
}
