import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { SchemaService } from '../services/schema.service';
import { EventService } from 'src/core/event/event.service';
import { SchemasInputComponent } from './schemas-input/schemas-input.component';

@Component({
  selector: 'test-event',
  templateUrl: './test-event.component.html',
  styleUrls: ['./test-event.component.css']
})

export class TestEventComponent {
  @ViewChild('schemaInputRef', { static: false }) childComponentRef!: SchemasInputComponent;

  @Input() public refreshShcema: boolean = false;
  public shouldRefresh = false;
  public schema: any;
  public createSuccess = false;
  constructor(private schemaService: SchemaService, private eventService: EventService) {
  }
  
  getSchema(value: any) {
    this.schemaService.getSchemaById(value).subscribe((val: any) => {
      this.schema = val.schema;
    }, (error: any) => {
      console.log(`there has been an error because of ${error}`)
    });
  }
  createEvent(event: any) {
    this.eventService.createEvent(event).subscribe((val: any) => {
      this.handleSuccessCreate();
    }, (error: any) => {
      console.log(`there has been an error because of ${error}`)
    });
  }
 
  refreshSchemaIds() {
    this.childComponentRef.refreshSchemas();
  }
  
  private handleSuccessCreate() {
    this.createSuccess = true;
  }
}
