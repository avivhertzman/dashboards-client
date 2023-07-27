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
import { TestEventComponent } from './admin-page/test-event/test-event.component';
import { SchemasInputComponent } from './admin-page/test-event/schemas-input/schemas-input.component';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EventFormComponent } from './admin-page/test-event/event-form/event-form.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ObjectTypeComponent } from './admin-page/test-event/event-form/schema-types/types/object.type';
import { SchemaTypesModule } from './admin-page/test-event/event-form/schema-types/schema-types.module';
import { ArrayTypeComponent } from './admin-page/test-event/event-form/schema-types/types/array.type';

export function typeValidationMessage({ schemaType }: any) {
  return `should be "${schemaType[0]}".`;
}

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
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatAutocompleteModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    FormlyMaterialModule,
    SchemaTypesModule,
    FormlyModule
  ],
  exports: [AdminPageComponent, CommonModule, SchemasInputComponent],
  // TODO: make this work
  //  providers: [SchemaService]
})
export class AdminModule { }