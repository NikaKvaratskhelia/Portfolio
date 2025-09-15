import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMiniComponent } from './portfolio-mini.component';

describe('PortolioMiniComponent', () => {
  let component: PortfolioMiniComponent;
  let fixture: ComponentFixture<PortfolioMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
