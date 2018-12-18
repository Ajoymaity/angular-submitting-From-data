import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'node', 'react'];

  userModel = new User('', 'r@fg.com', '9999999999', '', 'morning', true);

  submitted = false;
  constructor(private _enrollmentService: EnrollmentService) { }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
       .subscribe(
         data => console.log('Success!', data),
         error => console.error('error!', error)
       );
  }
}
