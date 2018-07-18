import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AutoVerzekeringService } from './auto-verzekering.service';

describe('AutoVerzekeringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [AutoVerzekeringService]
    });
  });

  it('should be created', inject([AutoVerzekeringService], (service: AutoVerzekeringService) => {
    expect(service).toBeTruthy();
  }));
});
