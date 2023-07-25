import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

import { Config } from "./config";
import { CoreModule } from '../core.module';

@Injectable()
export class ConfigService {
    getSettings(): Observable<Config> {
        let settings = new Config();
        return of<Config>(settings);
    }
}