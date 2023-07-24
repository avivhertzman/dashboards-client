import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminModule } from 'src/admin/admin.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/core/core.module';
import { ConfigService } from 'src/core/config/config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    AdminModule,
    CommonModule,
    CoreModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
