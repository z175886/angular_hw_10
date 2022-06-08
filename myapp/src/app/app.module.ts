import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from '../../src/app/highlight.directive';

import { AppComponent } from './app.component';
import {ChildComponent } from './app.child';

@NgModule({
  declarations: [
    AppComponent,ChildComponent,HighlightDirective
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
