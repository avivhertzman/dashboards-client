import { Injectable } from "@angular/core";
import { ConfigService } from 'src/core/config/config.service';
import { HttpClient } from '@angular/common/http';
import { SCHEMAS_ROUTE, FIELD_QUERY_PARAM, URL_SEPERATOR } from 'src/data/constants/schema.constants';

@Injectable()
export class SchemaService {
    private serverUrl: string = '';

    constructor(private config: ConfigService, private http: HttpClient) {
        this.config.getSettings().subscribe((setting: any) => {
            this.serverUrl = setting.serverUrl;
            console.log(this.serverUrl);
        }
        );

    }
    createSchema(schema: object) {
        return this.http.post<object>(this.serverUrl + SCHEMAS_ROUTE, { schema })
    }
    getAllSchemasIds() {
        return this.http.get<string[]>(this.serverUrl + SCHEMAS_ROUTE + FIELD_QUERY_PARAM);
    }
    getSchemaById(id: string) {
        return this.http.get<object>(this.serverUrl + SCHEMAS_ROUTE + URL_SEPERATOR + id);
    }
}