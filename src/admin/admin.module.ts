import { NgModule } from '@angular/core';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateSchemaComponent } from './admin-page/create-schema/create-schema.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs'
import { CoreModule } from 'src/core/core.module';
import { SchemaService } from './admin-page/services/schema.service';
import { HttpClientModule } from '@angular/common/http';
import { SchemaEditorComponent } from './admin-page/create-schema/schema-editor/schema-editor.component';



@NgModule({
    declarations: [
        AdminPageComponent,
        CreateSchemaComponent,
        SchemaEditorComponent
    ],
    imports: [
        NgJsonEditorModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatTabsModule,
      //  CoreModule,
        HttpClientModule
    ],
    exports: [AdminPageComponent],
    // TODO: make this work
  //  providers: [SchemaService]
})
export class AdminModule { }