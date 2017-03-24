/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoffrefortComponent } from './coffrefort.component';

describe('CoffrefortComponent', () => {
  let component: CoffrefortComponent;
  let fixture: ComponentFixture<CoffrefortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffrefortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffrefortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
