import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import {DictionaryService} from './services/dictionary.service';
import {FormsModule} from '@angular/forms';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { HomeComponent } from './home/home.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    TimelinesComponent,
    HomeComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
