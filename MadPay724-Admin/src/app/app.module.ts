import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { PanelModule } from './panel/panel.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    LoginModule,
    PanelModule,
    AppRoutingModule
    // RouterModule.forRoot(adminRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
