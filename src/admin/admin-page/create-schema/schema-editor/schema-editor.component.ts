import { Component, Input, EventEmitter, Output } from '@angular/core';
import { JsonEditorOptions } from 'ang-jsoneditor';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'schema-editor',
  templateUrl: './schema-editor.component.html',
  styleUrls: ['./schema-editor.component.css']
})
export class SchemaEditorComponent {
  @Input() disableCreate = false;
  @Output() disableCreateChange = new EventEmitter<boolean>();
  
  public editorOptions: JsonEditorOptions;
  @Input() schemaToCreate: any;
  @Output() schemaToCreateChange = new EventEmitter<object>();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.schemaToCreate =
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
      schemaInput: [this.schemaToCreate]
    });

    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.mode = 'code';
    this.editorOptions.onValidationError = this.handleFormError.bind(this);
  }

  // TODO: maybe replace this function
  handleFormError(errors: object[]) {
    if (errors.length == 0) {
      this.disableCreateChange.emit(false);
    }
    else {
      this.disableCreateChange.emit(true);
    }
  }

  createSchema() {
    console.log(this.form.value.schemaInput)
  }

  onChange() {
    this.schemaToCreateChange.emit(this.form.value.schemaInput);
  }
}
