import {
  CanActivateFn,
} from '@angular/router';
import { inject } from '@angular/core';

import { EnvironmentService } from '../services/environment.service';

export const environmentGuard: CanActivateFn = () => inject(EnvironmentService).canActivate();
