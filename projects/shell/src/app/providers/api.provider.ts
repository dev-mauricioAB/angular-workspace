import { HttpClient } from '@angular/common/http';

import { ApiService } from '../services/api.service';
import { ApiMockService } from '../mocks/api-mock.service';

import { environment } from '../../environments/environment';

const apiServiceFactory = (http: HttpClient) => {
  if (environment.useApiServiceMock) return new ApiMockService();

  return new ApiService(http);
};

export const ApiServiceProvider = {
  provide: ApiService,
  useFactory: apiServiceFactory,
  deps: [HttpClient],
};
