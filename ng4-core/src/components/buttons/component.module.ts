/*!
 * @license
 * Copyright 2017 DeveloperBhuwan.
 *
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GroupComponent } from './group.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        GroupComponent
    ],
    exports: [
        GroupComponent
    ]
})
export class Ng4ComponentModule {
}
