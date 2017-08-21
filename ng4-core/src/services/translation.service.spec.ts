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

const mockBackendResponse = (connection: MockConnection, response: string) => {
    connection.mockRespond(new Response(new ResponseOptions({body: response})));
};

describe('TranslationService', () => {
    let injector: Injector;
    let backend: any;
    let translationService: TranslationService;
    let connection: MockConnection; // this will be set when a new connection is emitted from the backend.

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
        translationService.addTranslationFolder('fake-name', 'fake-path');
    });

    it('is defined', () => {
        expect(translationService).toBeDefined();
        expect(translationService instanceof TranslationService).toBeTruthy();
    });

    it('should be able to get translations of the KEY: TEST', () => {
        translationService.get('TEST').subscribe((res: string) => {
            expect(res).toEqual('This is a test');
        });

        mockBackendResponse(connection, '{"TEST": "This is a test", "TEST2": "This is another test"}');
    });

    it('should be able to get translations of the KEY: TEST2', () => {
        translationService.get('TEST2').subscribe((res: string) => {
            expect(res).toEqual('This is another test');
        });

        mockBackendResponse(connection, '{"TEST": "This is a test", "TEST2": "This is another test"}');
    });

});
