import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { ApplyComponent } from './vacancies/apply/apply.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthService} from './auth.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ScrollDownComponent } from './landing-page/scroll-down/scroll-down.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollbarComponent } from './shared/scrollbar/scrollbar.component';
import { ApplyLoaderComponent } from './shared/apply-loader/apply-loader.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VacanciesComponent,
    ApplyComponent,
    LandingPageComponent,
    ScrollDownComponent,
    FooterComponent,
    ScrollbarComponent,
    ApplyLoaderComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
