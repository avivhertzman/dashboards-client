import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ChartService } from 'src/core/chart/chart.service';
import { PIE_CHART_TYPE, LINE_CHART_TYPE, CHART_MEASURMENTS_HIGHT, CHART_MEASURMENTS_WIDTH, CHART_COLORS, BAR_CHART_TYPE } from "../../data/constants/chart.constants";

@Component({
  selector: 'chart-items',
  templateUrl: './chart-items.component.html',
  styleUrls: ['./chart-items.component.css']
})
export class ChartItemsComponent implements OnInit {
  termsCharts: any[] = [];
  dateCharts: any[] = [];
  Charts: any[] = [];
  mapping: any = [];
  view: [number, number] = [CHART_MEASURMENTS_HIGHT, CHART_MEASURMENTS_WIDTH];
  aggs: any;
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: CHART_COLORS,
  };
  constructor(private chartService: ChartService) {
  }
  ngOnInit(): void {
    this.chartService.getCharts().subscribe((chartsResponse: any) => {
      if (Object.keys(chartsResponse).length != 0) {
        this.mapping = chartsResponse.mapping;
        this.initChartsData(chartsResponse)
      }
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
    if (Object.values(result.mapping)[0] == LINE_CHART_TYPE) {
      this.dateCharts.push({
        name: Object.keys(result.mapping)[0], series: Object.values(result.aggregations[0])[0]
      });
    } else {
      this.termsCharts.push(...result.aggregations);
    }
    this.mapping[Object.keys(result.mapping)[0]] = Object.values(result.mapping)[0];
  }
  getItem(key: any) {
    return key;
  }
  isPie(aggKey: any) {
    return this.mapping && this.mapping[aggKey] && this.mapping[aggKey].toUpperCase() == PIE_CHART_TYPE
  }
  isBar(aggKey: any) {
    return this.mapping && this.mapping[aggKey] && this.mapping[aggKey].toUpperCase() == BAR_CHART_TYPE
  }
  isLine(aggKey: any) {
    return this.mapping && this.mapping[aggKey] && this.mapping[aggKey].toUpperCase() == LINE_CHART_TYPE
  }
}
