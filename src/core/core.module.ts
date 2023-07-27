import { NgModule } from '@angular/core';
import { EventService } from './event/event.service';
import { ConfigService } from './config/config.service';
import { ChartService } from './chart/chart.service';
import { SchemaService } from './schema/schema.service';

@NgModule({
    providers: [EventService, ConfigService, ChartService, SchemaService]
})
export class CoreModule { }
