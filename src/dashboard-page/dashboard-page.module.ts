import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page.component';
import { CreateChartDialogComponent } from './create-chart-dialog/create-chart-dialog.component';
import { CreateChartDialogContentComponent } from './create-chart-dialog/create-chart-dialog-content/create-chart-dialog-content.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartItemsComponent } from './chart-items/chart-items.component';
import { SharedModule } from 'src/shared/shared.module';
import { AdminModule } from 'src/admin/admin.module';

@NgModule({
    declarations: [
        DashboardPageComponent,
        CreateChartDialogComponent,
        CreateChartDialogContentComponent,
        ChartItemsComponent,
    ],
    imports: [
        SharedModule,
        AdminModule,
        NgxChartsModule
    ],
    exports: [
        DashboardPageComponent 
    ],
    providers: []
})
export class DashboardPageModule { }