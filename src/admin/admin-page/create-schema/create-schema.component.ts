import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SchemaService } from '../services/schema.service';


@Component({
  selector: 'create-schema',
  templateUrl: './create-schema.component.html',
  styleUrls: ['/create-schema.component.css']
})
export class CreateSchemaComponent {
  @Output() schemaCreatedEvent = new EventEmitter<boolean>();
  public isDisabled = false;
  public schema: any;
  public schemaName: string = '';
  public success = false;
  constructor(private schemaService: SchemaService) {
  }

  async createSchema() {
    this.schemaService.createSchema({ schema: this.schema })
      .subscribe(
        (val: any) => {
          // TODO: turn this to material modal
          this.success = true;
          this.schemaName = val.name;
          this.schemaCreatedEvent.emit();
        },
        (response: any) => {
          console.log("PUT call in error", response);
        },
        () => {
          console.log("The PUT observable is now completed.");
        }
      );
  }
}
