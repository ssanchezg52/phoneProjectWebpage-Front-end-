import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {MatDialogModule} from '@angular/material/dialog';
import { DialogInfoMobileComponent } from './dialog-info-mobile/dialog-info-mobile.component';
import {MatButtonModule} from '@angular/material/button';
import { DialogComparePhonesComponent } from './dialog-compare-phones/dialog-compare-phones.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraphCompareMobilesComponent } from './graph-compare-mobiles/graph-compare-mobiles.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


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
    MobileFiltersComponent,
    DialogInfoMobileComponent,
    DialogComparePhonesComponent,
    GraphCompareMobilesComponent,
    LoadingSpinnerComponent,
    SignInComponent,
    SignUpComponent
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
    NgxSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    NgxChartsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
