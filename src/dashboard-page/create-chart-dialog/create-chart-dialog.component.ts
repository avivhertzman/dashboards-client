import { Component, EventEmitter, Output } from '@angular/core';
import { CreateChartDialogContentComponent } from './create-chart-dialog-content/create-chart-dialog-content.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'create-chart-dialog',
  templateUrl: './create-chart-dialog.component.html',
  styleUrls: ['./create-chart-dialog.component.css']
})
export class CreateChartDialogComponent {
  aggregation: any;
  @Output() chartCreatedEvent: EventEmitter<any> = new EventEmitter();
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef: any = this.dialog.open(CreateChartDialogContentComponent, {
      data: "aviv",
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.aggregation = result;
      this.chartCreatedEvent.emit(this.aggregation);
      console.log('The dialog was closed');
    });
  }

}
