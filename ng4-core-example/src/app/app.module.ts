import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Ng4CoreModule} from 'ng4-core/src/ng4core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng4CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
