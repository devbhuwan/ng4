/*!
 * @license
 * Copyright 2017 DeveloperBhuwan.
 *
 */

export {} from '.'

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Ng4CoreModule } from './src/ng4core.module';
import { LogService } from './src/services/log.service';
import { Ng4TranslateLoader } from './src/services/translate-loader.service';

export function providers() {
    return [];
}

export function createTranslateLoader(http: Http, logService: LogService) {
    return new Ng4TranslateLoader(http, logService);
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http, LogService]
            }
        }),
        Ng4CoreModule
    ],
    declarations: [],
    providers: providers(),
    exports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        TranslateModule
    ]
})
export class CoreModule {
    static forRoot(opts: any = {}): ModuleWithProviders {

        const appConfigFile = opts.appConfigFile || 'app.config.json';

        return {
            ngModule: CoreModule,
            providers: [
                ...providers()
            ]
        };
    }
}
