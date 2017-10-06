import {Component, Injectable, OnInit} from '@angular/core';
import {TranslationService} from "../services/translation.service";

@Component({
  selector: 'ng4-core-component',
  templateUrl: './ng4-core.component.html',
  styleUrls: ['./ng4-core.component.scss']
})
@Injectable()
export class Ng4CoreComponent implements OnInit {

  constructor(private translateService: TranslationService) {

  }

  ngOnInit() {
  }

}
