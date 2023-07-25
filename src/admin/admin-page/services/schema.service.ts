import { Injectable } from "@angular/core";
import { AdminModule } from 'src/admin/admin.module';
import { ConfigService } from 'src/core/config/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SchemaService {
    private SCHEMAS_ROUTE = '/event-schema'
    private serverUrl: string = '';

    constructor(private config: ConfigService, private http: HttpClient) {
        this.config.getSettings().subscribe((setting: any) => {
            this.serverUrl = setting.serverUrl;
            console.log(this.serverUrl);
        }
        );

    }
    createSchema(schema: object) {
        return this.http.post<object>(this.serverUrl + this.SCHEMAS_ROUTE, { schema })
    }
    getAllSchemasIds() {
        return this.http.get<string[]>(this.serverUrl + this.SCHEMAS_ROUTE + "?field=id");
    }
    getSchemaById(id: string) {
        return this.http.get<object>(this.serverUrl + this.SCHEMAS_ROUTE + "/" + id);
    }
}