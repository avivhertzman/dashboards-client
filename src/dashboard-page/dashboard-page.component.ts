import { Component } from '@angular/core';
import { SchemaService } from 'src/admin/admin-page/services/schema.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: []
})
export class DashboardPageComponent {
}
