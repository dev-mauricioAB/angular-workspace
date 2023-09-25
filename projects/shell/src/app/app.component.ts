import { Component } from '@angular/core';
import { EnvironmentService } from './services/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';

  isLoading = true;

  constructor(private environmentService: EnvironmentService) {
    this.environmentService.canActivate()
      .then(() => {
        this.isLoading = false;
      });
  }
}
