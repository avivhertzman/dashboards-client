import { Component, ViewChild } from '@angular/core';
import { SchemaService } from 'src/admin/admin-page/services/schema.service';
import { map, startWith } from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { ChartItemsComponent } from './chart-items/chart-items.component';


@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  @ViewChild('chartItemsRef', { static: false }) childComponentRef!: ChartItemsComponent;
  constructor() { }
  addChartToDashboard(aggs: any) {
    this.childComponentRef.addChart(aggs);
  }
}
