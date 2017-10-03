import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng4BpmConfig} from "./ng4-bpm/config";
import {Ng4BpmComponent} from './ng4-bpm/ng4-bpm.component';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import { Ng4CoreModule } from "ng4-core";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ng4CoreModule
  ],
  declarations: [Ng4BpmComponent],
  exports: [Ng4BpmComponent],
})
export class Ng4BpmModule {


  constructor(private translateService: TranslateService) {
    let lang = this.translateService.getDefaultLang();
    this.translateService.setDefaultLang("ar");
  }
  /* optional: in case you need users to override your providers */
  static forRoot(config?: Ng4BpmConfig): ModuleWithProviders {
    return {
      ngModule: Ng4BpmModule,
      providers: [
        {provide: 'NG4BPM_CONFIG', useValue: config}
      ],
    };
  }

}
