import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { SCHEMA_ID_PROPERTY } from "../../../../data/constants/schema.constants"

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  @Input() schemaId!: string;
  @Output() sendEvent = new EventEmitter();
  form!: FormGroup;
  fields!: FormlyFieldConfig[];

  constructor(private formlyJsonschema: FormlyJsonschema) {
  }
  ngOnChanges(changes: SimpleChanges) {
    const schemaIdChanges = changes[SCHEMA_ID_PROPERTY];
    if (schemaIdChanges.currentValue) {
      this.loadSchema(schemaIdChanges.currentValue);
    }
  }

  loadSchema(schema: any) {
    this.form = new FormGroup({});
    this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
  }

  submit() {
    this.sendEvent.emit(this.form.value);
  }
}
