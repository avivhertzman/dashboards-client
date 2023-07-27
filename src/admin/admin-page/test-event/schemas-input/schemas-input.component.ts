import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import { SchemaService } from 'src/admin/admin-page/services/schema.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'schemas-input',
  templateUrl: './schemas-input.component.html',
  styleUrls: ['./schemas-input.component.css']
})
export class SchemasInputComponent implements OnInit {
  @Input() shouldRefreshSchemas = false;
  @Output() changeIdEvent = new EventEmitter();

  public idsOptions!: string[];
  public filteredOptions!: any;
  public myControl = new FormControl('');


  constructor(private schemaService: SchemaService) {

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
