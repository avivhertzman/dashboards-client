import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminModule } from 'src/admin/admin.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/core/core.module';
import { ConfigService } from 'src/core/config/config.service';
import { DashboardPageModule } from 'src/dashboard-page/dashboard-page.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { EventService } from 'src/core/event/event.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    MatSlideToggleModule,
    CommonModule,
    DashboardPageModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
     //FormlyModule.forRoot(),
    AdminModule
  ],
  providers: [ConfigService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
