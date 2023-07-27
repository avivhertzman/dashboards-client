import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchemaService } from 'src/core/schema/schema.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ChartService } from 'src/core/chart/chart.service';
import { CHART_TYPES, INTERVAL_UNITS } from 'src/data/constants/chart.constants';

@Component({
  selector: 'create-chart-dialog-content',
  templateUrl: './create-chart-dialog-content.component.html',
  styleUrls: ['./create-chart-dialog-content.component.css']
})
export class CreateChartDialogContentComponent {
  aggs: any;
  createChartForm: FormGroup;
  properties: any;
  intervalUnits: string[];
  chartTypes: any;

  constructor(
    public dialogRef: MatDialogRef<CreateChartDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string, private schemaService: SchemaService,
    private chartService: ChartService) {
    this.intervalUnits = INTERVAL_UNITS;
    this.chartTypes = CHART_TYPES;
    this.createChartForm = new FormGroup({
      selectedIntervalNumber: new FormControl(''),
      selectedChartType: new FormControl(''),
      selectedProperty: new FormControl(''),
      selectedIntervalUnit: new FormControl(''),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  getSchema(value: any) {
    this.schemaService.getSchemaById(value).subscribe((val: any) => {
      this.properties = Object.keys(val.schema.properties);
    }, (error: any) => {
      console.log(`there has been an error because of ${error}`)
    });
  }

  isNotLineChart() {
    let selectedChartType = this.getChartTypeValue();
    return selectedChartType == 'PIE' || selectedChartType == 'BAR';
  }
  getChartTypeValue() {
    let charTypeKey: string = this.createChartForm.get('selectedChartType')?.value;
    return (this.chartTypes as any)[charTypeKey as string];
  }

  createChart() {
    let chartToCreate: any = this.getChartToCreate();
    this.chartService.createChart(chartToCreate).
      subscribe((aggs: any) => {
        this.dialogRef.close(aggs);
      });
  }
  getChartToCreate() {
    let chartToCreate: any = { chartType: this.getChartTypeValue() };
    if (this.isNotLineChart()) {
      chartToCreate['schemaProperty'] = this.createChartForm.get('selectedProperty')?.value
    } else {
      let interval = this.createChartForm.get('selectedIntervalNumber')?.value;
      let unit = this.createChartForm.get('selectedIntervalUnit')?.value;
      if (interval && unit)
        chartToCreate['interval'] = interval + unit
    }
    return chartToCreate;
  }
}
