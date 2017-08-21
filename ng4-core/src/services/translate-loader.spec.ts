/*!
 * @license
 * Copyright 2017 DeveloperBhuwan.
 *
 */

import { Injector } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { LogService } from './log.service';
import { Ng4TranslateLoader } from './translate-loader.service';
import { TranslationService } from './translation.service';

let componentJson1 = ' {"TEST": "This is a test", "TEST2": "This is another test"} ' ;

const mockBackendResponse = (connection: MockConnection, response: string) => {
    connection.mockRespond(new Response(new ResponseOptions({body: response})));
};

describe('TranslateLoader', () => {
    let injector: Injector;
    let backend: any;
    let translationService: TranslationService;
    let connection: MockConnection; // this will be set when a new connection is emitted from the backend.
    let customLoader;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useClass: Ng4TranslateLoader
                    }
                })
            ],
            providers: [
                TranslationService,
                LogService,
                {provide: XHRBackend, useClass: MockBackend}
            ]
        });
        injector = getTestBed();
        backend = injector.get(XHRBackend);
        translationService = injector.get(TranslationService);
        backend.connections.subscribe((c: MockConnection) => connection = c);
        customLoader = translationService.translate.currentLoader;
    });

    it('should be able to provide any TranslateLoader', () => {
        expect(translationService).toBeDefined();
        expect(translationService.translate.currentLoader).toBeDefined();
        expect(translationService.translate.currentLoader instanceof Ng4TranslateLoader).toBeTruthy();
    });

    it('should add the component to the list', () => {
        customLoader.addComponentList('login', 'path/login');
        expect(customLoader.existComponent('login')).toBeTruthy();
    });

    it('should return the Json translation ', () => {
        customLoader.addComponentList('login', 'path/login');
        customLoader.getTranslation('en').subscribe(
            (response) => {
                expect(response).toBeDefined();
                expect(response).toEqual(JSON.parse(componentJson1));
            }
        );

        mockBackendResponse(connection, componentJson1);
    });

});
