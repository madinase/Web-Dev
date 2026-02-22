import {Component, inject} from '@angular/core';
import {CarService} from './InjectableService';

@Component({
  selector: 'app-root',
  template: '<p> {{ carService.getCars() }} </p>',
})
export class App {
  carService = inject(CarService);
}
