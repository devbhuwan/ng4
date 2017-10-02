import {Component, Injectable, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

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

  constructor(private translateService: TranslateService) {

  }

  ngOnInit() {
    console.log("Default Lang " + this.translateService.getDefaultLang());
  }

}
