import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ProductSliderComponent } from './common/product-slider/product-slider.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { ProductCardEditorComponent } from './common/product-card-editor/product-card-editor.component';
import { AdminComponent } from './page/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductListComponent,
    FilterPipe,
    ProductSliderComponent,
    ProductCardComponent,
    FooterComponent,
    SorterPipe,
    AdminComponent,
    DataEditorComponent,
    ProductCardEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
