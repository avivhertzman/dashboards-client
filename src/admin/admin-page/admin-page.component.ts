import { Component, ViewChild } from '@angular/core';
import { SchemaService } from './services/schema.service';
import { TestEventComponent } from './test-event/test-event.component';


@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['/admin-page.component.css']
})
export class AdminPageComponent {
  @ViewChild('testEventRef', { static: false }) childComponentRef!: TestEventComponent;
  public refreshSchemas = false;
  constructor() {

  }
  public refreshScemasId() {
    if (this.childComponentRef) {
      this.childComponentRef.refreshSchemaIds();
    }

  }
}
