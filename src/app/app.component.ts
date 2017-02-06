import { Component } from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent  { name = 'Angular'; }
