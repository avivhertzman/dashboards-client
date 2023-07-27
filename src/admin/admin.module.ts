import { NgModule } from '@angular/core';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateSchemaComponent } from './admin-page/create-schema/create-schema.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs'
import { CoreModule } from 'src/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SchemaEditorComponent } from './admin-page/create-schema/schema-editor/schema-editor.component';
import { TestEventComponent } from './admin-page/test-event/test-event.component';
import { SchemasInputComponent } from './admin-page/test-event/schemas-input/schemas-input.component';
import { SchemaTypesModule } from './admin-page/test-event/event-form/schema-types/schema-types.module';
import { SharedModule } from 'src/shared/shared.module';
import { EventFormComponent } from './admin-page/test-event/event-form/event-form.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    CreateSchemaComponent,
    SchemaEditorComponent,
    TestEventComponent,
    SchemasInputComponent,
    TestEventComponent,
    EventFormComponent,
  ],
  imports: [
    CoreModule,
    NgJsonEditorModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    SchemaTypesModule,
     SharedModule
  ],
  exports: [AdminPageComponent, SchemasInputComponent],
})
export class AdminModule { }