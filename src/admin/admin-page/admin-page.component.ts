import { Component, ViewChild } from '@angular/core';
import { TestEventComponent } from './test-event/test-event.component';

@Component({
  selector: 'admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['/admin-page.component.css']
})

export class AdminPageComponent {
  @ViewChild('testEventRef', { static: false }) testEventRef!: TestEventComponent;

  constructor() {
  }

  public refreshScemasId() {
    if (this.testEventRef) {
      this.testEventRef.refreshSchemaIds();
    }

  }
}
