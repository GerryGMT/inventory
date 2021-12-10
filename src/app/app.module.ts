import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './header/header.component';
import { MatComponentsModule } from './mat-components.module';

import { HttpClientModule } from '@angular/common/http';

const config = {};
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AddComponent,
    ViewComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatComponentsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
