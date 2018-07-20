import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { HttpModule } from '@angular/http';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent, 
    ProductFilterPipe, 
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  imports: [BrowserModule, 
            FormsModule, 
            HttpModule,
            RouterModule.forRoot([
              {path: 'products', component: ProductListComponent},
              {path: 'product/:id', component: ProductDetailComponent},
              {path: 'welcome', component: WelcomeComponent},
              {path: '', redirectTo: 'welcome', pathMatch: 'full'},
              {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
            ]),
          ],
  providers: [ProductService],
  bootstrap: [AppComponent
    ]
})
export class AppModule { }
