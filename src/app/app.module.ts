import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageoneComponent } from './components/common/pageone/pageone.component';
import { PagetwoComponent } from './components/common/pagetwo/pagetwo.component';
import { PagethreeComponent } from './components/common/pagethree/pagethree.component';
import { PagefourComponent } from './components/common/pagefour/pagefour.component';
import { PagefiveComponent } from './components/common/pagefive/pagefive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    PagefourComponent,
    PagefiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
