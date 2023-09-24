import { Injectable, inject } from '@angular/core';

import { lastValueFrom } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor(
    private api: ApiService,
  ) { }

  async canActivate(): Promise<boolean> {
    const apiSub$ = this.api.getAllModules()

    apiSub$.subscribe({
      next: manifest => {
        console.log('manifest >>>', manifest);
      }
    })

    await lastValueFrom(apiSub$)

    return true;
  }

  canMatch(currentUser: any): boolean {
    return true;
  }
}
