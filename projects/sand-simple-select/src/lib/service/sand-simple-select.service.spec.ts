import { TestBed } from '@angular/core/testing';

import { SandSimpleSelectService } from './sand-simple-select.service';

describe('SandSimpleSelectService', () => {
  let service: SandSimpleSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandSimpleSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
