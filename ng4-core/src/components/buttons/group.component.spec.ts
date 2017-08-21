/*!
 * @license
 * Copyright 2017 DeveloperBhuwan.
 *
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupComponent } from './group.component';

describe('GroupComponent', () => {

    let fixture: ComponentFixture<GroupComponent>;
    let component: GroupComponent;
    let element: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GroupComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GroupComponent);

        element = fixture.nativeElement;
        component = fixture.componentInstance;

    });

    it('should be yellow background', () => {
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            let headerText = element.querySelector('#component-text');
            expect(headerText.innerText).toEqual('GROUP');
        });
    });

});
