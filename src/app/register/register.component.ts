import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestManagerService } from '../../global-shared/service/request.manager.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerUserForm: FormGroup;

  constructor(private fb: FormBuilder, private requestManagerService: RequestManagerService) { }

  ngOnInit(): void {
    this.displayForm();
  }

  displayForm = () => {
    this.registerUserForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(13)]],
      password: ['', Validators.required],
     // bio: []
    })
  }

  register = () => {
    this.requestManagerService.registerUser(this.registerUserForm.value)
    .subscribe()
     console.log(this.registerUserForm.value)
  }
}
