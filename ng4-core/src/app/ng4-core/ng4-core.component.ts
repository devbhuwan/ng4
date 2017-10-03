import {Component, Injectable, OnInit} from '@angular/core';
import {TranslationService} from "../services/translation.service";

@Component({
  selector: 'ng4-core-component',
  template: `
    <p>
      ng4-core works!
    </p>
    {{'hello' | translate}}
  `
})
@Injectable()
export class Ng4CoreComponent implements OnInit {

  constructor(private translateService: TranslationService) {

  }

  ngOnInit() {
  }

}
