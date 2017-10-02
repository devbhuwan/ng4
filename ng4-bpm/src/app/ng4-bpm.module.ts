import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG4BPM_CONFIG, Ng4BpmConfig} from "./ng4-bpm/config";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClientModule} from "@angular/common/http";
import {TranslateStore} from "@ngx-translate/core/src/translate.store";
import {Ng4BpmComponent} from './ng4-bpm/ng4-bpm.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {provide: TranslateLoader, useFactory: createTranslateLoader, deps: [HttpClient]},
      isolate: true
    })
  ],
  declarations: [Ng4BpmComponent],
  exports: [Ng4BpmComponent],
})
export class Ng4BpmModule {

  /* optional: in case you need users to override your providers */
  static forRoot(config?: Ng4BpmConfig): ModuleWithProviders {
    return {
      ngModule: Ng4BpmModule,
      providers: [
        {provide: NG4BPM_CONFIG, useValue: config},
        TranslateService, TranslateStore, HttpClient
      ],
    };
  }

}
