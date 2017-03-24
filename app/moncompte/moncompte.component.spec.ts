/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoncompteComponent } from './moncompte.component';

describe('MoncompteComponent', () => {
  let component: MoncompteComponent;
  let fixture: ComponentFixture<MoncompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoncompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoncompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
