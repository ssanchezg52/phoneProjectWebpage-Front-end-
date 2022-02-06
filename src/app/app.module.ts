import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { BodyCardsPhonesComponent } from './body-cards-phones/body-cards-phones.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PhoneListComponent } from './phoneList/phoneList.component';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavTopComponent } from './nav-top/nav-top.component';
import { FooterComponent } from './footer/footer.component';
import { MobileFiltersComponent } from './mobile-filters/mobile-filters.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    TarjetasComponent,
    BodyCardsPhonesComponent,
    SidenavComponent,
    PhoneListComponent,
    HomeComponent,
    NavTopComponent,
    FooterComponent,
    MobileFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
    BrowserAnimationsModule, 
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
