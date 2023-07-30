import { Component, Input, EventEmitter, Output } from '@angular/core';
import { JsonEditorOptions } from 'ang-jsoneditor';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'schema-editor',
  templateUrl: './schema-editor.component.html',
  styleUrls: ['./schema-editor.component.css']
})
export class SchemaEditorComponent {
  @Input() disableCreate: boolean = false;
  @Input() schemaToCreate: any;
  @Output() disableCreateChange = new EventEmitter<boolean>();
  @Output() schemaToCreateChange = new EventEmitter<object>();
  editorOptions!: JsonEditorOptions;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      schemaInput: [this.schemaToCreate]
    });
    this.initEditorOptions();

  }

  handleFormError(errors: object[]) {
    if (errors.length == 0) {
      this.disableCreateChange.emit(false);
    }
    else {
      this.disableCreateChange.emit(true);
    }
  }

  onChange() {
    this.schemaToCreateChange.emit(this.form.value.schemaInput);
  }

  private initEditorOptions() {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.mode = 'code';
    this.editorOptions.onValidationError = this.handleFormError.bind(this);
  }
}
