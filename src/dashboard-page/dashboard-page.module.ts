import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CreateChartDialogComponent } from './create-chart-dialog/create-chart-dialog.component';
import { CreateChartDialogContentComponent } from './create-chart-dialog/create-chart-dialog-content/create-chart-dialog-content.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { AdminModule } from 'src/admin/admin.module';
import { ChartService } from 'src/core/chart/chart.service';
import { ChartItemsComponent } from './chart-items/chart-items.component';

@NgModule({
    declarations: [
        DashboardPageComponent,
        CreateChartDialogComponent,
        CreateChartDialogContentComponent,
        ChartItemsComponent,
    ],
    imports: [
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatDialogModule,
        AdminModule,
        NgxChartsModule
       // NgIf
    ],
    exports: [
        DashboardPageComponent 
    ],
    providers: [ChartService]
})
export class DashboardPageModule { }