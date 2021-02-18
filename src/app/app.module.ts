import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      ReactiveFormsModule,
      NgBootstrapFormValidationModule.forRoot(),
      NgBootstrapFormValidationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
