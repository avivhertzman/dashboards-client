import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { CHART_ROUTE, AGGREGATIONS_ROUTE } from 'src/data/constants/chart.constants';

@Injectable()
export class ChartService {
    private serverUrl!: string;

    constructor(private config: ConfigService, private http: HttpClient) {
        this.config.getSettings().subscribe((setting: any) => {
            this.serverUrl = setting.serverUrl;
            console.log(this.serverUrl);
        });
    }
    createChart(chart: any) {
        return this.http.post(this.serverUrl + CHART_ROUTE, { chart });
    }
    getCharts() {
        return this.http.get(this.serverUrl + CHART_ROUTE + AGGREGATIONS_ROUTE);
    }
}