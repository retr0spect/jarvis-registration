import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {FormDataService} from '../data/formData.service';
import {SellTo} from '../data/SellTo.model';

@Component({
  selector: 'mt-wizard-work'
  , templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {
  sellTo: SellTo;
  title = 'User Information';
  workType: string;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) {
    this.sellTo = new SellTo('aditya.chandel101@gmail.com', 'Aditya Chandel', '666 Street, Lane 53', 'Umbrella Corporation', '4355120582');
    console.log(this.sellTo);
  }

  ngOnInit() {
    this.workType = this.formDataService.getWork();
    console.log(this.sellTo);
    console.log('Work feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setWork(this.workType);
    return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
      // Navigate to the personal page
      this.router.navigate(['/personal']);
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the address page
      this.router.navigate(['/address']);
    }
  }
}
