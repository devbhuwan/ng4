/*!
 * @license
 * Copyright 2017 DeveloperBhuwan.
 *
 */

import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Rx';
import { Ng4TranslateLoader } from './translate-loader.service';

@Injectable()
export class TranslationService {
    defaultLang: string = 'en';
    userLang: string = 'en';
    customLoader: Ng4TranslateLoader;

    constructor(public translate: TranslateService) {
        this.userLang = translate.getBrowserLang() || this.defaultLang;
        translate.setDefaultLang(this.defaultLang);
        this.customLoader = <Ng4TranslateLoader> this.translate.currentLoader;
        this.use(this.userLang);
    }

    addTranslationFolder(name: string = '', path: string = '') {
        if (!this.customLoader.existComponent(name)) {
            this.customLoader.addComponentList(name, path);
            if (this.userLang !== this.defaultLang) {
                this.translate.getTranslation(this.defaultLang).subscribe(() => {
                    this.translate.getTranslation(this.userLang).subscribe(
                        () => {
                            this.translate.use(this.userLang);
                        }
                    );
                });
            } else {
                this.translate.getTranslation(this.userLang).subscribe(
                    () => {
                        this.translate.use(this.userLang);
                    }
                );
            }
        }
    }

    use(lang: string): Observable<any> {
        this.customLoader.init(lang);
        return this.translate.use(lang);
    }

    get(key: string | Array<string>, interpolateParams?: Object): Observable<string | any> {
        return this.translate.get(key, interpolateParams);
    }
}
