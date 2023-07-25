import { Component } from '@angular/core';
import { SchemaService } from '../services/schema.service';
import { EventService } from 'src/core/event/event.service';

@Component({
  selector: 'test-event',
  templateUrl: './test-event.component.html',
  styleUrls: ['./test-event.component.css']
})

export class TestEventComponent {
  public selectedId: string;
  public schema: any;
  constructor(private schemaService: SchemaService, private eventService: EventService) {
    this.selectedId = "";
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
      console.log(val);
    }, (error: any) => {
      console.log(`there has been an error because of ${error}`)
    });
  }

}
