import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {TranslateLoader} from '@ngx-translate/core';
import {Observable} from 'rxjs/Rx';
import {ComponentTranslationModel} from '../models/component.model';
import {LogService} from './log.service';

@Injectable()
export class Ng4TranslateLoader implements TranslateLoader {

  private prefix: string = 'i18n';
  private suffix: string = '.json';
  private providers: ComponentTranslationModel[] = [];
  private queue: string [][] = [];

  constructor(private http: Http,
              private logService: LogService) {
    this.logService.info("hello");
  }

  registerProvider(name: string, path: string) {
    let registered = this.providers.find(provider => provider.name === name);
    if (registered) {
      registered.path = path;
    } else {
      this.providers.push(new ComponentTranslationModel({name: name, path: path}));
    }
  }

  providerRegistered(name: string): boolean {
    return this.providers.find(x => x.name === name) ? true : false;
  }

  getComponentToFetch(lang: string) {
    let observableBatch = [];
    if (!this.queue[lang]) {
      this.queue[lang] = [];
    }
    this.providers.forEach((component) => {
      if (!this.isComponentInQueue(lang, component.name)) {
        this.queue[lang].push(component.name);
        observableBatch.push(this.http.get(`${component.path}/${this.prefix}/${lang}${this.suffix}`)
          .map((res: Response) => {
            component.json[lang] = res.json();
          })
          .catch(() => {
            // Empty Observable just to go ahead
            return Observable.of('');
          }));
      }
    });
    return observableBatch;
  }

  init(lang: string) {
    if (this.queue[lang] === undefined) {
      this.queue[lang] = [];
    }
  }

  isComponentInQueue(lang: string, name: string) {
    return (this.queue[lang] || []).find(x => x === name) ? true : false;
  }

  getFullTranslationJSON(lang: string) {
    let fullTranslation: string = '';
    let cloneList = this.providers.slice(0);
    cloneList.reverse().forEach((component) => {
      if (component.json && component.json[lang]) {
        fullTranslation += JSON.stringify(component.json[lang]);
      }
    });
    if (fullTranslation !== '') {
      return JSON.parse(fullTranslation.replace(/}{/g, ','));
    }
  }

  getTranslation(lang: string): Observable<any> {
    let observableBatch = this.getComponentToFetch(lang);

    return Observable.create(observer => {
      if (observableBatch.length > 0) {
        Observable.forkJoin(observableBatch).subscribe(
          () => {
            let fullTranslation = this.getFullTranslationJSON(lang);
            if (fullTranslation) {
              observer.next(fullTranslation);
            }
            observer.complete();
          },
          (err: any) => {
            this.logService.error(err);
          });
      } else {
        let fullTranslation = this.getFullTranslationJSON(lang);
        if (fullTranslation) {
          observer.next(fullTranslation);
        }
      }
    });
  }
}
