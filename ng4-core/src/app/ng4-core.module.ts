import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng4CoreComponent} from './ng4-core/ng4-core.component';
import {Ng4CoreConfig} from "./ng4-core/config";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Http, HttpModule} from "@angular/http";
import {LogService} from "./services/log.service";
import {Ng4TranslateLoader} from "./services/translate-loader.service";
import {TRANSLATION_PROVIDER, TranslationService} from "./services/translation.service";


export function providers() {
  return [
    LogService,
    Ng4TranslateLoader,
    TranslationService,
  ];
}


export function createTranslateLoader(http: Http, logService: LogService) {
  return new Ng4TranslateLoader(http, logService);
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http, LogService]
      },
      isolate: true
    })
  ],
  declarations: [Ng4CoreComponent],
  exports: [
    HttpModule,
    TranslateModule,
    Ng4CoreComponent
  ],
  providers: [
    ...providers(),
    {
      provide: TRANSLATION_PROVIDER,
      multi: true,
      useValue: {
        name: 'ng4-core',
        source: 'assets/ng4-core'
      }
    }
  ]
})
export class Ng4CoreModule {

  /* optional: in case you need users to override your providers */
  static forRoot(config?: Ng4CoreConfig): ModuleWithProviders {
    return {
      ngModule: Ng4CoreModule,
      providers: [
        ...providers()
      ],
    };
  }

}
