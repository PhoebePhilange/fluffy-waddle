import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  sent!: boolean;
  msg!: string;
  constructor() { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event, myForm: NgForm) {
    e.preventDefault();
    emailjs.sendForm('service_xudz8hg', 'template_g4dq5xa', e.target as HTMLFormElement, 'user_LLhJjpZVp28Rlv9i8CQil')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.sent = true;
        alert("Email successfully sent")
        myForm.resetForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        console.log(error.text);
        this.sent = false;
        alert(error.text)
      });
     
  }

  resetContactForm(myForm: NgForm){
    myForm.resetForm({
      name: '',
      email: '',
      message: ''
    })
  }

}
