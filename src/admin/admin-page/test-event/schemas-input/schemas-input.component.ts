import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() schemaId = '';
  @Output() schemaIdChange = new EventEmitter();
 
  @Output() newItemEvent = new EventEmitter();

  public idsOptions!: string[];
  public filteredOptions!: any;
  public myControl = new FormControl('');


  constructor(private schemaService: SchemaService) {

  }
  ngOnInit(): void {
    this.schemaService.getAllSchemasIds().subscribe((val: string[]) => {
      this.idsOptions = val;
    })
  }
  changeId(value: any) {
    this.newItemEvent.emit(value);

   // this.schemaIdChange.emit(this.myControl.value || '');
  }
}