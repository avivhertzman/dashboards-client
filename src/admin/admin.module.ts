import { NgModule } from '@angular/core';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {CreateSchemaComponent} from './admin-page/create-schema/create-schema.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs'



@NgModule({
    declarations: [
        AdminPageComponent,
        CreateSchemaComponent
    ],
    imports: [
        NgJsonEditorModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatTabsModule
    ],
    exports: [AdminPageComponent],
    providers: [],
  })
  export class AdminModule { }