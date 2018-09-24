import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Personal} from '../data/formData.model';
import {FormDataService} from '../data/formData.service';
import {ResponseData} from '../data/responseData.model';

@Component({
  selector: 'mt-wizard-personal',
  templateUrl: './personal.component.html'
})

export class PersonalComponent implements OnInit {
  title = 'Enter your Email and Jarvis Serial Number';
  personal: Personal;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();
    console.log('Personal feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setPersonal(this.personal);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Verify email and serial at the backend
      this.formDataService.verifyEmailAndSerial()
        .subscribe((data: string) => {
          const response = (<ResponseData>JSON.parse(JSON.stringify(data)));
          if (response.status === 'success') {
            this.router.navigate(['/work']);
          } else {
            console.log('Ba!!!!!!!!!!!!!!!!');
          }
        });
    }
  }
}
