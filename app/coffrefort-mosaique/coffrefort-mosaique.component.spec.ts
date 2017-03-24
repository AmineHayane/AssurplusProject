/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoffrefortMosaiqueComponent } from './coffrefort-mosaique.component';

describe('CoffrefortMosaiqueComponent', () => {
  let component: CoffrefortMosaiqueComponent;
  let fixture: ComponentFixture<CoffrefortMosaiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffrefortMosaiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffrefortMosaiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
