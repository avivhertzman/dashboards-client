import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchemaService } from 'src/admin/admin-page/services/schema.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ChartService } from 'src/core/chart/chart.service';

@Component({
  selector: 'create-chart-dialog-content',
  templateUrl: './create-chart-dialog-content.component.html',
  styleUrls: ['./create-chart-dialog-content.component.css']
})
export class CreateChartDialogContentComponent {
  public aggs: any;
  
  createChartForm = new FormGroup({
    selectedIntervalNumber: new FormControl(''),
    selectedChartType: new FormControl(''),
    selectedProperty: new FormControl(''),
    selectedIntervalUnit: new FormControl(''),
  });
  public properties: any;
  public charTypes = ["BAR", "LINE", "PIE"];
  public intervalUnits = ['d', 'h', 'm'];
  constructor(
    public dialogRef: MatDialogRef<CreateChartDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string, private schemaService: SchemaService,
    private chartService: ChartService) { }

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
    let selectedChartType = this.createChartForm.get('selectedChartType')?.value;
    return selectedChartType == 'PIE' || selectedChartType == 'BAR';
  }
  createChart() {
    let chartToCreate;
    if (this.isNotLineChart()) {
      chartToCreate = { chartType: this.createChartForm.get('selectedChartType')?.value, 
      schemaProperty: this.createChartForm.get('selectedProperty')?.value }
    } else {
      let interval = this.createChartForm.get('selectedIntervalNumber')?.value;
      let unit = this.createChartForm.get('selectedIntervalUnit')?.value;
      if (interval && unit)
      chartToCreate = {
        chartType: this.createChartForm.get('selectedChartType')?.value,
         interval: interval + unit
      }
    }
      this.chartService.createChart(chartToCreate).
        subscribe((val: any) => {
          this.aggs = val;
          this.dialogRef.close(this.aggs);
          console.log(val);
        });
    }
}
