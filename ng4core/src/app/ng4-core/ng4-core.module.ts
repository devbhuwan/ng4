import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng4CoreComponent} from './ng4-core.component';
import {NG4CORE_CONFIG, Ng4CoreConfig} from "./config";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateStore} from "@ngx-translate/core/src/translate.store";
import {HttpClientModule} from "@angular/common/http";


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../i18n/', '.json');
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
  declarations: [Ng4CoreComponent],
  exports: [Ng4CoreComponent],
})
export class Ng4CoreModule {

  /* optional: in case you need users to override your providers */
  static forRoot(config?: Ng4CoreConfig): ModuleWithProviders {
    return {
      ngModule: Ng4CoreModule,
      providers: [
        {provide: NG4CORE_CONFIG, useValue: config},
        TranslateStore, HttpClient
      ],
    };
  }

}
