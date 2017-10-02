import {Component, Injectable, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-ng4-core',
  templateUrl: './ng4-core.component.html',
  styleUrls: ['./ng4-core.component.scss']
})
@Injectable()
export class Ng4CoreComponent implements OnInit {

  constructor(private translateService: TranslateService) {

  }

  ngOnInit() {
    this.translateService.setDefaultLang("ar");
    console.log("Default Lang " + this.translateService.getDefaultLang());
  }

}
