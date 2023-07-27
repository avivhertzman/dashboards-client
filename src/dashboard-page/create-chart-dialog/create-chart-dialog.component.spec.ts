import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChartDialogComponent } from './create-chart-dialog.component';

describe('CreateChartDialogComponent', () => {
  let component: CreateChartDialogComponent;
  let fixture: ComponentFixture<CreateChartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChartDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
