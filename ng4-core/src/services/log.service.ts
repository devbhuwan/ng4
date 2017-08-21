/*!
 * @license
 * Copyright 2017 DeveloperBhuwan.
 *
 */

import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    get assert(): (message?: any, ...optionalParams: any[]) => void {
        return console.assert.bind(console);
    }

    get error(): (message?: any, ...optionalParams: any[]) => void {
        return console.error.bind(console);
    }

    get group(): (message?: any, ...optionalParams: any[]) => void {
        return console.group.bind(console);
    }

    get groupEnd(): (message?: any, ...optionalParams: any[]) => void {
        return console.groupEnd.bind(console);
    }

    get info(): (message?: any, ...optionalParams: any[]) => void {
        return console.info.bind(console);
    }

    get log(): (message?: any, ...optionalParams: any[]) => void {
        return console.log.bind(console);
    }

    get warn(): (message?: any, ...optionalParams: any[]) => void {
        return console.warn.bind(console);
    }

}

export class LogServiceMock {

    assert(message?: any, ...optionalParams: any[]) {}
    error(message?: any, ...optionalParams: any[]) {}
    group(message?: any, ...optionalParams: any[]) {}
    groupEnd(message?: any, ...optionalParams: any[]) {}
    info(message?: any, ...optionalParams: any[]) {}
    log(message?: any, ...optionalParams: any[]) {}
    warn(message?: any, ...optionalParams: any[]) {}

}
