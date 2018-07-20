import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Practice App';
}
