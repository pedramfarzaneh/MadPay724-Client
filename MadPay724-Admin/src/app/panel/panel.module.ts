import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { panelRoute } from './routes/routes.routing';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(panelRoute)
  ],
  declarations: [PanelComponent],
})
export class PanelModule { }
