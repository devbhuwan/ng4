import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ng4CoreComponent} from './ng4-core.component';
import {NG4CORE_CONFIG, Ng4CoreConfig} from "./config";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Ng4CoreComponent],
  exports: [Ng4CoreComponent]
})
export class Ng4CoreModule {

  /* optional: in case you need users to override your providers */
  static forRoot(config?: Ng4CoreConfig): ModuleWithProviders {
    return {
      ngModule: Ng4CoreModule,
      providers: [
        {provide: NG4CORE_CONFIG, useValue: config}
      ],
    };
  }

}
