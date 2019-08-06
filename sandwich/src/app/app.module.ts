import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BanComponent } from './userpage/ban/ban.component';
import { EditorschoiceComponent } from './userpage/editorschoice/editorschoice.component';
import { ViewallbansComponent } from './userpage/viewallbans/viewallbans.component';

@NgModule({
  declarations: [
    AppComponent,
    BanComponent,
    EditorschoiceComponent,
    ViewallbansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
