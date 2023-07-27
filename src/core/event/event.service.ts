import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable()
export class EventService {
    private serverUrl!: string;
    private EVENT_ROUTE = '/event';

    constructor(private config: ConfigService, private http: HttpClient) {
        this.config.getSettings().subscribe((setting: any) => {
            this.serverUrl = setting.serverUrl;
            console.log(this.serverUrl);
        });
    }
    createEvent(event: any) {
        return this.http.post(this.serverUrl + this.EVENT_ROUTE, { event });
    }
}