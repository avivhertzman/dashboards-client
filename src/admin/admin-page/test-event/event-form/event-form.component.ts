import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
// import { Subject } from 'rxjs/dist/types/internal/Subject';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { HttpClient } from '@angular/common/http';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  @Input() schemaId1!: string;
  @Output() sendEvent = new EventEmitter();
  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];

  constructor(private formlyJsonschema: FormlyJsonschema, private http: HttpClient) {
  }
  ngOnChanges(changes: SimpleChanges) {

    if (changes['schemaId1'].currentValue) {
      this.loadSchema(changes['schemaId1'].currentValue);
    }
  }

  loadSchema(schema: any) {
    this.form = new FormGroup({});
    this.options = {};
    this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
    //  this.model = model;
  }

  submit() {
    this.sendEvent.emit(this.form.value);
    alert(JSON.stringify(this.form.value));
  }
}
