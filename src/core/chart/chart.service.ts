import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable()
export class ChartService {
    private serverUrl: string;
    private chartRoute = '/chart';
    private aggregationsRoute = '/aggregations';

    constructor(private config: ConfigService, private http: HttpClient) {
        this.config.getSettings().subscribe((setting: any) => {
            this.serverUrl = setting.serverUrl;
            console.log(this.serverUrl);
        });
    }
    createChart(chart: any) {
        return this.http.post(this.serverUrl + this.chartRoute, { chart });
    }
    getCharts() {
        return this.http.get(this.serverUrl + this.chartRoute + this.aggregationsRoute);
    }
}