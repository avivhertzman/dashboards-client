import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Config } from "./config";

@Injectable()
export class ConfigService {
    getSettings(): Observable<Config> {
        let settings = new Config();
        return of<Config>(settings);
    }
}