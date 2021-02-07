import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { BooleanfilterPipe } from './pipe/booleanfilter.pipe';
import { CategoryfilterPipe } from './pipe/categoryfilter.pipe';
import { FormsModule } from '@angular/forms';
import { Random5Pipe } from './pipe/random5.pipe';


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
    BooleanfilterPipe,
    CategoryfilterPipe,
    Random5Pipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
