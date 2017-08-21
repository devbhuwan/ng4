/*!
 * @license
 * Copyright 2017 DeveloperBhuwan.
 *
 */

import { NgModule } from '@angular/core';
import { Ng4ComponentModule } from './components/buttons/component.module';

export function modules() {
    return [
        Ng4ComponentModule
    ];
}

@NgModule({
    imports: modules(),
    exports: modules()
})
export class Ng4CoreModule {
}
