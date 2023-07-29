import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import { SchemaService } from 'src/core/schema/schema.service';

@Component({
  selector: 'schemas-input',
  templateUrl: './schemas-input.component.html',
  styleUrls: ['./schemas-input.component.css']
})
export class SchemasInputComponent implements OnInit {
  @Input() shouldRefreshSchemas: boolean;
  @Input() required: boolean;
  @Output() changeIdEvent: EventEmitter<any>;
  public idsOptions!: string[];
  public filteredOptions!: any;

  constructor(private schemaService: SchemaService) {
    this.changeIdEvent = new EventEmitter();
    this.shouldRefreshSchemas = false;
  }
  ngOnInit(): void {
    this.refreshSchemas();

  }
  refreshSchemas() {
    this.schemaService.getAllSchemasIds().subscribe((val: string[]) => {
      this.idsOptions = val;
    })
  }
  changeId(value: any) {
    this.changeIdEvent.emit(value);
  }
}
