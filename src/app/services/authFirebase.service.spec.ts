import { TestBed } from '@angular/core/testing';

import { AuthFirebaseService } from './authFirebase.service';

describe('FirebaseloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthFirebaseService = TestBed.get(AuthFirebaseService);
    expect(service).toBeTruthy();
  });
});
