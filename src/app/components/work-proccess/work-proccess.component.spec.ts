import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProccessComponent } from './work-proccess.component';

describe('WorkProccessComponent', () => {
  let component: WorkProccessComponent;
  let fixture: ComponentFixture<WorkProccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkProccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
