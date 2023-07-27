import { Component, ViewChild } from '@angular/core';
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
