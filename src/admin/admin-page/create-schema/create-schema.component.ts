import { Component, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'create-schema',
  templateUrl: './create-schema.component.html',
  styleUrls: ['/create-schema.component.css']
})
export class CreateSchemaComponent {
  public editorOptions: JsonEditorOptions;
  public data: any;
  public form: FormGroup;
  public disableCreate = false;

  constructor(private fb: FormBuilder) {
    this.data =
    {
      "$id": "https://example.com/person.schema.json",
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "title": "Person",
      "type": "object",
      "properties": {
        "firstName": {
          "type": "string",
          "description": "The person's first name."
        },
        "lastName": {
          "type": "string",
          "description": "The person's last name."
        }
      }
    }
    this.form = this.fb.group({
      schemaInput: [this.data]
    });

    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['code'];
    this.editorOptions.onValidationError = this.handleFormError.bind(this);
  }
  
  handleFormError(errors: object[]) {
    if (errors.length == 0) {
      this.disableCreate = false;
    }
    else {
      this.disableCreate = true;
    }
  }

  createSchema() {
    console.log(this.form.value.schemaInput)

  }
}
