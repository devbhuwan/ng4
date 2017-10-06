import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {<%= projectNameCamelCase %>Config} from "./<%= projectName %>/config";
import {<%= projectNameCamelCase %>Component} from './<%= projectName %>/<%= projectName %>.component';
import {TRANSLATION_PROVIDER} from "ng4-core/services/translation.service";
import {TranslateModule} from "@ngx-translate/core";
import {Ng4CoreModule} from "ng4-core";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    Ng4CoreModule
  ],
  declarations: [<%= projectNameCamelCase %>Component],
  exports: [<%= projectNameCamelCase %>Component],
  providers: [
    {
      provide: TRANSLATION_PROVIDER,
      multi: true,
      useValue: {
        name: '<%= projectName %>',
        source: 'assets/<%= projectName %>'
      }
    }
  ]
})
export class <%= projectNameCamelCase %>Module {

  /* optional: in case you need users to override your providers */
  static forRoot(config?: <%= projectNameCamelCase %>Config): ModuleWithProviders {
    return {
      ngModule: <%= projectNameCamelCase %>Module,
      providers: [
        {provide: '<%= projectNameCamelCase %>_CONFIG', useValue: config}
      ],
    };
  }

}
