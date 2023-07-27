import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ChartService } from 'src/core/chart/chart.service';

@Component({
  selector: 'chart-items',
  templateUrl: './chart-items.component.html',
  styleUrls: ['./chart-items.component.css']
})
export class ChartItemsComponent implements OnInit {
  public termsCharts: any[] = [];
  public dateCharts: any[] = [];
  public Charts: any[] = [];
  public mapping: any = [];
  public avivv = "hiii";
  view: [number, number] = [500, 300];
  public aggs: any;
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#723141', '#C27085', '#E7C6CE', 'F9F1F3'],
  };
  constructor(private chartService: ChartService) {
  }
  ngOnInit(): void {
    this.chartService.getCharts().subscribe((chartsResponse: any) => {
      if (Object.keys(chartsResponse).length != 0) {
        this.mapping = chartsResponse.mapping;
        this.initChartsData(chartsResponse)
      }
      // this.charts = charts.aggregations;
    });
  }
  initChartsData(chartsResponse: any) {
    this.termsCharts = chartsResponse.aggregations;
    this.termsCharts = this.termsCharts.reduce((result: any[], elem: any) => {
      if (this.mapping[Object.keys(elem)[0]] === 'LINE') {
        this.dateCharts.push({ name: Object.keys(elem)[0], series: Object.values(elem)[0] })
      }
      else {
        result.push(elem)
      }
      return result;
    }, []);
  }

  addChart(result: any) {
    console.log(result);
    if (Object.values(result.mapping)[0] == 'LINE') {
      this.dateCharts.push({
        name: Object.keys(result.mapping)[0], series: Object.values(result.aggregations[0])[0]
      });
    } else {
      this.termsCharts.push(...result.aggregations);
    }
   // this.mapping.push(...result.mapping);
    this.mapping[Object.keys(result.mapping)[0]] = Object.values(result.mapping)[0] ;
  }
  public getItem(key: any) {
    return key;
  }
  isPie(aggKey: any) {
    return this.mapping && this.mapping[aggKey] && this.mapping[aggKey].toUpperCase() == 'PIE'
  }
  isBar(aggKey: any) {
    return this.mapping && this.mapping[aggKey] && this.mapping[aggKey].toUpperCase() == 'BAR'
  }
  isLine(aggKey: any) {
    return this.mapping && this.mapping[aggKey] && this.mapping[aggKey].toUpperCase() == 'LINE'
  }
}
