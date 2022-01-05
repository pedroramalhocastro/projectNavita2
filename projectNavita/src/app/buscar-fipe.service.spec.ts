import { TestBed } from '@angular/core/testing';

import { BuscarFipeService } from './buscar-fipe.service';

describe('BuscarFipeService', () => {
  let service: BuscarFipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarFipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
