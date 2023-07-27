import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChartDialogContentComponent } from './create-chart-dialog-content.component';

describe('CreateChartDialogContentComponent', () => {
  let component: CreateChartDialogContentComponent;
  let fixture: ComponentFixture<CreateChartDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChartDialogContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateChartDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
