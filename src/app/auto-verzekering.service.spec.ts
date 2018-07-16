import { TestBed, inject } from '@angular/core/testing';

import { AutoVerzekeringService } from './auto-verzekering.service';

describe('AutoVerzekeringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutoVerzekeringService]
    });
  });

  it('should be created', inject([AutoVerzekeringService], (service: AutoVerzekeringService) => {
    expect(service).toBeTruthy();
  }));
});
