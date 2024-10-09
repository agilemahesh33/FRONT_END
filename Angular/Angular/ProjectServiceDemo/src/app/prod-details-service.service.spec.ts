import { TestBed } from '@angular/core/testing';

import { ProdDetailsServiceService } from './prod-details-service.service';

describe('ProdDetailsServiceService', () => {
  let service: ProdDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
