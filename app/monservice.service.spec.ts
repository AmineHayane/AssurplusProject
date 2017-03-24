/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MonserviceService } from './monservice.service';

describe('MonserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonserviceService]
    });
  });

  it('should ...', inject([MonserviceService], (service: MonserviceService) => {
    expect(service).toBeTruthy();
  }));
});
