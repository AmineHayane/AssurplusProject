/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JustificatifsProduitComponent } from './justificatifs-produit.component';

describe('JustificatifsProduitComponent', () => {
  let component: JustificatifsProduitComponent;
  let fixture: ComponentFixture<JustificatifsProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustificatifsProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificatifsProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
