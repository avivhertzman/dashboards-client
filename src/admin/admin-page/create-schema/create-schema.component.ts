import { Component, Output, EventEmitter } from '@angular/core';
import { SchemaService } from '../../../core/schema/schema.service';


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
          this.success = true;
          this.schemaName = val.name;
          this.schemaCreatedEvent.emit();
        }
      );
  }
}
