import { Injectable } from '@angular/core';

import { Observable, of, delay } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiMockService {
  apiBaseUrl = '';

  constructor() {
    this.apiBaseUrl = environment.apiBaseUrl;
  }

  getAllModules(): Observable<any> {
    return of([{ key: 'value' }]).pipe(delay(3000));
  }
}
