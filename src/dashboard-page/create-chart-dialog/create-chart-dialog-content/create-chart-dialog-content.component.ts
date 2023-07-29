import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchemaService } from 'src/core/schema/schema.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ChartService } from 'src/core/chart/chart.service';
import { CHART_TYPES, INTERVAL_UNITS } from 'src/data/constants/chart.constants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'create-chart-dialog-content',
  templateUrl: './create-chart-dialog-content.component.html',
  styleUrls: ['./create-chart-dialog-content.component.css']
})
export class CreateChartDialogContentComponent {
  aggs: any;
  createChartForm: FormGroup;
  propertiesNames: any;
  properties: any;
  intervalUnits: string[];
  chartTypes: any;

  constructor(
    public dialogRef: MatDialogRef<CreateChartDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string, private schemaService: SchemaService,
    private _snackBar: MatSnackBar,
    private chartService: ChartService) {
    this.intervalUnits = INTERVAL_UNITS;
    this.chartTypes = CHART_TYPES;
    this.initForm();
  }
  initForm(chart?: any) {
    this.createChartForm = new FormGroup({
      selectedIntervalNumber: new FormControl(''),
      selectedChartType: new FormControl(chart && chart.option.value ? chart.option.value : ''),
      selectedProperty: new FormControl(''),
      selectedIntervalUnit: new FormControl(''),
    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  getSchema(value: any) {
    this.schemaService.getSchemaById(value).subscribe((val: any) => {
      this.properties = val.schema.properties;
      this.propertiesNames = Object.keys(val.schema.properties);
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
        this._snackBar.open('success creating chart', '',
          { duration: 3000, panelClass: "success-message" })

      }, ((error: any) => {
        this._snackBar.open('error creating chart', '',
          { duration: 3000, panelClass: "error-message" }
        )
      })
      );
  }

  getChartToCreate() {
    let chartToCreate: any = { chartType: this.getChartTypeValue() };
    if (this.isNotLineChart()) {
      chartToCreate['schemaProperty'] = this.createChartForm.get('selectedProperty')?.value
      chartToCreate['schemaPropertyType'] = this.properties[chartToCreate['schemaProperty']].type;
    } else {
      let fullInterval = this.getInterval();
      if (fullInterval)
        chartToCreate['interval'] = fullInterval;
    }
    return chartToCreate;
  }
  shouldEnable() {
   return this.getChartTypeValue() && (this.getInterval() || this.createChartForm.get('selectedProperty')?.value)
  }
  getInterval() {
    let interval = this.createChartForm.get('selectedIntervalNumber')?.value;
    let unit = this.createChartForm.get('selectedIntervalUnit')?.value;
    if (interval && unit) {
      return interval + unit;
    }
    return false;
  }
}
